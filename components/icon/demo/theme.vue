<docs>
---
order: 3
title:
  zh-CN: 多种主题
  en-US: more themes
---

## zh-CN

通过 ***theme*** 设置主题颜色，如 `theme="filled"` ，默认主题是 ***outline***。

## en-US

You can set `two-tone-color` prop to specific primary color for two-tone icons.

</docs>

<template>
  <div class="icons-list">
    <IconBytedVideo theme="outline" />
    <IconBytedVideo theme="filled" />
    <IconBytedVideo theme="twoTone" />
    <IconBytedVideo theme="multiColor" />
  </div>
</template>
<script>
import IconBytedVideo from '@fe6/icon-vue/lib/icons/byted-video';
export default {
  components: {
    IconBytedVideo,
  },
};
</script>
<style scoped>
.icons-list :deep(.cube-icon) {
  margin-right: 16px;
  font-size: 48px;
}
</style>
