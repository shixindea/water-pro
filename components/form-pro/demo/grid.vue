<docs>
---
order: 0
title:
  zh-CN: 自适应宽度
  en-US: Grid
---

## zh-CN

自适应宽度

## en-US

Grid.
</docs>

<template>
  <a-form-pro @register="filterFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const [filterFormPro] = useForm({
      labelCol: {
        span: 4,
        md: {
          span: 12,
        } as any,
        xxl: {
          span: 5,
        } as any,
      },
      wrapperCol: {
        span: 20,
        md: {
          span: 12,
        } as any,
        xxl: {
          span: 19,
        } as any,
      },
      actionColOptions: {
        span: 12,
        offset: 4,
        md: {
          offset: 12,
        } as any,
        xxl: {
          offset: 5,
        } as any,
      },
      schemas: [
        {
          field: 'couponName',
          label: '优惠券名称',
          component: 'Input',
        },
        {
          field: 'couponName',
          label: '特殊的宽度定制',
          component: 'Input',
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 20,
          },
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
    });
    return {
      filterFormPro,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '操作点数据吧' : myValues);
      console.log('提交的数据:' + JSON.stringify(values));
    },
  },
});
</script>
