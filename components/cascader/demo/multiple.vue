<docs>
---
order: 5.1
version: 3.0.0
title:
  zh-CN: 多选
  en-US: Multiple
---

## zh-CN

一次性选择多个选项。

## en-US

Select multiple options
</docs>
<template>
  <a-cascader
    v-model:value="value"
    style="width: 233px"
    multiple
    :max-tag-count="1"
    :maxTagTextLength="4"
    :maxSelectTextLength="4"
    :options="options"
    :clearSearchValueable="false"
    :show-search="{ filter }"
    placeholder="Please select"
  ></a-cascader>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { CascaderProps } from '@fe6/water-pro';
const options: CascaderProps['options'] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number-Floor-back-many ${index}`, value: index })),
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
    const filter: any = (inputValue, path) => {
      return path.some(
        (option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
      );
    };
    return {
      filter,
      value: ref<(string | number)[][]>([
        ['light', 0],
        ['light', 1],
      ]),
      options,
    };
  },
});
</script>
