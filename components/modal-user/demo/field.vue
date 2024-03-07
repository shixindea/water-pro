<docs>
---
order: 0
title:
  zh-CN: 自定义字段
  en-US: fieldName
---

## zh-CN

设置 field-names

## en-US

fieldName.

</docs>

<template>
  <a-modal-user
    :api="getSelectForOptions"
    :field-names="{
      children: 'items',
      title: 'title',
      value: 'needId',
      key: 'departmentId',
      type: 'status',
    }"
    user-label="2"
    department-label="1"
    v-model:value="value3"
    :show-alias="false"
  ></a-modal-user>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const genData: any[] = [
  {
    id: 22,
    title: '本地环境-段',
    departmentId: '22',
    items: [
      {
        id: 53,
        needId: 'ShangHaojia',
        title: '上好佳',
        position: '千禧部门',
        departmentId: '22-1',
        avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
        roleName: '管理员',
        status: '1',
        items: [
          {
            id: 51,
            departmentId: '22-1-1',
            needId: 'Meina',
            title: '美娜',
            position: '鼓励部门',
            avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
            roleName: '超级管理员',
            status: '2',
          },
        ],
      },
      {
        id: 51,
        needId: 'TongXinCui',
        title: '同心脆',
        departmentId: '22-2',
        position: '千禧部门',
        avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
        roleName: '管理员',
        status: '1',
      },
      {
        id: 51,
        needId: 'AoLiAo',
        departmentId: '22-3',
        title: '奥利奥',
        position: '千禧部门',
        avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
        roleName: '管理员',
        status: '1',
      },
      {
        id: 90,
        title: '亚太地区',
        departmentId: '22-4',
        status: '1',
        items: [
          {
            id: 51,
            departmentId: '22-4-1-1',
            needId: 'Meina',
            title: '美娜',
            position: '鼓励部门',
            avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
            roleName: '超级管理员',
            status: '2',
          },
        ],
      },
    ],
  },
];

const getSelectForOptions = ({ params, success }: AjaxApi) => {
  console.log(params, '下拉配置初始化');

  setTimeout(() => {
    success(genData);
  }, 100);
};

export default defineComponent({
  setup() {
    return {
      value3: ref(['Meina']),
      getSelectForOptions,
    };
  },
});
</script>
