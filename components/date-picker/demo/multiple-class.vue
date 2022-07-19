<docs>
---
order: 0
title:
  zh-CN: 多选弹框宽度
  en-US: MultipleWidth
---

## zh-CN

`multipleTagGroupPopoverClass`

## en-US

multipleTagGroupPopoverClass

</docs>

<template>
  <a-date-picker
    v-model:value="valueDate"
    type="multiple"
    format="YYYY年MM月DD日"
    multipleTagGroupPopoverClass="mtext"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
export default defineComponent({
  setup() {
    return {
      valueDate: ref<Dayjs[]>([dayjs().subtract(1, 'd'), dayjs(), dayjs().add(1, 'd')]),
    };
  },
});
</script>

<style lang="less">
.mtext {
  width: 270px !important;
  & .ant-tag-group-small {
    max-width: 130px !important;
  }
}
</style>
