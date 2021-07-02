<template>
  <a-form-pro
    :schemas="schemas"
  >
  <template #f3="{ model, field }">
    <span>这是 f3 的 slot 。 {{model}}-{{field}} 是数据</span>
  </template>
  </a-form-pro>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';

import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { FormSchema } from '@fe6/water-pro';
import Input from '@fe6/water-pro/es/input';
import Tooltip from '@fe6/water-pro/es/tooltip';

const schemas: FormSchema[] = [
  {
    field: 'sfield1',
    component: 'Input',
    label: '首尾自定义',
    componentProps: ({ schema, formModel }) => {
      return {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          console.log(schema, formModel, e);
        },
      };
    },
    renderComponentContent: () => {
      return {
        prefix: () => 'pSlot',
        suffix: () => 'sSlot',
      };
    },
  },
  {
    field: 'sfield2',
    component: 'Checkbox',
    label: '选项自定义',
    renderComponentContent: () => h('span', 'Check'),
  },
  {
    field: 'sfield3',
    component: 'Input',
    label: 'render 方式',
    render: ({ model, field }) => {
      return h(Input, {
        placeholder: 'change 方法修改提交数据',
        value: model[field],
        onChange: (e: ChangeEvent) => {
          model[field] = e.target.value;
        },
      });
    },
  },
  {
    field: 'sfield4',
    component: 'Input',
    label: '自定义Slot',
    slot: 'sfield4',
  },
  {
    field: 'sfield5',
    component: 'Input',
    label: '自定义组件',
    defaultValue: 'water pro',
    componentProps: ({ schema, formModel }) => {
      console.log('form:', schema);
      console.log('formModel:', formModel);
      return {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      };
    },
    renderComponentContent: () => {
      return {
        prefix: () => 'pSlot',
        suffix: () => 'sSlot',
      };
    },
  },
  {
    field: 'sfield6',
    component: 'Input',
    label: '带后缀',
    defaultValue: 'water',
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
    suffix: () => h(Tooltip, {
      title: 'water is best!'
    }, () => h(InfoCircleOutlined)),
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
});
</script>
