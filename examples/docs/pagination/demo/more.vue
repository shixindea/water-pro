<template>
  <a-pagination v-model:current="current" :total="500" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      current: 6,
    };
  },
});
</script>
