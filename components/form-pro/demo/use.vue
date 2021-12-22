<docs>
---
order: 0
title:
  zh-CN: use hook
  en-US: UseForm
---

## zh-CN

强烈推荐使用的最佳实践。

## en-US

useForm.
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
    field: 'usefield1',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'usefield2',
    component: 'Switch',
    label: '字段2',
  },
];

export default defineComponent({
  setup() {
    const [injectFormPro] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
      },
    });
    return {
      injectFormPro,
    };
  },
});
</script>
