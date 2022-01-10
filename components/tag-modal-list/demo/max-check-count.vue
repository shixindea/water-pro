<docs>
---
order: 0
title:
  zh-CN: 最多选几个
  en-US: MaxCheckCount
---

## zh-CN

在多选模式，可设置(`:max-check-count="3"`)最多选几个。

## en-US

`:max-check-count="3"`
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
      :max-check-count="3"
      ref="tagModalNode"
    />
  </div>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({ success }: AjaxApi) => {
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
