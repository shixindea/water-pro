<docs>
---
order: 0
title:
  zh-CN: 搜索
  en-US: Search
---

## zh-CN

带搜索的表格

## en-US

Search.
</docs>

<template>
  <a-table-pro @register="searchTableRegister" />
</template>
<script lang="ts">
import type { AjaxApi, FormProProps } from '@fe6/water-pro';
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

import genData from './data1';

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

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90,
      },
      {
        label: 'antd',
        value: 80,
      },
    ]);
  }, 1000);
};

const tagModalListApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        name: '组件库',
        children: [
          {
            name: 'water',
            id: 80,
          },
          {
            name: 'antd',
            id: 180,
          },
        ],
      },
      {
        name: '官网',
        children: [
          {
            name: '金茂',
            id: 380,
          },
          {
            name: '票大大',
            id: 480,
          },
        ],
      },
    ]);
  }, 1000);
};

const getModalUserForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success(genData);
  }, 100);
};

export function getFormConfig(): Partial<FormProProps> {
  return {
    labelWidth: 120,
    inlineActionCol: {
      span: 7,
    },
    layout: 'inline',
    schemas: [
      {
        field: 'picker',
        component: 'RangeGroupPicker',
        componentProps: {
          showTodayButton: true,
          showYesterdayButton: true,
          showSevenDaysButton: true,
          showThirtyDaysButton: true,
        },
        // 局部定义单个组件
        inlineCol: {
          span: 24,
        },
      },
      {
        field: 'userId',
        component: 'ModalUser',
        componentProps: {
          api: getModalUserForOptions,
          placeholder: '添加人',
        },
      },
      {
        field: 'input',
        component: 'Input',
        componentProps: {
          placeholder: '输入框',
        },
      },
      {
        field: 'selectAPI',
        component: 'SelectApi',
        componentProps: {
          placeholder: '下拉',
          api: getSelectForOptions,
        },
      },
      {
        field: 'tagModalListSelect',
        component: 'TagModalList',
        componentProps: {
          placeholder: '标签筛选',
          countMaxLength: 2,
          type: 'select',
          api: tagModalListApi,
        },
      },
      {
        field: 'rangePicker',
        component: 'RangePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
          placeholder: ['开始日期', '结束日期'],
        },
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
