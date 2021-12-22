<docs>
---
order: 0
title:
  zh-CN: 空
  en-US: Empty
---

## zh-CN

设置 `emptyPlaceholderClassName` 空数据占位高度的修改

## en-US

Empty.
</docs>

<template>
  <div style="height: 500px; position: relative">
    <a-table-pro @register="searchTableRegister" />
  </div>
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

export function demoListApi({ params, success }: AjaxApi) {
  const arr: any = [];
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export function getFormConfig(): Partial<any> {
  return {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    actionColOptions: {
      span: 24,
    },
    layout: 'inline',
    schemas: [
      {
        field: 'input',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'datePicker',
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

export default defineComponent({
  setup() {
    const [searchTableRegister] = useTable({
      api: demoListApi,
      columns,
      useSearchForm: true,
      formConfig: getFormConfig(),
      emptyPlaceholderClassName: () => {
        return 'new-placeholder-empty';
      },
    });

    return {
      searchTableRegister,
    };
  },
});
</script>

<style>
.new-placeholder-empty {
  height: 200px !important;
}
</style>
