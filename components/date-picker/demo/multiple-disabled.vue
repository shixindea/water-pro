<docs>
---
order: 0
title:
  zh-CN: 多选禁用
  en-US: MultipleDisabled
---

## zh-CN

`type="multiple"` 和 `disabled`

## en-US

MultipleDisabled.

</docs>

<template>
  <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="valueDate" type="multiple" disabled />
    <a-date-picker v-model:value="valueMonth" picker="month" type="multiple" disabled />
    <a-date-picker v-model:value="valueYear" picker="year" type="multiple" disabled />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
export default defineComponent({
  setup() {
    return {
      valueYear: ref<Dayjs[]>([dayjs(), dayjs('2021-01-10'), dayjs('2012-01-11')]),
      valueMonth: ref<Dayjs[]>([dayjs(), dayjs('2021-01-10'), dayjs('2012-01-11')]),
      valueDate: ref<Dayjs[]>([dayjs().subtract(1, 'd'), dayjs(), dayjs().add(1, 'd')]),
    };
  },
});
</script>
