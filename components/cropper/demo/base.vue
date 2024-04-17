<docs>
---
order: 0
title:
  zh-CN: 基础使用
  en-US: Base
---

## zh-CN

基础使用。

## en-US

基础使用.
</docs>

<template>
  <a-cropper src="https://dz-cdn.test.fanzhi.cn/images/88/6f/39057702af25a0eb4dbc61114e02.jpg" @change="onChange" />
</template>

<script lang="ts" setup>
const onChange = (args) => {
  console.log(args);
}
</script>
