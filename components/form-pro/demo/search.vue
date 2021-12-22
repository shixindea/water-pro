<docs>
---
order: 0
title:
  zh-CN: 横向的
  en-US: Search
---

## zh-CN

内联字段。`layout: 'inline'` 横向，如果有样式错位，需要设置 `labelWidth` 。

## en-US

Search.
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
    field: 'infield1',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'infield2',
    component: 'Select',
    label: 'Select',
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
    },
  },
];

export default defineComponent({
  setup() {
    const [injectFormPro] = useForm({
      labelWidth: 60,
      schemas,
      layout: 'inline',
    });
    return {
      injectFormPro,
    };
  },
});
</script>
