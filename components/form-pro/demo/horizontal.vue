<docs>
---
order: 0
title:
  zh-CN: 水平方向
  en-US: Horizontal
---

## zh-CN

水平方向

## en-US

Horizontal.
</docs>

<template>
  <a-form-pro :labelWidth="100" :schemas="schemas" @submit="handleSubmit" />
</template>
<script lang="ts">
import type { FormSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

const schemas: FormSchema[] = [
  {
    field: 'hfield1',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'hfield2',
    component: 'Switch',
    label: '字段2',
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
      handleSubmit: (values: any) => {
        console.log('提交的数据:' + JSON.stringify(values));
      },
    };
  },
});
</script>
