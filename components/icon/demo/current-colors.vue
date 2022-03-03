<docs>
---
order: 3
title:
  zh-CN: 颜色
  en-US: Color
---

## zh-CN

`:colors="['currentColor']"` 会让图标颜色继承父级颜色 。

## en-US

:colors="['currentColor']".

</docs>

<template>
  <div class="icons-list">
    <IconBytedVideo :colors="['currentColor']" />
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
.icons-list {
  color: red;
}
.icons-list :deep(.cube-icon) {
  margin-right: 16px;
  font-size: 64px;
}
</style>
