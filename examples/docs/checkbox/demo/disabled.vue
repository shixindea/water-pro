<template>
  <a-checkbox v-model:checked="checked1" disabled />
  <br />
  <a-checkbox v-model:checked="checked2" disabled />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      checked1: ref(true),
      checked2: ref(false),
    };
  },
});
</script>
