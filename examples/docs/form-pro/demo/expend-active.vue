<template>
  <a-form-pro @register="registerExpendActive" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro/es/form-pro/index';

const getSchamas = (): FormSchema[] => {
  return [
    {
      field: 'wafield1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '自定义placeholder',
      },
    },
    {
      field: 'wafield2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield4',
      component: 'Select',
      label: '字段4',
      colProps: {
        span: 8,
      },
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
      field: 'wafield5',
      component: 'CheckboxGroup',
      label: '字段5',
      colProps: {
        span: 8,
      },
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
      field: 'wafield7',
      component: 'RadioGroup',
      label: '字段7',
      colProps: {
        span: 8,
      },
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

function getAppendSchemas(): FormSchema[] {
  return [
    {
      field: 'wafield10',
      component: 'Input',
      label: '字段10',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield11',
      component: 'Input',
      label: '字段11',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield12',
      component: 'Input',
      label: '字段12',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield13',
      component: 'Input',
      label: '字段13',
      colProps: {
        span: 8,
      },
    },
  ];
}

export default defineComponent({
  setup() {
    const [registerExpendActive] = useForm({
      labelWidth: 120,
      schemas: [...getSchamas(), ...getAppendSchemas()],
      showAdvancedButton: true,
    });
    return {
      registerExpendActive,
    };
  },
});
</script>
