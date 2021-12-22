<docs>
---
order: 0
title:
  zh-CN: 字段名字的宽度
  en-US: Fix Width
---

## zh-CN

全局匹配。按钮位置只会跟随全局配置

## en-US

Fix Width.
</docs>

<template>
  <a-form-pro @register="ruleForm" />
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type { FormProSchema, RenderCallbackParams } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'lwfield1',
    component: 'Switch',
    label: '点下试试',
  },
  {
    field: 'lwfield3',
    label: ' ',
    component: 'InputTextArea',
    labelWidth: 200,
    ifShow: (ifShowParams: ComputedRef<RenderCallbackParams>) => {
      const { values } = ifShowParams.value;
      return !!values.lwfield1;
    },
  },
];

export default defineComponent({
  setup() {
    const [ruleForm] = useForm({
      schemas,
      labelWidth: 200,
      colon: false,
    });
    return {
      ruleForm,
    };
  },
});
</script>
