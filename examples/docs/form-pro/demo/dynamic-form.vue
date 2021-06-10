<template>
  <div>
    <a-space>
      <a-button @click="appendField"> 往字段3后面插入字段10 </a-button>
      <a-button @click="deleteField"> 删除字段11 </a-button>
    </a-space>
    <a-divider />
    <h1>动态表单示例，动态根据表单内其他值改变</h1>
    <a-divider />
    <a-form-pro @register="register" />
    <a-divider />
    <h1>componentProps动态改变</h1>
    <a-divider />
    <a-form-pro @register="regist1" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
import { useForm, FormSchema } from '@fe6/water-pro/es/form-pro/index';

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
    },
    {
      field: 'field6',
      component: 'Switch',
      label: '是否显示字段2(dom控制)',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field7',
      component: 'Switch',
      label: '是否禁用字段3',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field8',
      component: 'Switch',
      label: '字段4是否必填',
      colProps: {
        span: 8,
      },
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
      componentProps: { disabled: true },
    },
    {
      field: 'f3',
      component: 'Input',
      label: 'F3',
      colProps: {
        span: 12,
      },
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
    setup() {
      const [
        register,
        { setProps, appendSchemaByField, removeSchemaByFiled },
      ] = useForm({
        labelWidth: 200,
        schemas,
      });
      const [regist1] = useForm({
        labelWidth: 200,
        actionAlgin: 'center',
        schemas: schemas1,
      });

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
        regist1,
        setProps,
        appendField,
        deleteField,
      };
    },
  });
</script>
