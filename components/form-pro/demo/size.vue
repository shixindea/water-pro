<docs>
---
order: 0
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大小

## en-US

Full.
</docs>

<template>
  <a-form-pro @register="fullForm" @submit="fullSubmit"> </a-form-pro>
</template>
<script lang="tsx">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const getSmsCodeApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });
};

const schemas: FormProSchema[] = [
  {
    field: 'inputSize',
    component: 'Input',
    label: '输入框',
    size: 'large',
  },
  {
    field: 'inputCountSize',
    component: 'InputCount',
    label: '限制数字的输入框',
    size: 'large',
    componentProps: {
      maxLength: 10,
    },
  },
  {
    field: 'inputSmsCodeSize',
    component: 'InputSmsCode',
    size: 'large',
    label: '短信验证码',
    componentProps: ({ formModel }) => {
      return {
        api: getSmsCodeApi,
        size: 'large',
        buttonOptions: {
          size: 'large',
        },
        ajaxParams: () => {
          return {
            phone: 13810902078,
            number: formModel.inputCount,
          };
        },
      };
    },
  },
  {
    field: 'yearPickerSize',
    component: 'YearPicker',
    label: '年份',
    size: 'large',
  },
];

export default defineComponent({
  setup() {
    const [fullForm] = useForm({
      schemas,
      labelWidth: 260,
    });
    return {
      fullForm,
      fullSubmit: (ressss) => {
        console.log(JSON.stringify(ressss), 'fullFieldParams');
      },
    };
  },
});
</script>
