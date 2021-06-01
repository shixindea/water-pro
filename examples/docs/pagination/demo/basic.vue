<template>
  <a-pagination v-model:current="current" :total="50" show-less-items />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      current: 2,
    };
  },
});
</script>
