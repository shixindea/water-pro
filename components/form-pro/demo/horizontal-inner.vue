<docs>
---
order: 0
title:
  zh-CN: 水平内联
  en-US: Horizontal Inner
---

## zh-CN

水平内联

## en-US

Horizontal Inner.
</docs>

<template>
  <a-form-pro @register="injectFormPro" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';
import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'hifield1',
    component: 'Input',
    componentProps: {
      placeholder: '字段1',
    },
  },
  {
    field: 'hifield2',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'water',
          value: 12,
        },
        {
          label: 'antd',
          value: 23,
        },
      ],
      placeholder: '字段2',
    },
  },
];

export default defineComponent({
  setup() {
    const [injectFormPro] = useForm({
      schemas,
      actionColOptions: {
        span: 8,
      },
      baseGutter: 16,
    });
    return {
      injectFormPro,
    };
  },
});
</script>
