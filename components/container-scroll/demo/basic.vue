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
  <a-container-scroll style="height: 200px" @change="changeScroll">
    <div style="height: 400px">这里面是个内容</div>
    <div>这里面是个内容</div>
  </a-container-scroll>
</template>

<script lang="ts" setup>
const changeScroll = (moveX: number, moveY: number) => {
  console.log(moveX, moveY, 'change');
};
</script>
