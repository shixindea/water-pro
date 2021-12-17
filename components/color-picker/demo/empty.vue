<docs>
---
order: 0
title:
  zh-CN: 无默认值
  en-US: Empty
---

## zh-CN

无默认值。所以打开的颜色画板也是空的。

## en-US

Empty.
</docs>

<template>
  <a-color-picker v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>(null);
    return {
      value,
    };
  },
});
</script>
