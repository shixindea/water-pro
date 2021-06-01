<template>
  <a-rate v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(2);
    return {
      value,
    };
  },
});
</script>
