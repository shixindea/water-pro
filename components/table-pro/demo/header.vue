<docs>
---
order: 0
title:
  zh-CN: 自定义表头
  en-US: Header
---

## zh-CN

自定义表头

## en-US

Header.
</docs>

<template>
  <a-table-pro @register="headerRegister">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          姓名
          <span style="color: red; padding-left: 8px">water</span>
        </span>
      </template>
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    helpMessage: '年龄',
  },
];

export function demoListApi({ params, success }: AjaxApi) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  setup() {
    const [headerRegister] = useTable({
      api: demoListApi,
      columns,
    });
    return {
      headerRegister,
    };
  },
});
</script>
