<docs>
---
order: 0
title:
  zh-CN: 多选
  en-US: Multiple
---

## zh-CN

添加 `multiple` 可多选上传。设置 `max-upload-count` 可设置多做传多少张

## en-US

The multiple usage.
</docs>

<template>
  <a-upload-card
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    resultKey="data"
    v-model:value="list"
    :headers="headers"
    accept="image/png,image/jpeg,image/gif"
    multiple
    :max-upload-count="2"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
      list: ref(['https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png']),
    };
  },
});
</script>
