<docs>
---
order: 0
title:
  zh-CN: 显示序号
  en-US: Num Usage
---

## zh-CN

`showIndexColumn: true`。

## en-US

Num Usage.
</docs>

<template>
  <div>
    <a-table-pro @register="basicRegister" />
  </div>
</template>
<script lang="ts">
import type { AjaxApi, BasicColumn } from '@fe6/water-pro';
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns: BasicColumn[] = [
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
    title: 'sex',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export function demoListApi({ params, success }: AjaxApi) {
  const arr: any = [];
  for (let index = 0; index < 3; index++) {
    arr.push({
      id: `${index}`,
      name: `${
        Math.random() + index
      }-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater`,
      sex: index === 0 ? '' : `sex${index}`,
      age: index === 1 ? '' : `age${index}`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
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
      columns,
      showIndexColumn: true,
    });
    return {
      basicRegister,
    };
  },
});
</script>
