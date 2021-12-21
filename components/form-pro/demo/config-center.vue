<docs>
---
order: 0
title:
  zh-CN: 居中配置
  en-US: FormConfigCenter
---

## zh-CN

居中配置

## en-US

FormConfigCenter.
</docs>

<template>
  <a-space direction="vertical" style="width: 100%" size="large">
    <a-slider v-model:value="span" :min="1" :max="24" @change="sliderChange" />
    <a-form-pro @register="configFormPro" />
  </a-space>
</template>
<script lang="ts">
import type { FormSchema } from '@fe6/water-pro';

import { defineComponent, ref } from 'vue';

import { useForm, FORM_PRO_CONFIG_CENTER } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'configField1',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'configField2',
    component: 'Switch',
    label: '字段2',
  },
];

export default defineComponent({
  setup() {
    const span = ref(6);
    const [configFormPro, formType] = useForm({
      ...FORM_PRO_CONFIG_CENTER({ labelSpan: span.value }),
      showResetButton: false,
      schemas,
    });

    const sliderChange = () => {
      formType.setProps({
        ...FORM_PRO_CONFIG_CENTER({ labelSpan: span.value }),
        showResetButton: false,
        schemas,
      });
    };

    return {
      configFormPro,
      span,
      sliderChange,
    };
  },
});
</script>
