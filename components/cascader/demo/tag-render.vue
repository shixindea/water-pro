<docs>
---
order: 5.1
version: 3.0.0
title:
  zh-CN: 多选自定义 内容
  en-US: TagRender
---

## zh-CN

通过 `tag-render` 自定义内容。

## en-US

tag-render
</docs>
<template>
  <a-cascader
    v-model:value="value"
    style="width: 233px"
    multiple
    max-tag-count="responsive"
    :options="options"
    placeholder="Please select"
    :tag-render="tagRender"
  ></a-cascader>
</template>
<script lang="ts">
import { h, defineComponent, ref } from 'vue';
import type { CascaderProps, CascaderCustomTagProps } from '@fe6/water-pro';
import { Tag } from '@fe6/water-pro';
const options: CascaderProps['options'] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
      children: new Array(20).fill(null).map((_, index) => ({
        label: `The ${index}`,
        value: `the${index}`,
      })),
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const tagRender = ({ itemOption: { labelCells } }: CascaderCustomTagProps) => {
      return h(Tag, () => labelCells[labelCells.length - 2]);
    };
    return {
      value: ref<string[]>([]),
      options,
      tagRender,
    };
  },
});
</script>
