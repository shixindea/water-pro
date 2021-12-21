<docs>
---
order: 0
title:
  zh-CN: 分组展示
  en-US: Children
---

## zh-CN

分组展示。

## en-US

Children.
</docs>

<template>
  <a-form-pro @register="childrenPro">
    <template #resetBefore>
      <a-button>上一步</a-button>
    </template>
    <template #submitBefore>
      <a-button>children 保存</a-button>
      <a-button type="primary" @click="handleSubmit">下一步</a-button>
    </template>
  </a-form-pro>
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type { FormSchema, RenderCallbackParams } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'child1',
    component: 'Render',
    label: '字段a',
    children: [
      {
        field: 'child1Input',
        component: 'Input',
        label: '字段1',
        dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
          return [
            { required: true, type: 'string', message: `${ruleParams.value.schema.label}必填` },
          ];
        },
      },
      {
        field: 'child1Switch',
        component: 'Switch',
        label: '字段2',
      },
    ],
  },
  {
    field: 'child2',
    component: 'Render',
    label: '字段b',
    ifShow: (ifShowParams: ComputedRef<RenderCallbackParams>) => {
      const { values } = ifShowParams.value;
      return !!values?.child1Switch;
    },
    children: [
      {
        field: 'child2Input',
        component: 'Input',
        label: '字段3',
      },
      {
        field: 'child2Switch',
        component: 'Switch',
        label: '字段4',
      },
    ],
  },
  {
    field: 'child3',
    component: 'Render',
    label: '字段c',
    children: [
      {
        field: 'child3Input',
        component: 'Input',
        label: '字段5',
        ifShow: (ifShowParams: ComputedRef<RenderCallbackParams>) => {
          const { values } = ifShowParams.value;
          return !!values?.child1Switch;
        },
      },
      {
        field: 'child3Switch',
        component: 'Switch',
        label: '字段6',
      },
    ],
  },
];

export default defineComponent({
  setup() {
    const [childrenPro, { getFieldsValue, setFieldsValue, getChildrenFieldsValue }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
        push: 0,
      },
      actionAlgin: 'space-between',
      actionAffix: true,
      showResetButton: false,
      showSubmitButton: false,
      navAffix: true,
    });

    // NOTO 真实场景获取详情编辑接口，设置具体曾经的数据
    setTimeout(async () => {
      setFieldsValue({
        child1Input: 'water',
        child1Switch: true,
      });
    }, 100);
    return {
      childrenPro,
      getFieldsValue,
      getChildrenFieldsValue,
    };
  },
  methods: {
    handleSubmit() {
      const values1 = this.getFieldsValue();
      const values2 = this.getFieldsValue(true);
      const values3 = this.getChildrenFieldsValue();
      const values4 = this.getChildrenFieldsValue(true);
      (this as any).$message.info('控制台有惊喜');

      console.log('children 的提交数据全字段:' + JSON.stringify(values1));
      console.log('children 的提交数据过滤不显示的字段:' + JSON.stringify(values2));
      console.log('children 的提交数据children结构的字段:' + JSON.stringify(values3));
      console.log('children 的提交数据children结构过滤不显示的字段:' + JSON.stringify(values4));
    },
  },
});
</script>
