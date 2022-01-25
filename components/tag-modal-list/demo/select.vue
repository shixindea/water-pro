<docs>
---
order: 0
title:
  zh-CN: 选择器模式
  en-US: Select
---

## zh-CN

`type="select"`

## en-US

`type="select"`
</docs>

<template>
  <a-tag-modal-list
    style="width: 300px"
    v-model:value="tags"
    size="large"
    :api="tagModalListApi"
    value-label="value"
    name-label="label"
    type="select"
  />
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
    return {
      tags: ref([80, 380]),
      tagModalListApi,
    };
  },
});
</script>
