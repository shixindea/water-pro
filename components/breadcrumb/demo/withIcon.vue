<docs>
---
order: 1
title:
  zh-CN: 带有图标的
  en-US: With an Icon
---

## zh-CN

图标放在文字前面。

## en-US

The icon should be placed in front of the text.

</docs>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item href="">
      <IconBytedHome :colors="['currentColor']" />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <IconBytedUser :colors="['currentColor']" />
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IconBytedUser from '@fe6/icon-vue/lib/icons/byted-user';
import IconBytedHome from '@fe6/icon-vue/lib/icons/byted-home';
export default defineComponent({
  components: {
    IconBytedHome,
    IconBytedUser,
  },
});
</script>
