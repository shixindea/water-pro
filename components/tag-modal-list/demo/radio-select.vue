<docs>
---
order: 0
title:
  zh-CN: 选择器单选模式
  en-US: Select radio
---

## zh-CN

`checkMode="radio"` 和 `type="select"`

## en-US

`checkMode="radio"` and `type="select"`
</docs>

<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    valueLabel="value"
    nameLabel="label"
    checkMode="radio"
    type="select"
  />
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
    return {
      tags: ref([80]),
      tagModalListApi,
    };
  },
});
</script>
