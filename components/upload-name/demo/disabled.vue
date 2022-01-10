<docs>
---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
---

## zh-CN

disabled。

## en-US

Disabled.
</docs>

<template>
  <a-upload-name disabled v-model:value="val" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      val: ref({
        url: 'https://cdn.dev.mosh.cn/image/e0/83/38e84e39e9ea31e785cac2ca8478.jpeg',
        name: '爱爱爱.jpeg',
      }),
    };
  },
});
</script>
