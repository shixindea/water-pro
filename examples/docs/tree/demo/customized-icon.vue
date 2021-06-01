<template>
  <a-tree :tree-data="treeData" show-icon default-expand-all v-model:selectedKeys="selectedKeys">
    <template #switcherIcon>
      <down-outlined />
    </template>
    <template #smile>
      <smile-outlined />
    </template>
    <template #meh>
      <smile-outlined />
    </template>
    <template #custom="{ selected }">
      <frown-filled v-if="selected" />
      <frown-outlined v-else />
    </template>
  </a-tree>
</template>
<script lang="ts">
import { DownOutlined, SmileOutlined, FrownOutlined, FrownFilled } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { TreeDataItem } from '../../../../components/tree/Tree';

const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { title: 'leaf', key: '0-0-1', slots: { icon: 'custom' } },
    ],
  },
];

export default defineComponent({
  components: {
    DownOutlined,
    SmileOutlined,
    FrownOutlined,
    FrownFilled,
  },
  setup() {
    return {
      selectedKeys: ref(['0-0-0']),
      treeData,
    };
  },
});
</script>
