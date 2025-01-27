<docs>
---
order: 0
title:
  zh-CN: 规则验证
  en-US: Rule
---

## zh-CN

规则验证。更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)

## en-US

See [async-validator](https://github.com/yiminghe/async-validator).
</docs>

<template>
  <a-form-pro @register="ruleForm" @submit="subRuleForm">
    <template #inputGroup="{ model, field }">
      <a-input-group compact>
        <a-select
          placeholder="卡类型"
          v-model:value="model['inputGroupSelect']"
          style="width: 20%"
          @change="changeSelect"
        >
          <a-select-option value="zfb"> 支付宝 </a-select-option>
          <a-select-option value="yl"> 银联 </a-select-option>
        </a-select>
        <a-form-item-rest>
          <a-input style="width: 80%" placeholder="卡号" v-model:value="model[field]" />
        </a-form-item-rest>
      </a-input-group>
    </template>
  </a-form-pro>
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type { FormProSchema, RenderCallbackParams } from '@fe6/water-pro';
import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'ruleInputGroup',
    component: 'Slot',
    label: '输入框组合',
    slot: 'inputGroup',
    helpMessage: 'NOTE: 在 form-pro 模板中对应 inputGroup 的 slot',
    subLabel: 'slot 的 select 需要手动监听 change 进行验证',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [
        {
          required: true,
          validator: () => {
            const { ruleInputGroup, inputGroupSelect } = ruleParams.value.values;
            if (!inputGroupSelect) {
              return Promise.reject(new Error('请选择 卡类型'));
            }
            if (!ruleInputGroup) {
              return Promise.reject(new Error('请输入 卡号'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
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
    const [ruleForm, { validateFields }] = useForm({
      schemas,
      labelCol: {
        span: 24,
      },
      wrapperCol: {
        span: 24,
      },
      actionColOptions: {
        span: 24,
        push: 0,
      },
    });
    return {
      ruleForm,
      changeSelect: () => {
        validateFields('inputGroup');
      },
      subRuleForm: (data: any) => {
        console.log(data, 'sub data');
      },
    };
  },
});
</script>
