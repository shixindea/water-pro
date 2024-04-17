<docs>
---
order: 0
title:
  zh-CN: 上传
  en-US: Base
---

## zh-CN

上传。

## en-US

上传.
</docs>

<template>
  <div>
    <a-upload-image
      name="base64String"
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
import { shallowRef } from 'vue';

const theUrl = shallowRef<string | ArrayBuffer | null>('https://dz-cdn.test.fanzhi.cn/images/4b/c0/ff0ad1a9bc466bb84a2dfa88d798.jpg');
</script>
