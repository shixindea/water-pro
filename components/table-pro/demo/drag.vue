<docs>
---
order: 0
title:
  zh-CN: 拖拽排序
  en-US: Drag
---

## zh-CN

拖拽排序

## en-US

Drag.
</docs>

<template>
  <a-table-pro @register="basicRegister" @drag-end="dragEnd" />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export function demoListApi({ success }: AjaxApi) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: `child-${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      children: [
        {
          id: `child-${index}`,
          name: `child-${Math.random() + index}-water`,
          age: `child-1${index}`,
          address: 'Child New York No. 1 Lake ParkNew York No. 1 Lake Park',
        },
        {
          id: `child2-${index}`,
          name: `child2-${Math.random() + index}-water`,
          age: `child2-1${index}`,
          address: 'Child New York No. 1 Lake ParkNew York No. 1 Lake Park',
        },
      ],
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  setup() {
    const [basicRegister] = useTable({
      api: demoListApi,
      draggable: true,
      columns,
    });
    return {
      basicRegister,
      dragEnd(oldIndexNumber, newIndexNumber) {
        console.log(oldIndexNumber, newIndexNumber, 'drag end');
      },
    };
  },
});
</script>
