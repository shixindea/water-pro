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
    :merge-change-datas="mergeChangeDatas"
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
      mergeChangeDatas(theData, { file }) {
        return {
          ...theData,
          name: file?.response?.data?.meta?.name || '',
        };
      },
    };
  },
});
</script>
