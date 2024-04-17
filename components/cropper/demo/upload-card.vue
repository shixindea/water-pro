<docs>
---
order: 0
title:
  zh-CN: 上传卡片
  en-US: Base
---

## zh-CN

上传卡片。

## en-US

上传卡片.
</docs>

<template>
  <div>
    <a-upload-card
      name="base64String"
      :before-upload="beforeUploadFn"
      accept="image/png,image/jpeg,image/gif"
      :mergeOriginDatas="onUploadDatasHandle"
      @change="onChangeImages"
      @dragEnd="
        (theOldIndex: number, theNewIndex: number) =>
          onDragEnd(theUrl, theOldIndex, theNewIndex)
      "
      multiple
      :maxUploadCount="10"
      draggable
      :cropper="true"
      :cropperProps="{
        ratio: 2
      }"
      result-key="data"
      action="https://dz-api.test.fanzhi.cn/common/upload/images/base64"
      :data="{
        topic: 'shop'
      }"
      :headers="{
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxMjk1NywiY291bnRyeV9jb2RlIjoiODYiLCJtb2JpbGUiOiIxMzAwMDAwMDAwOCIsImp3dF9zY2VuZSI6ImJfd2ViIiwiaXNzIjoicGhwZXI2NjYvand0IiwianRpIjoiYl93ZWJfNjYxMjA5Yjg4MTk1YTYuNjAwMDE5NDYiLCJpYXQiOjE3MTI0NTgxNjgsIm5iZiI6MTcxMjQ1ODE2OCwiZXhwIjoxNzE1MDUwMTY4fQ.RGF0iAFYJkcDfPNXV16vbub1xjsHzg5kHd54XbVozSY',
        ['Gw-Request-Shop-Id']: 653369,
        ['Gw-Request-Organize-Id']: 32263,
        ['Gw-Request-Biz-Code']: 'dz_hw',
      }"
      v-model:value="theUrl"
    />
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, ref } from 'vue';
import message from '../../message';

const theUrl = shallowRef<string[]>(['https://dz-cdn.test.fanzhi.cn/images/4b/c0/ff0ad1a9bc466bb84a2dfa88d798.jpg', 'https://dz-cdn.test.fanzhi.cn/images/62/fd/1d95fcec91b12b5cccd057eaad15.jpg']);

const theUploadMaxSize = 2;

const beforeUploadFn = (file: any) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' || file.type === 'image/png' || 'image/gif';
  if (!isJpgOrPng) {
    message.error('图片格式不正确');
  }
  const theIsLimit = file.size / 1024 / 1024 < theUploadMaxSize;
  if (!theIsLimit) {
    message.error(`图片大小不能超过${theUploadMaxSize}M`);
  }
  return isJpgOrPng && theIsLimit;
};

const thePosterIds: any = ref({});
const thePosterImages = ref<any>([]);

const onUploadDatasHandle = (_: any, { file }: any) => {
  if (file && file.response.data && file.response.data.fileId) {
    thePosterIds.value[file.response.data.fileId] = file.response.data.url;
  }
  return _;
};
const onDragEnd = (
  thePosterIds: any,
  theOldIndex: number,
  theNewIndex: number,
) => {
  const theImages: any =
    thePosterImages.value?.length > 0 ? thePosterImages.value : thePosterIds;
  const theOldImage: any = theImages[theOldIndex];
  thePosterImages.value[theOldIndex] = theImages[theNewIndex];
  thePosterImages.value[theNewIndex] = theOldImage;
};
const onChangeImages = (newValue: any) => {
  // 新增
  newValue.forEach((theNew: string) => {
    const theIndex = thePosterImages.value.findIndex(
      (theOld: string) => theOld === theNew,
    );
    if (theIndex === -1) {
      thePosterImages.value.push(theNew);
    }
  });
  // 删除
  let theDelIdx = -1;
  thePosterImages.value.forEach((theNew: string, theIdx: number) => {
    const theIndex = newValue.findIndex(
      (theOld: string) => theOld === theNew,
    );
    if (theIndex === -1) {
      theDelIdx = theIdx;
    }
  });
  if (theDelIdx > -1) {
    thePosterImages.value.splice(theDelIdx, 1);
  }
};
</script>
