<docs>
---
order: 0
title:
  zh-CN: 弹框一维数据
  en-US: One data
---

## zh-CN

弹框一维数据

## en-US

One data.
</docs>

<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    value-label="value"
    name-label="label"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 80,
      },
      {
        label: 'antd',
        value: 180,
      },
      {
        label: '金茂',
        value: 380,
      },
      {
        label: '票大大',
        value: 480,
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
