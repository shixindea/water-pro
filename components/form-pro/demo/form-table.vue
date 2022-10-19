<docs>
---
order: 0
title:
  zh-CN: 表格使用
  en-US: TableForm Usage
---

## zh-CN

表单与表格的结合

## en-US

TableForm.
</docs>

<template>
  <a-form-pro @register="theTableFormPro" @reset="onResetTable" @submit="handleSubmit">
    <template #tableNode="{ model }">
      <a-form-item-rest>
        <a-table style="width: 100%" :pagination="false" :columns="columns" :data-source="[{}]">
          <template #user>
            <div :class="theErrorTable === 'table1' ? 'ant-form-item-has-error' : ''">
              <a-input v-model:value="model.table1" @change="onChangeTable1"></a-input>
              <a-form-error-list :errors="['sss']" v-if="theErrorTable === 'table1'" />
            </div>
          </template>
          <template #age>
            <a-input v-model:value="model.table2"></a-input>
          </template>
        </a-table>
      </a-form-item-rest>
    </template>
  </a-form-pro>
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type { RenderCallbackParams } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';
import { useForm } from '@fe6/water-pro';

const columns = [
  {
    title: '姓名',
    dataIndex: 'user',
    key: 'user',
    slots: { customRender: 'user' },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    slots: { customRender: 'age' },
  },
];

export default defineComponent({
  setup() {
    const theErrorTable = ref('');
    const onResetTable = () => {
      theErrorTable.value = '';
    };
    const [theTableFormPro, { validate }] = useForm({
      scrollToFirstError: true,
      scrollToFirstErrorPosition: 'center',
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 10,
      },
      schemas: [
        {
          field: 'sub1',
          label: '信息',
          children: [
            {
              field: 'tableStar',
              component: 'Input',
              label: '只展示小星星',
              requireShow: true,
            },
            {
              field: 'tableStar1',
              component: 'Input',
              label: '必选',
              required: true,
            },
            {
              field: 'table1',
              component: 'Input',
              label: '表格收集数据1',
              ifShow: () => false,
            },
            {
              field: 'table2',
              component: 'Input',
              label: '表格收集数据2',
              ifShow: () => false,
            },
            {
              field: 'tableCore',
              component: 'Slot',
              slot: 'tableNode',
              label: '字段1',
              dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
                return [
                  {
                    required: true,
                    validator: () => {
                      const { table1 } = ruleParams.value.values;
                      console.log(table1, 'table1');
                      onResetTable();
                      if (!table1) {
                        theErrorTable.value = 'table1';
                      }
                      return Promise.resolve();
                    },
                  },
                ];
              },
              wrapperCol: {
                span: 20,
              },
            },
          ],
        },
      ],
    });

    const onChangeTable1 = () => {
      validate(['tableCore']);
    };
    return {
      theTableFormPro,
      columns,
      theErrorTable,
      onChangeTable1,
      onResetTable,
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
