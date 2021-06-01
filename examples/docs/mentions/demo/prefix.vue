<template>
  <a-mentions
    v-model:value="value"
    placeholder="input @ to mention people, # to mention tag"
    :prefix="['@', '#']"
    @search="onSearch"
  >
    <a-mentions-option v-for="value in options" :key="value" :value="value">
      {{ value }}
    </a-mentions-option>
  </a-mentions>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
const MOCK_DATA: Record<string, string[]> = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
export default defineComponent({
  setup() {
    const prefix = ref<string>('@');
    const value = ref<string>('');
    const options = computed(() => {
      return MOCK_DATA[prefix.value] || [];
    });

    const onSearch = (_: string, val: string) => {
      console.log(_, val);
      prefix.value = val;
    };

    return {
      value,
      options,
      onSearch,
    };
  },
});
</script>
