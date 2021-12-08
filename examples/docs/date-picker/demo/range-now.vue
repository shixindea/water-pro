<template>
  <a-space direction="vertical">
    <a-range-picker
      :show-time="{ format: 'HH-mm-ss' }"
      v-model:value="rangeValue1"
      format="YYYY-MM-DD HH:mm:ss"
      value-format="YYYY-MM-DD HH:mm:ss"
      time-rounding
    />
    <a-range-picker
      show-time
      v-model:value="rangeValue2"
      format="YYYY-MM-DD HH:mm:ss"
      value-format="YYYY-MM-DD HH:mm:ss"
      time-rounding
      showTodayButton
      showYesterdayButton
      showSevenDaysButton
      showThirtyDaysButton
    />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      rangeValue1: ref(['', '']),
      rangeValue2: ref(['', '']),
    };
  },
});
</script>
