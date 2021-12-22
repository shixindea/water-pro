<docs>
---
order: 0
title:
  zh-CN: 自定义空
  en-US: Custom empty
---

## zh-CN

自定义空

## en-US

Custom empty.
</docs>

<template>
  <div style="height: 500px; position: relative">
    <a-table-pro @register="searchTableRegister" :emptyDataIsShowTable="false" />
    <div style="position: relative; height: 360px">
      <a-empty style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)" />
    </div>
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
      },
      {
        field: 'datePicker',
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
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
    });

    return {
      searchTableRegister,
    };
  },
});
</script>
