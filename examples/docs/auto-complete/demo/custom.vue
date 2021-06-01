<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    v-bind:search="handleSearch"
    v-bind:select="onSelect"
  >
    <a-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      v-bind:keypress="handleKeyPress"
    />
  </a-auto-complete>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref<{ value: string }[]>([]);
    const onSelect = (value: string) => {
      console.log('onSelect', value);
    };
    const handleSearch = (value: string) => {
      options.value = !value
        ? []
        : [{ value }, { value: value + value }, { value: value + value + value }];
    };
    const handleKeyPress = (ev: KeyboardEvent) => {
      console.log('handleKeyPress', ev);
    };
    return {
      value,
      options,
      onSelect,
      handleSearch,
      handleKeyPress,
    };
  },
});
</script>
