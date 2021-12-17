<docs>
---
order: 0
title:
  zh-CN: 预定义颜色
  en-US: Color
---

## zh-CN

`:predefine="['red','yellow','blue','black','gray']"`

## en-US

Color.
</docs>

<template>
  <a-color-picker v-model:value="value" :predefine="predefine" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#00ff00');
    return {
      value,
      predefine: ['red', 'yellow', 'blue', 'black', 'gray'],
    };
  },
});
</script>
