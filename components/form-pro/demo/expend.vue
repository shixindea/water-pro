<docs>
---
order: 0
title:
  zh-CN: 可收起
  en-US: Expend
---

## zh-CN

多了的表单可以收起。`advancedAll: true` 默认展开

## en-US

Expend.
</docs>

<template>
  <a-form-pro @register="registerExpend" />
</template>
<script lang="ts">
import type { FormSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const getSchamas = (): FormSchema[] => {
  return [
    {
      field: 'efield1',
      component: 'Input',
      label: '字段1',
      componentProps: {
        placeholder: '自定义placeholder',
      },
    },
    {
      field: 'efield2',
      component: 'Input',
      label: '字段2',
      isAdvanced: true,
    },
    {
      field: 'efield3',
      component: 'DatePicker',
      label: '字段3',
    },
    {
      field: 'efield4',
      component: 'Select',
      label: '字段4',
      isAdvanced: true,
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
            key: '1',
          },
          {
            label: '选项2',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'efield5',
      component: 'CheckboxGroup',
      label: '字段5',
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'efield7',
      component: 'RadioGroup',
      label: '字段7',
      isAdvanced: true,
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
  ];
};

export default defineComponent({
  setup() {
    const [registerExpend] = useForm({
      labelWidth: 120,
      schemas: getSchamas(),
      showAdvancedButton: true,
      // 默认展开
      // advancedAll: true,
    });
    return {
      registerExpend,
    };
  },
});
</script>
