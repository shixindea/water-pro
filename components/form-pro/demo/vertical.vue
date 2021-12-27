<docs>
---
order: 0
title:
  zh-CN: 垂直方向
  en-US: Vertical
---

## zh-CN

垂直方向

## en-US

Vertical.
</docs>

<template>
  <a-form-pro @register="filterFormPro" @submit="handleSubmit" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';
import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
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
    const [filterFormPro] = useForm({
      labelCol: {
        span: 24,
      },
      wrapperCol: {
        span: 10,
      },
      actionColOptions: {
        span: 24,
      },
      schemas,
    });
    return {
      filterFormPro,
      handleSubmit: (values: any) => {
        console.log('提交的数据:' + JSON.stringify(values));
      },
    };
  },
});
</script>
