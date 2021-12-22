<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本使用。

## en-US

Basic Usage

</docs>

<template>
  <a-select-api
    style="width: 200px"
    :api="getSelectForOptions"
    :api-params="{
      id: 1,
      page: 2,
    }"
    v-model:value="selectApiValue"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({ params, success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: `water-${params.id}`,
        disabled: true,
        value: 90,
      },
      {
        label: `antd-${params.page}`,
        value: 80,
      },
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const selectApiValue = ref('');
    return {
      getSelectForOptions,
      selectApiValue,
    };
  },
});
</script>
