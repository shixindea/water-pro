<template>
  <div style="padding: 200px;">
    <!-- <a-form-pro
      autoFocusFirstItem
      :labelWidth="100"
      :schemas="schemas"
      @submit="handleSubmit"
    /> -->

    <div>
      <a-space>
        <a-button @click="changeLabel3"> 更改字段3label </a-button>
        <a-button @click="changeLabel34"> 同时更改字段3,4label </a-button>
        <a-button @click="appendField"> 往字段3后面插入字段10 </a-button>
        <a-button @click="deleteField"> 删除字段11 </a-button>
      </a-space>
      <h1>动态表单示例，动态根据表单内其他值改变</h1>
      <a-form-pro @register="register" />
      <h1>componentProps动态改变</h1>
      <a-form-pro @register="register1" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';
// import { InfoCircleOutlined } from '@ant-design/icons-vue';
import FormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro/index';
import '@fe6/water-pro/es/form-pro/style';
// import Input from '@fe6/water-pro/es/input';
// import Tooltip from '@fe6/water-pro/es/tooltip';
import Space from '@fe6/water-pro/es/space';
import '@fe6/water-pro/es/space/style';
import Button from '@fe6/water-pro/es/button';
import '@fe6/water-pro/es/button/style';

// const schemas: FormSchema[] = [
//   {
//     field: 'field1',
//     component: 'RadioGroup',
//     label: '字段2',
//     defaultValue: 'water',
//     componentProps: {
//       options: [
//         { label: '大地', value: 'water' },
//         { label: '天空', value: 'antd' },
//       ],
//     },
//   },
//   {
//     field: 'field2',
//     component: 'Input',
//     label: '大地',
//     ifShow: ({ values }) => {
//       return values.field1 === 'water';
//     },
//   },
//   {
//     field: 'field3',
//     component: 'Switch',
//     label: '天空',
//     ifShow: ({ values }) => {
//       return values.field1 === 'antd';
//     },
//   },
// ];

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 8,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: '字段4',
      colProps: {
        span: 8,
      },
      dynamicRules: ({ values }) => {
        return values.field8 ? [{ required: true, message: '字段4必填' }] : [];
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
            key: '1',
          },
          {
            label: '选项2',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'field11',
      component: 'DatePicker',
      label: '字段11',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field5',
      component: 'Switch',
      label: '是否显示字段1(css控制)',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field6',
      component: 'Switch',
      label: '是否显示字段2(dom控制)',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field7',
      component: 'Switch',
      label: '是否禁用字段3',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field8',
      component: 'Switch',
      label: '字段4是否必填',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
  ];

  const schemas1: FormSchema[] = [
    {
      field: 'f1',
      component: 'Input',
      label: 'F1',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      componentProps: ({ formModel }) => {
        return {
          placeholder: '同步f2的值为f1',
          onChange: (e: ChangeEvent) => {
            formModel.f2 = e.target.value;
          },
        };
      },
    },
    {
      field: 'f2',
      component: 'Input',
      label: 'F2',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      componentProps: { disabled: true },
    },
    {
      field: 'f3',
      component: 'Input',
      label: 'F3',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      // @ts-ignore
      componentProps: ({ formActionType }) => {
        return {
          placeholder: '值改变时执行查询,查看控制台',
          onChange: async () => {
            const { validate } = formActionType;
            // tableAction只适用于在表格内开启表单的例子
            // const { reload } = tableAction;
            const res = await validate();
            console.log(res);
          },
        };
      },
    },
  ];
export default defineComponent({
  components: {
    AFormPro: FormPro,
    ASpace: Space,
    AButton: Button,
  },
  setup() {
    const [
        register,
        { setProps, updateSchema, appendSchemaByField, removeSchemaByFiled },
      ] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      const [register1] = useForm({
        labelWidth: 120,
        schemas: schemas1,
        actionColOptions: {
          span: 24,
        },
      });
      function changeLabel3() {
        updateSchema({
          field: 'field3',
          label: '字段3 New',
        });
      }
      function changeLabel34() {
        updateSchema([
          {
            field: 'field3',
            label: '字段3 New++',
          },
          {
            field: 'field4',
            label: '字段4 New++',
          },
        ]);
      }

      function appendField() {
        appendSchemaByField(
          {
            field: 'field10',
            label: '字段10',
            component: 'Input',
            colProps: {
              span: 8,
            },
          },
          'field3'
        );
      }
      function deleteField() {
        removeSchemaByFiled('field11');
      }
      return {
        register,
        register1,
        schemas,
        setProps,
        changeLabel3,
        changeLabel34,
        appendField,
        deleteField,
      };
  }
});
</script>
