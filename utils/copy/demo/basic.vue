<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

</docs>

<template>
  <a-button @click="copy">复制</a-button>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { utils, message } from '@fe6/water-pro';

const copy = async (str: string) => {
  const cEnd = utils.copy(str);
  await nextTick();
  if (cEnd) {
    message.success('复制成功');
  } else {
    message.error('复制失败');
  }
};
export default defineComponent({
  setup() {
    return {
      copy: async () => {
        await copy('Water Pro is best!');
      },
    };
  },
});
</script>
