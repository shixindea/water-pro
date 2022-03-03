<docs>
---
order: 7
title:
  zh-CN: 自定义 icon
  en-US: Custom icon
---

## zh-CN

自定义 icon。

## en-US

Custom icon.

</docs>

<template>
  <a-result title="Great, we have done all the operations!">
    <template #icon>
      <IconBytedSmilingFace :colors="['currentColor']" />
    </template>
    <template #extra>
      <a-button type="primary">Next</a-button>
    </template>
  </a-result>
</template>
<script lang="ts">
import IconBytedSmilingFace from '@fe6/icon-vue/lib/icons/byted-smiling-face';

import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconBytedSmilingFace,
  },
});
</script>
