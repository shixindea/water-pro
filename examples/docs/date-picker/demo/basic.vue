<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value1" />
    <a-month-picker v-model:value="value2" />
    <a-range-picker v-model:value="value3" />
    <a-week-picker v-model:value="value4" />
    <a-year-picker v-model:value="value5" />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';
export default defineComponent({
  setup() {
    return {
      value1: ref<Moment>(),
      value2: ref<Moment>(),
      value3: ref<Moment[]>([]),
      value4: ref<Moment>(),
      value5: ref<Moment>(),
    };
  },
});
</script>
