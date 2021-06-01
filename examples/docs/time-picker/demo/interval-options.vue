<template>
  <a-time-picker v-model:value="value" :minute-step="15" :second-step="10" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref();
    return {
      value,
    };
  },
});
</script>
