<template>
  <a-tree
    class="draggable-tree"
    v-model:expandedKeys="expandedKeys"
    draggable
    :tree-data="gData"
    @dragenter="onDragEnter"
    @drop="onDrop"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TreeDataItem, TreeDragEvent, DropEvent } from '@fe6/water-pro';

const x = 3;
const y = 2;
const z = 1;
const genData: TreeDataItem[] = [];

const generateData = (_level: number, _preKey?: string, _tns?: TreeDataItem[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || genData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0', '0-0-0', '0-0-0-0']);
    const gData = ref<TreeDataItem[]>(genData);
    const onDragEnter = (info: TreeDragEvent) => {
      console.log(info);
      // expandedKeys 需要展开时
      // expandedKeys.value = info.expandedKeys
    };

    const onDrop = (info: DropEvent) => {
      console.log(info);
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split('-');
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const loop = (data: TreeDataItem[], key: string, callback: any) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...gData.value];

      // Find dragObject
      let dragObj: TreeDataItem = {};
      loop(data, dragKey, (item: TreeDataItem, index: number, arr: TreeDataItem[]) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item: TreeDataItem) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, (item: TreeDataItem) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.unshift(dragObj);
        });
      } else {
        let ar: TreeDataItem[] = [];
        let i = 0;
        loop(data, dropKey, (item: TreeDataItem, index: number, arr: TreeDataItem[]) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      gData.value = data;
    };
    return {
      expandedKeys,
      gData,
      onDragEnter,
      onDrop,
    };
  },
});
</script>
