<template>
  <a-input-number v-model:value="value" :min="0" :max="10" :step="0.1" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>();

    return {
      value,
    };
  },
});
</script>
