<docs>
---
order: 0
title:
  zh-CN: 传递 headers
  en-US: Headers
---

## zh-CN

传递 headers

## en-US

Headers.
</docs>

<template>
  <a-upload-name
    :headers="headers"
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    resultKey="data"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    };
  },
});
</script>
