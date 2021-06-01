<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    placeholder="Tags Mode"
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
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    return {
      value: ref([]),
      handleChange,
    };
  },
});
</script>
