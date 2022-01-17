<docs>
---
order: 0
title:
  zh-CN: 加载数据
  en-US: Load
---

## zh-CN

设置 `load-api` 即可。但是不能虚拟滚动，因为过多了横向显示不全。key 的规则要有层级关系，不然点击节点会选不中子级。

## en-US

Load.

</docs>

<template>
  <a-modal-user
    :api="getSelectForOptions"
    v-model:value="value3"
    :load-api="getOneForOptions"
    :virtual="false"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';
import { uuid } from '@fe6/shared';

const genData: any[] = [
  {
    id: 1,
    name: '本地环境-段',
    parentId: 0,
    type: 'department',
    key: '0',
    children: [],
  },
];

const getOneForOptions = ({ params, success }: AjaxApi) => {
  console.log(params, '获取单个节点数据');
  setTimeout(() => {
    const theUuid = uuid();
    success([
      {
        id: 53,
        userId: 'ShangHaojia',
        name: `上${theUuid.substring(0, 2)}好佳`,
        alias: 'Irresistible teacher',
        key: `${theUuid}-0`,
        position: '千禧部门',
        avatar: 'https://ecdn.evente.cn/assets/image/b-favicon-1.ico',
        roleName: '管理员',
        type: 'user',
        isLeaf: true,
      },
      {
        id: 2,
        name: `亚${theUuid.substring(theUuid.length - 4, theUuid.length - 2)}太地区`,
        type: 'department',
        key: `${theUuid}-1`,
        children: [],
      },
    ]);
  }, 100);
};

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
      getOneForOptions,
    };
  },
});
</script>
