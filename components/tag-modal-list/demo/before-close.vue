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
    :titleRightRender="titleRightRender"
    style="width: 300px"
    v-model:value="tags"
    :api="tagModalListApi"
    :beforeClose="beforeCloseFn"
    valueLabel="value"
    nameLabel="label"
    type="select"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({ success }) => {
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
      beforeCloseFn: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1000);
        });
      },
    };
  },
});
</script>
