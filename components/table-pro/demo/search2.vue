<docs>
---
order: 0
title:
  zh-CN: 常规搜索
  en-US: Seach2
---

## zh-CN

常规搜索

## en-US

Seach2.
</docs>

<template>
  <a-table-pro
    @register="searchTableRegister"
    :formLabelCol="{
      span: 6,
    }"
    :formWrapperCol="{
      span: 18,
    }"
  />
</template>
<script lang="ts">
import type { AjaxApi, FormProProps } from '@fe6/water-pro';
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
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      children: [
        {
          id: `${index}`,
          name: `${Math.random() + index}-water`,
          age: `1${index}`,
          address: 'Park',
        },
      ],
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

const getSelectForOptions = ({ params, success }: AjaxApi) => {
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

const tagModalListApi = ({ params, success }: AjaxApi) => {
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

export function getFormConfig(): Partial<FormProProps> {
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
    submitOnReset: true,
    resetOnSubmit: true,
    schemas: [
      {
        field: 'couponName',
        label: '优惠券名称',
        component: 'Input',
      },
      {
        field: 'status',
        component: 'Select',
        label: '优惠券状态',
        componentProps: {
          options: [
            {
              label: '使用中',
              value: 1,
            },
            {
              label: '已过期',
              value: 2,
            },
            {
              label: '已失效',
              value: 3,
            },
          ],
          placeholder: '请选择优惠券状态',
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
