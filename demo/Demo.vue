<template>
  <!-- -{{dateValue}}--
  <br />
  <a-date-picker
    show-time
    v-model:value="dateValue"
    format="YYYY-MM-DD HH:mm:ss"
    value-format="YYYY-MM-DD HH:mm:ss"
  />
  <br />
  -{{rangeValue}}-
  <br />
  <a-range-picker
    :show-time="{ format: 'HH:mm:ss' }"
    v-model:value="rangeValue"
    format="YYYY-MM-DD HH:mm:ss"
    value-format="YYYY-MM-DD HH:mm:ss"
    time-rounding
  />
  -{{rangeValue}}-
  <br />
  <a-range-picker
    :show-time="{ format: 'HH:mm:ss' }"
    v-model:value="rangeValue"
    format="YYYY-MM-DD HH:mm:ss"
    value-format="YYYY-MM-DD HH:mm:ss"
  /> -->
  <div>
    1
    <a-date-picker v-model:value="dateValue" placeholder="Select Time">
      <template #placeholder>
        <span>{{ dateValue ? dateValue.toString() : 'SelectTime' }}</span>
      </template> </a-date-picker
    >2 -{{ rangeValue }}-
    <br />
    <a-range-picker
      :show-time="{ format: 'HH:mm:ss' }"
      v-model:value="rangeValue"
      format="YYYY-MM-DD HH:mm:ss"
      value-format="YYYY-MM-DD HH:mm:ss"
      time-rounding
      showTodayButton
      showYesterdayButton
      showSevenDaysButton
      showThirtyDaysButton
    />
    -{{ rangeValue }}-
    <br />
    <a-range-picker
      :show-time="{ format: 'HH:mm:ss' }"
      v-model:value="rangeValue"
      format="YYYY-MM-DD HH:mm:ss"
      value-format="YYYY-MM-DD HH:mm:ss"
      showTodayButton
      showYesterdayButton
      showSevenDaysButton
      showThirtyDaysButton
    />
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue';

import ADatePicker from '@fe6/water-pro/date-picker';
import '@fe6/water-pro/date-picker/style';

export default defineComponent({
  components: {
    ADatePicker,
    ARangePicker: ADatePicker.RangePicker,
  },
  setup() {
    return {
      dateValue: ref(),
      rangeValue: ref(['', '']),
    };
  },
});
</script>
