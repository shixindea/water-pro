<docs>
---
order: 0
title:
  zh-CN: 操作的 Action
  en-US: Action1
---

## zh-CN

操作的 Action。统一使用 `bodyCell` 插槽。

## en-US

Action1.
</docs>

<template>
  <a-table-pro @register="actionRegister">
    <template #bodyCell="{ record, column }">
      <template v-if="column.key === 'age-diy'"> {{ record.age }}-年龄 </template>
      <template v-if="column.key === 'action'">
        <a-table-action
          :actions="[
            {
              label: '删除',
              onClick: handleDelete.bind(null, record),
            },
            {
              label: '编辑',
              onClick: handleEdit.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '启用',
              onClick: handleOpen.bind(null, record),
            },
          ]"
        />
      </template>
    </template>
  </a-table-pro>
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
  {
    title: 'age-diy',
    key: 'age-diy',
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
      actionColumn: {
        width: 360,
        title: '固定右边的操作',
        dataIndex: 'action',
      },
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
