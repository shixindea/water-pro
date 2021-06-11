<template>
  <a-form-pro
    @register="ruleForm"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro/es/form-pro/index';

const schemas: FormSchema[] = [
  {
    field: 'lwfield1',
    component: 'Input',
    label: '全局配置',
  },
  {
    field: 'lwfield3',
    component: 'Input',
    label: 'labelWidth 字段配置中定制',
    labelWidth: 400,
  },
];

export default defineComponent({
  setup() {
    const [
      ruleForm,
    ] = useForm({
      schemas,
      labelWidth: 200,
    });
    return {
      ruleForm,
    };
  },
});
</script>
