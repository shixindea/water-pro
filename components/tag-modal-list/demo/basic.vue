<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.
</docs>

<template>
  <div>
    <a-button @click="onReload">reload</a-button>
    <a-divider></a-divider>
    <a-tag-modal-list
      v-model:value="tags"
      createable
      :api="tagModalListApi"
      value-label="value"
      name-label="label"
      ref="tagModalNode"
    />
  </div>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({ params, success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: '组件库',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '官网',
        children: [
          {
            label: '金茂',
            value: 380,
          },
          {
            label: '票大大',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const tagModalNode = ref(null);
    const onReload = async () => {
      await tagModalNode.value.getTagDatas(true);
      console.log(tagModalNode.value, 'tagModalNode');
    };
    return {
      tagModalNode,
      onReload,
      tags: ref([80, 380]),
      tagModalListApi,
    };
  },
});
</script>
