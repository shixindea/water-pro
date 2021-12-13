<docs>
---
order: 0
title:
  zh-CN: 计数输入框
  en-US: input count
---

## zh-CN

计数输入框。

## en-US

input count example.

</docs>

<template>
  <a-input-count
    v-model:value="value"
    :max-length="6"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('water');
    return {
      value,
    };
  },
});
</script>
