<docs>
---
order: 11
title:
  zh-CN: 后缀图标
  en-US: Suffix
---

## zh-CN

自定义后缀图标

## en-US

Custom suffix icon

</docs>
<template>
  <a-cascader
    v-model:value="value1"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
  >
    <template #suffixIcon
      ><IconBytedSmilingFace :colors="['currentColor']" class="test"
    /></template>
  </a-cascader>
  <a-cascader
    v-model:value="value2"
    suffix-icon="ab"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
  />
</template>
<script lang="ts">
import type { CascaderProps } from '@fe6/water-pro';
import IconBytedSmilingFace from '@fe6/icon-vue/lib/icons/byted-smiling-face';
import { defineComponent, ref } from 'vue';
const options: CascaderProps['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  components: {
    IconBytedSmilingFace,
  },
  setup() {
    return {
      value1: ref<string[]>([]),
      value2: ref<string[]>([]),
      options,
    };
  },
});
</script>
