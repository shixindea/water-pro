<template>
  <a-select
    mode="multiple"
    v-model:value="value"
    style="width: 100%"
    placeholder="Please select"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string[]) => {
      console.log(`selected ${value}`);
    };
    return {
      handleChange,
      value: ref(['a1', 'b2']),
    };
  },
});
</script>
