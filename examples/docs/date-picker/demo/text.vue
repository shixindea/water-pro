<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="time1" placeholder="Select Time" @ok="onOk">
      <span>{{ time1 ? time1.toString() : 'SelectTime' }}</span>
    </a-date-picker>
    <a-range-picker v-model:value="time2">
      <span>
        {{ time2 ? time2.toString() : '请选择' }}
      </span>
    </a-range-picker>
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const time1 = ref<Moment>();
    const time2 = ref<Moment>();

    const onOk = (value: Moment) => {
      console.log('onOk: ', value);
    };

    const clearTime = () => {
      time1.value = undefined;
    };

    return {
      time1,
      time2,
      moment,
      onOk,
      clearTime,
    };
  },
});
</script>
