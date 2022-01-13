<docs>
---
order: 6
title:
  zh-CN: 自定义图标
  en-US: Customize Icon
---

## zh-CN

可以针对不同的节点定制图标。

## en-US

You can customize icons for different nodes.

</docs>

<template>
  <a-tree v-model:selectedKeys="selectedKeys" :tree-data="treeData" show-icon default-expand-all>
    <template #switcherIcon>
      <IconBytedDown :colors="['currentColor']" />
    </template>
    <template #icon="{ key, selected }">
      <template v-if="key === '0-0'">
        <IconAntdSmile :colors="['currentColor']" />
      </template>
      <template v-else-if="key === '0-0-0'">
        <IconAntdSmile :colors="['currentColor']" />
      </template>
      <template v-else>
        <IconAntdFrown :theme="selected ? '' : 'filled'" :colors="['currentColor']" />
      </template>
    </template>
  </a-tree>
</template>
<script lang="ts">
import type { TreeProps } from '@fe6/water-pro';
import { IconBytedDown, IconAntdSmile, IconAntdFrown } from '@fe6/icon-vue';
import { defineComponent, ref } from 'vue';

const treeData: TreeProps['treeData'] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      { title: 'leaf', key: '0-0-0' },
      { title: 'leaf', key: '0-0-1' },
    ],
  },
];

export default defineComponent({
  components: {
    IconBytedDown,
    IconAntdSmile,
    IconAntdFrown,
  },
  setup() {
    return {
      selectedKeys: ref(['0-0-0']),
      treeData,
    };
  },
});
</script>
