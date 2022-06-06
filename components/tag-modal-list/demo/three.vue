<docs>
---
order: 0
title:
  zh-CN: 三级数据
  en-US: Three
---

## zh-CN

三级数据。

## en-US

Three.
</docs>

<template>
  <div>
    <a-button @click="onReload">reload</a-button>
    <a-divider></a-divider>
    <a-tag-modal-list
      v-model:value="tags"
      createable
      :api="tagModalListApi"
      value-label="value"
      name-label="label"
      ref="tagModalNode"
    />
  </div>
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
            label: '这是什么',
            children: [
              {
                label: '1water',
                value: 80,
              },
              {
                label: '2antd',
                value: 180,
              },
            ],
          },
          {
            label: '今儿天不错',
            children: [
              {
                label: '3water',
                value: 1801,
              },
              {
                label: '4antd',
                value: 1802,
              },
            ],
          },
        ],
      },
      {
        label: '官网',
        children: [
          {
            label: '酒店',
            children: [
              {
                label: '3金茂',
                value: 3801,
              },
              {
                label: '4票大大',
                value: 3802,
              },
            ],
          },
          {
            label: '门票',
            children: [
              {
                label: '1金茂',
                value: 4801,
              },
              {
                label: '2票大大',
                value: 4802,
              },
            ],
          },
        ],
      },
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const tagModalNode = ref(null);
    const onReload = async () => {
      await tagModalNode.value.getTagDatas(true);
      console.log(tagModalNode.value, 'tagModalNode');
    };
    return {
      tagModalNode,
      onReload,
      tags: ref([80, 3801]),
      tagModalListApi,
    };
  },
});
</script>
