<template>
  <a-form-pro
    @register="ruleForm"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'rfield1',
    component: 'Input',
    label: '字段1',
    required: true,
  },
  {
    field: 'rfield2',
    component: 'Select',
    label: '字段4',
    componentProps: {
      mode: 'multiple',
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
    rules: [
      {
        required: true,
        message: '请至少选择一个',
        type: 'array',
      },
    ],
  },
  {
    field: 'rfield3',
    component: 'Input',
    label: '自定义校验',
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: async (rule, value) => {
          if (!value) {
            /* eslint-disable-next-line */
            return Promise.reject(new Error('值不能为空'));
          }
          if (value === '1') {
            /* eslint-disable-next-line */
            return Promise.reject(new Error('值不能为1'));
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
];

export default defineComponent({
  setup() {
    const [
      ruleForm,
    ] = useForm({
      schemas,
      labelCol: {
        span: 24
      },
      wrapperCol: {
        span: 24
      },
      actionColOptions: {
        span: 24,
        push: 0
      },
    });
    return {
      ruleForm,
    };
  },
});
</script>
