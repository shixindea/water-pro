<docs>
---
order: 0
title:
  zh-CN: 自定义头部右边
  en-US: Header
---

## zh-CN

自定义头部右边

## en-US

Header
</docs>

<template>
  <a-tag-modal-list
    :title-right-render="titleRightRender"
    style="width: 300px"
    v-model:value="tags"
    :api="tagModalListApi"
    value-label="value"
    name-label="label"
    type="select"
    modal-title="标签"
  />
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';

import { defineComponent, ref, h } from 'vue';
import { IconAntdCloseCircle } from '@fe6/icon-vue';
import { Button } from '@fe6/water-pro';

const tagModalListApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: '组件库',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '官网',
        children: [
          {
            label: '金茂',
            value: 380,
          },
          {
            label: '票大大',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      tags: ref([80, 380]),
      tagModalListApi,
      titleRightRender: () => {
        const btnProps: any = {
          type: 'link',
          onClick: () => open('http://water.chjgo.com/'),
          style: 'margin-left: 16px',
          size: 'small',
        };
        return h('div', [
          h(Button, btnProps, () => [
            h(IconAntdCloseCircle, {
              colors: ['#1996f9'],
            }),
            h('span', '设置'),
          ]),
        ]);
      },
    };
  },
});
</script>
