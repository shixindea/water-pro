<docs>
---
order: 0
title:
  zh-CN: 模式
  en-US: Mode usage
---

## zh-CN

Mode。

## en-US

Mode.

</docs>

<template>
  <div>
    <div>
      <a-radio-group v-model:value="mode">
        <a-radio value="checkbox">多选</a-radio>
        <a-radio value="radio">单选</a-radio>
      </a-radio-group>
    </div>
    <a-modal-user :mode="mode" :api="getSelectForOptions" v-model:value="value3"></a-modal-user>
  </div>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';
import genData from './data1';

console.log(genData, '下拉数据');

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    console.log(genData, '接口请求成功');
    success(genData);
  }, 100);
};

export default defineComponent({
  setup() {
    return {
      mode: ref('radio'),
      value3: ref([]),
      getSelectForOptions,
    };
  },
});
</script>
