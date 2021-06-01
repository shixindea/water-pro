<template>
  <a-select
    mode="multiple"
    placeholder="Inserted are removed"
    v-model:value="selectedItems"
    style="width: 100%"
  >
    <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
export default defineComponent({
  setup() {
    const selectedItems = ref<string[]>([]);

    const filteredOptions = computed(() => OPTIONS.filter(o => !selectedItems.value.includes(o)));

    return {
      selectedItems,
      filteredOptions,
    };
  },
});
</script>
