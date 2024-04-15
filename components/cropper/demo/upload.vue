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
    <a-upload
      name="file"
      @change="onInputChange"
    >
      <a-button>
        Click to Upload
      </a-button>
    </a-upload>
    <a-cropper :src="theUrl" v-if="theUrl" @change="onChange" />
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';

const theUrl = shallowRef<string | ArrayBuffer | null>('');
const onInputChange = (sss) => {
  const file = sss.file.originFileObj; // 获取文件引用
  const reader = new FileReader(); // 创建FileReader对象

  reader.onload = function(e: any) {
    const base64String = e.target.result; // 获取Base64字符串
    console.log(base64String); // 输出Base64字符串
    // 接下来你可以使用base64String，例如将其设置为图片的src
    theUrl.value = base64String;
  };

  reader.readAsDataURL(file); // 读取文件并转换为Base64
}
const onChange = (args) => {
  console.log(args);
}
</script>
