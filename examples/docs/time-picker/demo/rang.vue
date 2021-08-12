<template>
  <a-space direction="vertical">
    <ATimeRangePicker v-model:value="value1" size="large" />
    <ATimeRangePicker v-model:value="value2" />
    <ATimeRangePicker v-model:value="value3" size="small" />
  </a-space>
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value1: ref([moment('12:08:23', 'HH:mm'), moment('14:08:23', 'HH:mm')]),
      value2: ref([moment('12:08:23', 'HH:mm'), moment('14:08:23', 'HH:mm')]),
      value3: ref([moment('12:08:23', 'HH:mm'), moment('14:08:23', 'HH:mm')]),
    };
  },
});
</script>
