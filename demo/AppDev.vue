<template>
<div>
  <a-range-picker-group
    v-model:value="value3"
    value-format="YYYY-MM-DD"
    showTodayButton
    showYesterdayButton
    showSevenDaysButton
    showThirtyDaysButton
  />
  {{value3}}
  </div>
    <!-- 滚动的时候颜色选择器有问题 -->
    <!-- <AColorPicker
    ></AColorPicker> -->
</template>
<script lang="tsx">
// TODO
// - 指令
// - use
import { defineComponent, ref } from 'vue';

import ADatePicker from '@fe6/water-pro/es/date-picker';
import '@fe6/water-pro/es/date-picker/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

export default defineComponent({
  components: {
    ARangePickerGroup: ADatePicker.RangePickerGroup,
    // AColorPicker: ColorPicker,
  },
  setup() {
    return {
      value3: ref([]),
    }
  }
});
</script>
