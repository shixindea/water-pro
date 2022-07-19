<docs>
---
order: 0
title:
  zh-CN: 多选删除条件
  en-US: MultipleDelete
---

## zh-CN

`type="multiple"` 和 disabled-date 。今天以及今天以前不能删除。

## en-US

Multiple. Disabled date.

</docs>

<template>
  <a-date-picker v-model:value="valueDate" type="multiple" :disabled-date="disabledDate" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
export default defineComponent({
  setup() {
    const disabledDate = (current: Dayjs) => {
      return current && current <= dayjs().endOf('day');
    };
    return {
      disabledDate,
      valueDate: ref<Dayjs[]>([dayjs().subtract(1, 'd'), dayjs(), dayjs().add(1, 'd')]),
    };
  },
});
</script>
