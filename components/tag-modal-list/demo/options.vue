<docs>
---
order: 0
title:
  zh-CN: Options 模式
  en-US: Options
---

## zh-CN

数据设置在 `Options` 中自动渲染。`showSelected` 可隐藏已选。

## en-US

`Options`
</docs>

<template>
  <div>
    <a-tag-modal-list
      v-model:value="tags"
      createable
      create-placeholder="设置标签"
      :show-selected="false"
      :create-icon="false"
      :create-bordered="false"
      :options="tagNewOptions"
      value-label="value"
      name-label="label"
      :before-ok="beforeOk"
    />
  </div>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref, onMounted } from 'vue';

const tagOptions = [
  {
    label: 'water',
    value: 80,
  },
  {
    label: 'antd',
    value: 180,
  },
  {
    label: '金茂',
    value: 380,
  },
  {
    label: '票大大',
    value: 480,
  },
];

export default defineComponent({
  setup() {
    const tagNewOptions = ref([]);
    onMounted(() => {
      setTimeout(() => {
        tagNewOptions.value = tagOptions.slice();
      }, 1000);
    });
    const beforeOk = ({ params, success }: AjaxApi) => {
      setTimeout(() => {
        console.log(params, '8');
        success(true);
      }, 1200);
    };
    return {
      tags: ref([80, 380]),
      tagNewOptions,
      beforeOk,
    };
  },
});
</script>
