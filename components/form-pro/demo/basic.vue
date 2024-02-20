<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本的表单数据域控制展示，包含布局、初始化、验证、提交。`:inputEnterSubmit="true"`可回车触发 submmit 方法

## en-US

Basic Form data control. Includes layout, initial values, validation and submit.
</docs>

<template>
  <a-form-pro :schemas="schemas" @submit="handleSubmit" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

const schemas: FormProSchema[] = [
  {
    field: 'eafielda',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'eafieldb',
    component: 'Switch',
    label: '字段2',
  },
  {
    field: 'eafieldc',
    component: 'RadioGroup',
    label: '字段3',
    componentProps: {
      type: 'button',
      options: [
        {
          label: 'a',
          value: 1,
        },
        {
          label: 'b',
          value: 2,
        },
      ],
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
