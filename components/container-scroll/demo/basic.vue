<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic
---

## zh-CN

基本使用

## en-US

Basic.

</docs>

<template>
  <div>
    <a-button type="primary" @click="go30px">到 30 px</a-button>
    <a-container-scroll ref="scrollNode" style="height: 200px" @change="changeScroll">
      <div style="height: 400px">这里面是个内容</div>
      <div>这里面是个内容</div>
    </a-container-scroll>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const changeScroll = (moveX: number, moveY: number) => {
  console.log(moveX, moveY, 'change');
};
const scrollNode = ref(null);
const go30px = () => {
  scrollNode.value.scrollTo(30);
};
</script>
