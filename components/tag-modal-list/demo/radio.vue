<docs>
---
order: 0
title:
  zh-CN: 单选模式
  en-US: Radio
---

## zh-CN

`checkMode="radio"`

## en-US

`checkMode="radio"`
</docs>

<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    value-label="value"
    name-label="label"
    check-mode="radio"
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
      tags: ref([80]),
      tagModalListApi,
    };
  },
});
</script>
