<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

通过 `@fe6/icon-vue` 引用 Icon 组件。

## en-US

Import icons from `@fe6/icon-vue`.

</docs>

<template>
  <div class="icons-list">
    <IconAntdCloudUpload />
    <IconAntdSmile />
    <IconAntdFileSync />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IconAntdSmile from '@fe6/icon-vue/lib/icons/antd-smile';
import IconAntdFileSync from '@fe6/icon-vue/lib/icons/antd-file-sync';
import IconAntdCloudUpload from '@fe6/icon-vue/lib/icons/antd-cloud-upload';
export default defineComponent({
  components: {
    IconAntdSmile,
    IconAntdFileSync,
    IconAntdCloudUpload,
  },
});
</script>
<style scoped>
.icons-list :deep(.anticon),
.icons-list :deep(.cube-icon) {
  margin-right: 16px;
  font-size: 24px;
}
</style>
