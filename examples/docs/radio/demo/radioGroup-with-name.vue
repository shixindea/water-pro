<template>
  <a-radio-group name="radioGroup" v-model:value="value">
    <a-radio value="1">A</a-radio>
    <a-radio value="2">B</a-radio>
    <a-radio value="3">C</a-radio>
    <a-radio value="4">D</a-radio>
  </a-radio-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('1');
    return {
      value,
    };
  },
});
</script>
