<docs>
---
order: 5
title:
  zh-CN: RadioGroup 组合 - 配置方式
  en-US: RadioGroup group - optional
---

## zh-CN

通过配置 `options` 参数来渲染单选框。`option-type="button"` 设置按钮形式， `buttonStyle="solid"` 设置按钮类型

## en-US

Render radios by configuring `options`.

</docs>
<template>
  <div>
    <a-radio-group v-model:value="value1" :options="plainOptions" />
    <br />
    <a-radio-group v-model:value="value2" :options="optionsWithDisabled" />
    <br />
    <a-radio-group v-model:value="value3" :options="plainOptions" disabled />
    <br />
    <a-radio-group v-model:value="value1" option-type="button" :options="plainOptions" />
    <br />
    <a-radio-group v-model:value="value2" option-type="button" :options="optionsWithDisabled" />
    <br />
    <a-radio-group v-model:value="value3" option-type="button" :options="plainOptions" disabled />
    <br />
    <br />
    <a-radio-group
      option-type="button"
      buttonStyle="solid"
      :options="plainOptions"
      v-model:value="value1"
    />
    <br />
    <a-radio-group
      size="small"
      option-type="button"
      buttonStyle="solid"
      v-model:value="value2"
      :options="options"
      disabled
    />
    <br />
    <a-radio-group
      size="large"
      option-type="button"
      buttonStyle="solid"
      v-model:value="value3"
      :options="optionsWithDisabled"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { RadioGroupProps } from '@fe6/water-pro';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled: RadioGroupProps['options'] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
export default defineComponent({
  data() {
    const value1 = ref<string>('Apple');
    const value2 = ref<string>('Apple');
    const value3 = ref<string>('Apple');

    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1,
      value2,
      value3,
    };
  },
});
</script>
