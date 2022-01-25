<docs>
---
order: 0
title:
  zh-CN: 单选自定义内容
  en-US: DisplayRender
---

## zh-CN

`display-render` 自定义内容。

## en-US

display-render.

</docs>
<template>
  <a-cascader v-model:value="value" :options="options" :display-render="displayRender" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { CascaderProps, CascaderDisplayRenderOptions } from '@fe6/water-pro';

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
  setup() {
    const displayRender = ({ labels }: CascaderDisplayRenderOptions) => {
      return labels?.[labels.length - 1] || '';
    };
    return {
      value: ref<string[]>(['zhejiang', 'hangzhou', 'xihu']),
      options,
      displayRender,
    };
  },
});
</script>
