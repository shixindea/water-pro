<docs>
---
order: 0
title:
  zh-CN: 插槽
  en-US: Slot
---

## zh-CN

插槽。`#placeholder`

## en-US

Slot.
</docs>

<template>
  <a-color-picker v-model:value="value">
    <template #placeholder>
      <p :style="{ color: value }">点击改变当前颜色: {{ value }}</p>
    </template>
  </a-color-picker>
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
