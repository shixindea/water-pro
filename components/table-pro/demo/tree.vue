<docs>
---
order: 0
title:
  zh-CN: 树
  en-US: Tree
---

## zh-CN

树

## en-US

Tree.
</docs>

<template>
  <a-table-pro @register="actionRegister" />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent } from 'vue';
import { useTable, TableAction } from '@fe6/water-pro';

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

export function demoListApi({ params, success }: AjaxApi) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  components: {
    [TableAction.name]: TableAction,
  },
  setup() {
    const [actionRegister] = useTable({
      api: demoListApi,
      columns,
    });
    return {
      actionRegister,
      handleDelete: (record) => {
        console.log(record, 'delete');
      },
      handleEdit: (record) => {
        console.log(record, 'edit');
      },
      handleOpen: (record) => {
        console.log(record, 'open');
      },
    };
  },
});
</script>
