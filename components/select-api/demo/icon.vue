<docs>
---
order: 11
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

图标。

## en-US

Icon

</docs>

<template>
  <a-space>
    <a-select-api
      v-model:value="value1"
      style="width: 120px"
      :options="options1"
      @change="handleChange"
      allow-clear
    >
      <template #suffixIcon><IconBytedOpenAnAccount :colors="['currentColor']" /></template>
      <template #clearIcon><IconBytedAbnormal :colors="['currentColor']" /></template>
    </a-select-api>
    <a-select-api
      v-model:value="value2"
      style="width: 120px"
      disabled
      :options="options2"
      allow-clear
    >
      <template #suffixIcon><IconBytedSendEmail :colors="['currentColor']" /></template>
      <template #clearIcon><IconBytedAbnormal :colors="['currentColor']" /></template>
    </a-select-api>
  </a-space>
</template>
<script lang="ts">
import { IconBytedSendEmail, IconBytedAbnormal, IconBytedOpenAnAccount } from '@fe6/icon-vue';
import type { SelectProps } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IconBytedSendEmail,
    IconBytedAbnormal,
    IconBytedOpenAnAccount,
  },
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const options1 = ref<SelectProps['options']>([
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
      {
        value: 'yiminghe',
        label: 'Yiminghe',
      },
    ]);
    const options2 = ref<SelectProps['options']>([
      {
        value: 'lucy',
        label: 'Lucy',
      },
    ]);
    return {
      handleChange,
      value1: ref('lucy'),
      value2: ref('lucy'),
      options1,
      options2,
    };
  },
});
</script>
