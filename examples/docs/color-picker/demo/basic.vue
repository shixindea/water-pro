<template>
  <a-color-picker v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#9C27B0E6');
    return {
      value,
    };
  },
}); 
</script>
