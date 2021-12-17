<docs>
---
order: 0
title:
  zh-CN: 三种大小
  en-US: Size
---

## zh-CN

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

## en-US

There are three sizes of an Input box: `large` (40px)、`default` (32px) and `small` (24px).
</docs>

<template>
  <div class="components-input-demo-size">
    <a-space direction="vertical" :fontSize="0">
      <a-color-picker v-model:value="value" size="large" />
      <a-color-picker v-model:value="value" />
      <a-color-picker v-model:value="value" size="small" />
      <a-color-picker v-model:value="value" mode="simple" size="large" />
      <a-color-picker v-model:value="value" mode="simple" />
      <a-color-picker v-model:value="value" mode="simple" size="small" />
    </a-space>
  </div>
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
