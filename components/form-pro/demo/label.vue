<docs>
---
order: 0
title:
  zh-CN: 动态 label
  en-US: Label
---

## zh-CN

动态 label

## en-US

Label.
</docs>

<template>
  <a-form-pro :schemas="schemas" @submit="handleSubmit" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

const schemas: FormProSchema[] = [
  {
    field: 'eafieldbb',
    component: 'Input',
    label: (params) => {
      const { eafield2 } = params.value.values;

      let fText = '字段一';

      if (eafield2) {
        if (eafield2 === 1) {
          fText = 'New1';
        } else {
          fText = 'New2';
        }
      }
      return fText;
    },
  },
  {
    field: 'eafield2',
    component: 'Select',
    label: '字段2',
    componentProps: {
      options: [
        {
          label: 'label1',
          value: 1,
        },
        {
          label: 'label2',
          value: 2,
        },
      ],
      placeholder: '选择一下，改变 label',
    },
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '操作点数据吧' : myValues);
      console.log('提交的数据:' + JSON.stringify(values));
    },
  },
});
</script>
