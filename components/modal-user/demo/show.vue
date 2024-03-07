<docs>
---
order: 0
title:
  zh-CN: 简单显示
  en-US: SimpleShow
---

## zh-CN

简单显示。

## en-US

SimpleShow.

</docs>

<template>
  <a-modal-user
    :api="getSelectForOptions"
    v-model:value="value3"
    :show-alias="false"
    :show-role-name="false"
    :show-avatar="false"
  ></a-modal-user>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const genData: any[] = [
  {
    id: 1,
    name: '本地环境-段',
    parentId: 0,
    type: 'department',
    key: '0',
    children: [
      {
        id: 53,
        userId: 'ShangHaojia',
        name: '上好佳',
        alias: 'Irresistible teacher',
        key: '0-1',
        position: '千禧部门',
        avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
        roleName: '管理员',
        type: 'user',
      },
      {
        id: 2,
        name: '亚太地区',
        type: 'department',
        key: '0-2',
        children: [
          {
            id: 51,
            userId: 'Meina',
            name: '美娜',
            alias: 'out of body master',
            key: '0-2-1',
            position: '鼓励部门',
            avatar: 'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg',
            roleName: '超级管理员',
            type: 'user',
          },
          {
            id: 3,
            name: '中国',
            type: 'department',
            key: '0-2-2',
            children: [
              {
                id: 44,
                name: '大中华区',
                type: 'department',
                key: '0-2-2-1',
                children: [
                  {
                    id: 5,
                    name: '西三旗部',
                    type: 'department',
                    key: '0-2-2-1-1',
                    children: [
                      {
                        id: 51,
                        userId: 'Cangjingkong',
                        name: '苍井空',
                        alias: 'Irresistible teacher',
                        key: '0-2-2-1-1-1',
                        position: '退休',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                      {
                        id: 151,
                        userId: 'Cang',
                        name: '苍',
                        key: '0-2-2-1-1-2',
                        alias: 'Irresistible teacher',
                        position: '退休',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                    ],
                  },
                ],
              },
              {
                id: 6,
                name: '华南区',
                type: 'department',
                key: '0-2-2-2',
                children: [
                  {
                    id: 7,
                    name: '西部',
                    type: 'department',
                    key: '0-2-2-2-1',
                    children: [
                      {
                        id: 51,
                        userId: 'Cangjingkong',
                        name: '苍井1空',
                        alias: 'Irresistible teacher',
                        position: '退休',
                        key: '0-2-2-2-1-1',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                      {
                        id: 151,
                        userId: 'Ca1ngjingkong',
                        name: '苍井空1',
                        key: '0-2-2-2-1-2',
                        alias: 'Irresistible teacher',
                        position: '退休',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                    ],
                  },
                ],
              },
            ],
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
      value3: ref([]),
      getSelectForOptions,
    };
  },
});
</script>
