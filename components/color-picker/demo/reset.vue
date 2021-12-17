<docs>
---
order: 0
title:
  zh-CN: 重置
  en-US: Reset
---

## zh-CN

可重置的。默认初始颜色为： `#ffffff`

## en-US

Reset.The default initial color is: `#ffffff`
</docs>

<template>
  <a-space>
    <a-typography-link @click="resetColor">重置</a-typography-link>
    <a-color-picker v-model:value="value" />
    <a-color-picker v-model:value="value" mode="simple" />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#1996f9');
    return {
      value,
      resetColor: () => {
        value.value = '#ffffff';
      },
    };
  },
});
</script>
