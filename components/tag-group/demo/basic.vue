<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.
</docs>

<template>
  <a-tag-group :value="tagDatas" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const tagDatas = [
  {
    name: '这是很长的标签',
    id: 190,
  },
  {
    name: 'water',
    id: 290,
  },
];

export default defineComponent({
  setup() {
    return {
      tagDatas,
    };
  },
});
</script>
