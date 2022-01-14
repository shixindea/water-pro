<docs>
---
order: 11
title:
  zh-CN: 自定义字段
  en-US: FieldNames
---

## zh-CN

自定义option选项的字段名字。

## en-US

FieldNames

</docs>

<template>
  <a-space style="width: 100%" direction="vertical">
    <a-select-api
      v-model:value="value1"
      :options="options1"
      @change="handleChange"
      style="width: 100%"
      allow-clear
      :fieldNames="fieldNames"
    />
    <a-select-api
      v-model:value="value2"
      style="width: 100%"
      :options="options2"
      mode="multiple"
      allow-clear
      :fieldNames="fieldNames"
    />
  </a-space>
</template>
<script lang="ts">
import type { SelectProps } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const opt1 = [
  {
    id: 'jack',
    name: 'Jack',
  },
  {
    id: 'lucy',
    name: 'Lucy',
  },
  {
    id: 'disabled',
    name: 'Disabled',
    disabled: true,
  },
  {
    id: 'yiminghe',
    name: 'Yiminghe',
  },
];

const opt2 = [
  {
    name: 'water',
    id: 90,
    children: [
      {
        name: 'select',
        disabled: true,
        id: 901,
      },
      {
        name: 'input',
        id: 902,
      },
    ],
  },
  {
    name: 'vant',
    id: 80,
    children: [
      {
        name: 'good',
        id: 801,
      },
      {
        name: 'best',
        id: 802,
      },
    ],
  },
  {
    name: 'antd',
    disabled: true,
    id: 80,
  },
];

export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const options1 = ref<SelectProps['options']>(opt1);
    const options2 = ref<SelectProps['options']>(opt2);
    return {
      handleChange,
      fieldNames: {
        value: 'id',
        label: 'name',
        options: 'children',
      },
      value1: ref('lucy'),
      value2: ref([801]),
      options1,
      options2,
    };
  },
});
</script>
