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
  {{ val }}
  <a-upload-image
    result-key="data"
    accept="image/png,image/jpeg,image/gif"
    allow-update
    v-model:value="val"
    action="https://dz-api.test.fanzhi.cn/common/upload/images/resource"
    :data="{
      topic: 'shop'
    }"
    :headers="{
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxMjk1NywiY291bnRyeV9jb2RlIjoiODYiLCJtb2JpbGUiOiIxMzAwMDAwMDAwOCIsImp3dF9zY2VuZSI6ImJfd2ViIiwiaXNzIjoicGhwZXI2NjYvand0IiwianRpIjoiYl93ZWJfNjYxMjA5Yjg4MTk1YTYuNjAwMDE5NDYiLCJpYXQiOjE3MTI0NTgxNjgsIm5iZiI6MTcxMjQ1ODE2OCwiZXhwIjoxNzE1MDUwMTY4fQ.RGF0iAFYJkcDfPNXV16vbub1xjsHzg5kHd54XbVozSY',
      ['Gw-Request-Shop-Id']: 653369,
      ['Gw-Request-Organize-Id']: 32263,
      ['Gw-Request-Biz-Code']: 'dz_hw',
    }"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      val: ref('https://dz-cdn.test.fanzhi.cn/images/07/b2/48c7684a9c34475d3aa69ec4be5b.jpg'),
    };
  },
});
</script>
