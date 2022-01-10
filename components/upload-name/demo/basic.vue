<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.
</docs>

<template>
  <a-upload-name
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    accept="image/png,image/jpeg,image/gif"
    :merge-change-datas="mergeChangeDatas"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
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
