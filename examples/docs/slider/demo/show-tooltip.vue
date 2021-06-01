<template>
  <a-slider v-model:value="value" :tooltip-visible="true" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<number>(30);

    return {
      value,
    };
  },
});
</script>
