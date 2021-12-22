<docs>
---
order: 0
title:
  zh-CN: 搜索
  en-US: Search
---

## zh-CN

搜索。

## en-US

Search

</docs>

<template>
  <a-select-api
    style="width: 200px"
    :api="getSelectForOptions"
    v-model:value="selectApiValue"
    show-search
    optionFilterProp="value"
    :filterOption="filterOption"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90,
      },
      {
        label: 'antd',
        value: 80,
      },
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const selectApiValue = ref(80);
    return {
      filterOption: (inpValue: string, { label }: any) => {
        return label.indexOf(inpValue) > -1;
      },
      getSelectForOptions,
      selectApiValue,
    };
  },
});
</script>
