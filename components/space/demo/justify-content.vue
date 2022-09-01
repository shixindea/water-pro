<docs>
---
order: 0
title:
  zh-CN: 垂直对齐
  en-US: Justify content
---

## zh-CN

相邻组件垂直对齐。


## en-US

Crowded components horizontal spacing.

</docs>

<template>
  <a-space blockable justifyContent="space-between" algin="center">
    <a-typography-title resetable :level="2">h2. Water Pro</a-typography-title>
    <a-button>按钮</a-button>
  </a-space>
</template>
<script lang="ts">
import IconBytedUpload from '@fe6/icon-vue/lib/icons/byted-upload';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IconBytedUpload,
  },
});
</script>
