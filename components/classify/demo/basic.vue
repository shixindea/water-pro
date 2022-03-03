<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

基本用法

## en-US

Basic usage

</docs>

<template>
  <a-classify
    v-model:value="theClassifyValue"
    style="width: 200px"
    placeholder="请选择"
    :api="getSelectForOptions"
    :createFormConfig="createFormConfig"
    :createApi="postCreateApi"
    :editApi="postEditApi"
    :removeApi="postRemoveApi"
    removeTip="确定要删除吗"
    :drawerTableApi="tableApi"
    :drawerTableColumns="columns"
    drawerTableDraggable
    :drawerTableDragApi="dragApi"
    :max-tag-count="1"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success(
      ['water', 'antd', 'eleUI', 'iview'].map((label: string, value: number) => ({
        label,
        value,
      })),
    );
  }, 1000);
};

const postCreateApi = ({ success }: AjaxApi) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({ success }: AjaxApi) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({ success }: AjaxApi) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '分类类型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分类名称',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({ success }: AjaxApi) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
};
const dragApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '房型特色',
            componentProps: {
              placeholder: '请输入内容',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left',
            },
            rules: [
              {
                required: true,
                message: '请输入所在楼层',
                type: 'string',
              },
            ],
          },
        ],
      },
      columns,
      tableApi,
      dragApi,
      theClassifyValue: ref(),
    };
  },
});
</script>
