<template>
    <a-form-pro
      @register="childrenPro"
    >
      <template #resetBefore>
        <a-button>上一步</a-button>
      </template>
      <template #submitBefore>
        <a-button>children 保存</a-button>
        <a-button type="primary" @click="handleSubmit">下一步</a-button>
      </template>
    </a-form-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'eafield1',
    component: 'Render',
    label: '字段a',
    children: [
      {
        field: 'field1',
        component: 'Input',
        label: '字段1',
        required: true,
      },
      {
        field: 'field2',
        component: 'Switch',
        label: '字段2',
      },
    ]
  },
  {
    field: 'eaafield1',
    component: 'Render',
    label: '字段b',
    children: [
      {
        field: 'afield1',
        component: 'Input',
        label: '字段3',
      },
      {
        field: 'afield2',
        component: 'Switch',
        label: '字段4',
      },
    ]
  },
  {
    field: 'eabfield1',
    component: 'Render',
    label: '字段c',
    children: [
      {
        field: 'bfield1',
        component: 'Input',
        label: '字段5',
      },
      {
        field: 'bfield2',
        component: 'Switch',
        label: '字段6',
      },
    ]
  },
];

export default defineComponent({
  setup() {
    const [
      childrenPro,
      { getFieldsValue, setFieldsValue }
    ] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
        push: 0
      },
      actionAlgin: 'space-between',
      actionAffix: true,
      showResetButton: false,
      showSubmitButton: false,
    });

    // NOTO 真实场景获取详情编辑接口，设置具体曾经的数据
    setTimeout(async () => {
      setFieldsValue({
        field1: 'water'
      });
    }, 100);
    return {
      childrenPro,
      getFieldsValue,
    };
  },
  methods: {
    handleSubmit() {
      const values = this.getFieldsValue();
      const myValues = JSON.stringify(this.getFieldsValue());
      (this as any).$message.info(myValues === '{}' ? '操作点数据吧' : myValues);
      console.log('children 的提交数据:' + JSON.stringify(values));
    },
  },
});
</script>
