<template>
  <a-tree-select
    v-model:value="value"
    tree-data-simple-mode
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    :tree-data="treeData"
    placeholder="Please select"
    :load-data="onLoadData"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface TreeDataItem {
  id: string | number;
  pId: number;
  value: string;
  title: string;
  isLeaf?: boolean;
}

export default defineComponent({
  setup() {
    const value = ref<string>();
    const treeData = ref<TreeDataItem[]>([
      { id: 1, pId: 0, value: '1', title: 'Expand to load' },
      { id: 2, pId: 0, value: '2', title: 'Expand to load' },
      { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
    ]);

    watch(value, () => {
      console.log(value.value);
    });

    const genTreeNode = (parentId: number, isLeaf = false): TreeDataItem => {
      const random = Math.random().toString(36).substring(2, 6);
      return {
        id: random,
        pId: parentId,
        value: random,
        title: isLeaf ? 'Tree Node' : 'Expand to load',
        isLeaf,
      };
    };
    const onLoadData = (treeNode: any) => {
      console.log(treeNode);
      return new Promise((resolve: (value?: unknown) => void) => {
        const { id } = treeNode.dataRef;
        setTimeout(() => {
          treeData.value = treeData.value.concat([genTreeNode(id, false), genTreeNode(id, true)]);
          resolve();
        }, 300);
      });
    };
    return {
      value,
      treeData,
      genTreeNode,
      onLoadData,
    };
  },
});
</script>
