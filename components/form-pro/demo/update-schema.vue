<docs>
---
order: 0
title:
  zh-CN: 特殊的使用
  en-US: Update schema
---

## zh-CN

特殊的使用

## en-US

Update schema
</docs>

<template>
  <div>
    <a-button @click="renderForm">生成表单</a-button>
    <a-divider />
    <a-form-pro @register="updateSchemaFormPro" @submit="updateSchemaHandleSubmit" />
  </div>
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'usfield1',
    component: 'DatePicker',
    label: 'DatePicker',
  },
];

export default defineComponent({
  setup() {
    const [updateSchemaFormPro, updateSchemaFormActions] = useForm({
      schemas: [],
      showActionButtonGroup: false,
    });

    const updateSchemaHandleSubmit = async () => {
      try {
        const updateParams = await updateSchemaFormActions.validate();
        console.log(JSON.stringify(updateParams), 'updateParams');
      } catch (err) {}
    };

    const renderForm = async () => {
      await updateSchemaFormActions.updateSchema(schemas, true);
    };

    return {
      updateSchemaFormPro,
      updateSchemaHandleSubmit,
      renderForm,
    };
  },
});
</script>
