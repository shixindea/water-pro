<docs>
---
order: 0
title:
  zh-CN: 关闭之前
  en-US: Before close
---

## zh-CN

关闭之前

## en-US

Before close.
</docs>

<template>
  <a-tag-modal-list
    :title-right-render="titleRightRender"
    style="width: 300px"
    v-model:value="tags"
    :api="tagModalListApi"
    :before-close="beforeCloseFn"
    :before-ok="beforeOkFn"
    value-label="value"
    name-label="label"
    type="select"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: '组件库',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '官网',
        children: [
          {
            label: '金茂',
            value: 380,
          },
          {
            label: '票大大',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      tags: ref([80, 380]),
      tagModalListApi,
      titleRightRender: () => {
        return 'diy';
      },
      beforeCloseFn: ({ success }: AjaxApi) => {
        setTimeout(() => {
          success(true);
        }, 1000);
      },
      beforeOkFn: ({ success }: AjaxApi) => {
        setTimeout(() => {
          success(true);
        }, 1000);
      },
    };
  },
});
</script>
