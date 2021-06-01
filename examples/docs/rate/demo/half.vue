<template>
  <a-rate v-model:value="value" allow-half />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(2.5);
    return {
      value,
    };
  },
});
</script>
