<docs>
---
order: 2
title:
  zh-CN: 自定义 Icon 图标
  en-US: Customize icon
---

## zh-CN

使用 `icon` 自定义提示 `icon`。

## en-US

Set `icon` props to customize the icon.

</docs>

<template>
  <a-popconfirm title="Are you sure？">
    <template #icon><IconBytedHelp :colors="['red']" /></template>
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script lang="ts">
import IconBytedHelp from '@fe6/icon-vue/lib/icons/byted-help';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconBytedHelp,
  },
});
</script>
