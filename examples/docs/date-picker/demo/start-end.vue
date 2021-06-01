<template>
  <a-space direction="vertical">
    <a-date-picker
      v-model:value="startValue"
      :disabled-date="disabledStartDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Start"
      @openChange="handleStartOpenChange"
    />
    <a-date-picker
      v-model:value="endValue"
      :disabled-date="disabledEndDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="End"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    />
  </a-space>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const startValue = ref<Moment | undefined>();
    const endValue = ref<Moment>();
    const endOpen = ref<boolean>(false);

    const disabledStartDate = (startValue: Moment) => {
      if (!startValue || !endValue.value) {
        return false;
      }

      return startValue.valueOf() > endValue.value.valueOf();
    };

    const disabledEndDate = (endValue: Moment) => {
      if (!endValue || !startValue.value) {
        return false;
      }

      return startValue.value.valueOf() >= endValue.valueOf();
    };

    const handleStartOpenChange = (open: boolean) => {
      if (!open) {
        endOpen.value = true;
      }
    };

    const handleEndOpenChange = (open: boolean) => {
      endOpen.value = open;
    };

    watch(startValue, () => {
      console.log('startValue', startValue.value);
    });

    watch(endValue, () => {
      console.log('endValue', endValue.value);
    });

    return {
      startValue,
      endValue,
      endOpen,
      disabledStartDate,
      disabledEndDate,
      handleStartOpenChange,
      handleEndOpenChange,
    };
  },
});
</script>
