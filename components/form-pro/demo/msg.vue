<docs>
---
order: 0
title:
  zh-CN: 字段提示
  en-US: Field Message
---

## zh-CN

字段提示

## en-US

Field Message.
</docs>

<template>
  <a-form-pro @register="msgFormPro" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'mfield1',
    component: 'Input',
    label: '字段1',
    helpMessage: '这是一个字段',
    helpComponentProps: {
      maxWidth: '40px',
      color: '#1996f9',
      fontSize: '24px',
      placement: 'bottomLeft',
    },
  },
];

export default defineComponent({
  setup() {
    const [msgFormPro] = useForm({
      schemas,
    });
    return {
      msgFormPro,
    };
  },
});
</script>
