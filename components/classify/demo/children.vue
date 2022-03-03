<docs>
---
order: 0
title:
  zh-CN: 分组
  en-US: Group
---

## zh-CN

分组

## en-US

Group usage

</docs>

<template>
  <a-classify
    v-model:value="value3"
    style="width: 200px"
    placeholder="只能选择子级"
    allowClear
    :api="getSelectForOptions"
    :createFormConfig="createFormConfig"
    :createApi="postCreateApi"
    :editApi="postEditApi"
    :removeApi="postRemoveApi"
    removeTip="确定要删除吗"
    :drawerTableApi="tableApi"
    :drawerTableColumns="columns"
    drawerCreateButtonText="添加一级分类"
    :showDropdownAdd="false"
    showSearch
    drawerTableDraggable
    :drawerTableDragApi="dragApi"
  />
</template>
<script lang="ts">
import type { AjaxApi, FormProProps } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success(
      ['water', 'antd', 'eleUI', 'iview'].map((label: string, value: number) => ({
        label,
        value,
        children: ['按钮', '图标', '表单', '栅格'].map(
          (childLabel: string, childValue: number) => ({
            label: `${label}-${childLabel}`,
            value: `${value}-${childValue}`,
          }),
        ),
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

const postEditApi = ({ params, success }: AjaxApi) => {
  console.log(params, 'edit');
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
      children: [
        {
          id: `child-${index}`,
          name: `child-${Math.random() + index}-water`,
          age: `child-1${index}`,
        },
      ],
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

const createFormConfig: FormProProps = {
  schemas: [
    {
      field: 'name',
      component: 'Input',
      label: '房型特色',
      componentProps: {
        placeholder: '请输入内容',
        maxlength: 200,
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
};

export default defineComponent({
  setup() {
    return {
      value3: ref('0-0'),
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig,
      columns,
      tableApi,
      dragApi,
    };
  },
});
</script>
