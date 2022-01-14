<docs>
---
order: 0
title: 
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本用法。

## en-US

Basic.

</docs>

<template>
  <a-container-list
    id="basic"
    :data="data"
    :height="200"
    :itemHeight="20"
    itemKey="id"
    :style="{
      border: '1px solid red',
      boxSizing: 'border-box',
    }"
    :children="theChildren"
  ></a-container-list>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    const data = [];
    for (let i = 0; i < 1000; i += 1) {
      data.push({
        id: String(i),
      });
    }

    return {
      data,
      theChildren: (item: any) => h('div', item.id),
    };
  },
});
</script>
