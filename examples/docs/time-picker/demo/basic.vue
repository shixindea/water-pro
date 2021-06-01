<template>
  <a-time-picker v-model:value="value" />
  <a-time-picker v-model:value="strValue" valueFormat="HH:mm:ss" />
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<Moment>(moment('08:00:00', 'HH:mm:ss'));
    const strValue = ref<string>('09:00:00');

    watch(value, () => {
      console.log(value.value);
    });
    watch(strValue, () => {
      console.log(strValue.value);
    });
    return {
      value,
      strValue,
      moment,
    };
  },
});
</script>
