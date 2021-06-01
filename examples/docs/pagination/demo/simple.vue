<template>
  <a-pagination simple v-model:current="current" :total="50" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(2);
    return {
      current,
    };
  },
});
</script>
