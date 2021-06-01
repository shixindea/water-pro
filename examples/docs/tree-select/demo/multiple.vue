<template>
  <a-tree-select
    show-search
    style="width: 100%"
    v-model:value="value"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    multiple
    tree-default-expand-all
  >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <a-tree-select-node key="random" value="leaf1" title="my leaf" />
        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <template #title><b style="color: #08c">sss</b></template>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<string[]>([]);

    watch(value, () => {
      console.log('select', value.value);
    });

    return {
      value,
    };
  },
});
</script>
