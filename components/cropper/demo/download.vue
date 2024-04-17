<docs>
---
order: 0
title:
  zh-CN: 下载
  en-US: Base
---

## zh-CN

下载。

## en-US

下载.
</docs>

<template>
  <div>
    <a-button style="margin-bottom: 24px;" type="primary" @click="onDownLoad">下载</a-button>
    <a-cropper ref="theCropper" src="https://dz-cdn.test.fanzhi.cn/images/88/6f/39057702af25a0eb4dbc61114e02.jpg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const theCropper = ref();

const onDownLoad = () => {
  const result = theCropper.value.getResult().canvas.toDataURL();
  const newTab: any = window.open();
  newTab.document.body.innerHTML = `<img src="${result}"></img>`;
}
</script>
