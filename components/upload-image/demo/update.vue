<docs>
---
order: 0
title:
  zh-CN: 可删可预览
  en-US: AllowUpdate
---

## zh-CN

`allowUpdate`

## en-US

`allowUpdate`
</docs>

<template>
  <a-upload-image
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    result-key="data"
    accept="image/png,image/jpeg,image/gif"
    allow-update
    v-model:value="val"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      val: ref('https://cdn.dev.mosh.cn/image/e0/83/38e84e39e9ea31e785cac2ca8478.jpeg'),
    };
  },
});
</script>
