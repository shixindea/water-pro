<docs>
---
order: 3
title:
  zh-CN: 颜色
  en-US: Color
---

## zh-CN

通过 ***colors*** 设置 。

## en-US

from colors prop.

</docs>

<template>
  <div class="icons-list">
    <IconBytedVideo theme="outline" :colors="['#0f0']" />
    <IconBytedVideo theme="filled" :colors="['#0f0', '#f00']" />
    <IconBytedVideo theme="twoTone" :colors="['#0f0', '#f00']" />
    <IconBytedVideo theme="multiColor" :colors="['#0f0', '#f00', '#00f', '#f0f']" />
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
  font-size: 64px;
}
</style>
