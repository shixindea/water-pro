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
  <a-cropper src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" @change="onChange" />
</template>

<script lang="ts" setup>
const onChange = (args) => {
  console.log(args);
}
</script>
