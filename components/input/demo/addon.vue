<docs>
---
order: 8
title:
  zh-CN: 前置/后置标签
  en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

</docs>
<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value1" addon-before="Http://" addon-after=".com" />
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value1" :addon-before="addonBefore" :addon-after="addonAfter" />
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value2">
        <template #addonBefore>
          <a-select v-model:value="value3" style="width: 90px">
            <a-select-option value="Http://">Http://</a-select-option>
            <a-select-option value="Https://">Https://</a-select-option>
          </a-select>
        </template>
        <template #addonAfter>
          <a-select v-model:value="value4" style="width: 80px">
            <a-select-option value=".com">.com</a-select-option>
            <a-select-option value=".jp">.jp</a-select-option>
            <a-select-option value=".cn">.cn</a-select-option>
            <a-select-option value=".org">.org</a-select-option>
          </a-select>
        </template>
      </a-input>
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value5">
        <template #addonAfter>
          <IconBytedSetting :colors="['#f0f']" />
        </template>
      </a-input>
    </div>
  </div>
</template>

<script lang="ts">
import IconBytedSetting from '@fe6/icon-vue/lib/icons/byted-setting';
import { defineComponent, ref, h } from 'vue';
import { Select } from '@fe6/water-pro';

const beforeOptions = [
  {
    label: 'Http1://',
    value: 'Http://',
  },
  {
    label: 'Https2://',
    value: 'Https://',
  },
];

const afterOptions = [
  {
    label: '.com1',
    value: '.com',
  },
  {
    label: '.jp2',
    value: '.jp',
  },
  {
    label: '.cn3',
    value: '.cn',
  },
  {
    label: '.org4',
    value: '.org',
  },
];

export default defineComponent({
  components: {
    IconBytedSetting,
  },

  setup() {
    const value1 = ref<string>('mysite');
    const value2 = ref<string>('mysite');
    const value3 = ref<string>('Http://');
    const value4 = ref<string>('.com');
    const value5 = ref<string>('mysite');

    const addonBefore = () => {
      return h(Select, {
        value: value3,
        onChange: (new3Value: string) => {
          value3.value = new3Value;
        },
        options: beforeOptions,
      });
    };

    const addonAfter = () => {
      return h(Select, {
        value: value4.value,
        onChange: (new4Value: string) => {
          value4.value = new4Value;
        },
        options: afterOptions,
      });
    };
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      addonBefore,
      addonAfter,
    };
  },
});
</script>
