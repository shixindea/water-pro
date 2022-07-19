<docs>
---
order: 0
title:
  zh-CN: 禁用头部选择
  en-US: DisabledSelectYear
---

## zh-CN

`disabledSelectYear` 禁用年

## en-US

`disabledSelectYear`

</docs>

<template>
  <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="valueDate" disabledSelectYear format="MM-DD" />
    <a-month-picker v-model:value="valueMonth" disabledSelectYear format="MM" />
    <a-date-picker
      v-model:value="valueDate1"
      disabledSelectYear
      value-format="MM-DD"
      format="MM-DD"
      type="multiple"
      :multipleTagGroupPopoverClass="{
        aaaa: true,
      }"
    />
    <a-month-picker
      v-model:value="valueMonth1"
      disabledSelectYear
      value-format="MM"
      format="MM"
      type="multiple"
      multipleTagGroupPopoverClass="bbbb"
    />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
export default defineComponent({
  setup() {
    return {
      valueMonth: ref<Dayjs>(dayjs()),
      valueDate: ref<Dayjs>(dayjs()),
      valueMonth1: ref<string[]>([dayjs().format('MM'), dayjs('01', 'MM').format('MM')]),
      valueDate1: ref<string[]>([dayjs().format('MM-DD'), dayjs('01-10', 'MM-DD').format('MM-DD')]),
    };
  },
});
</script>

<style lang="less">
.aaaa {
  width: 146px !important;
}
.bbbb {
  width: 105px !important;
}
</style>
