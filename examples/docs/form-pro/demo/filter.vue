<template>
  <a-form-pro @register="filterFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const [
      filterFormPro,
    ] = useForm({
      labelCol: {
        span: 4,
        md: {
          span: 6,
        } as any,
      },
      wrapperCol: {
        span: 20,
        md: {
          span: 18,
        } as any,
        style: 'padding-right: 16px'
      },
      actionColOptions: {
        span: 4,
        md: {
          span: 8,
        } as any,
      },
      schemas: [
        {
          field: 'couponName',
          label: '优惠券名称',
          component: 'Input',
          colProps: {
            xl: 12,
            xxl: 8,
          },
        },
        {
          field: 'status',
          component: 'Select',
          label: '优惠券状态',
          componentProps: {
            options: [{
              label: '使用中',
              value: 1,
            }, {
              label: '已过期',
              value: 2,
            }, {
              label: '已失效',
              value: 3,
            }],
            placeholder: '请选择优惠券状态',
          },
          colProps: {
            xl: 12,
            xxl: 8,
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
