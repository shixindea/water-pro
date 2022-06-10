<docs>
---
order: 6
title:
  zh-CN: 简洁的展示
  en-US: Simple mode input
---

## zh-CN

`:allowSimpleInput="false"` 简单的展示和操作

## en-US

Simple mode input.
</docs>
<template>
  <a-pagination v-model:current="current" simple :allowSimpleInput="false" :total="50" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(2);
    return {
      current,
    };
  },
});
</script>
