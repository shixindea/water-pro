<docs>
---
order: 0
title:
  zh-CN: 多选
  en-US: Multiple
---

## zh-CN

`type="multiple"`

## en-US

Multiple.

</docs>

<template>
  <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="valueDate" type="multiple" />
    <a-date-picker v-model:value="valueMonth" picker="month" type="multiple" />
    <a-date-picker v-model:value="valueYear" picker="year" type="multiple" />
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
