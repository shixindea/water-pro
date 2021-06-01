<template>
  <a-time-picker v-model:value="value" format="HH:mm" />
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref(moment('12:08', 'HH:mm'));

    return {
      value,
      moment,
    };
  },
});
</script>
