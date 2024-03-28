<docs>
---
order: 0
title:
  zh-CN: 格式化
  en-US: Format
---

## zh-CN

`value-format="HH:mm:ss"`

## en-US

Click `TimePicker`, and then we could select or input a time in panel.

</docs>

<template>
  <a-space placement="col">
    <a-space placement="col">
      <a-time-picker v-model:value="strValue" value-format="HH=mm=ss" />
      <a-text>当前的值: {{ strValue }}</a-text>
    </a-space>
    <a-space placement="col">
      <a-time-range-picker v-model:value="rangeValue" value-format="HH-mm-ss" />
      <a-text>当前的值: {{ rangeValue }}</a-text>
    </a-space>
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const rangeValue = ref<string[]>(['09-00-00', '19-00-00']);
    const strValue = ref<string>('09=00=00');

    return {
      rangeValue,
      strValue,
    };
  },
});
</script>
