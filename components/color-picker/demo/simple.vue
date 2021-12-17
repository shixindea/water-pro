<docs>
---
order: 0
title:
  zh-CN: 简单模式
  en-US: Simple
---

## zh-CN

`mode="simple"`。

## en-US

Simple.
</docs>

<template>
  <a-color-picker v-model:value="value" mode="simple" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#1996f9');
    return {
      value,
    };
  },
});
</script>
