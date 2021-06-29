<template>
  <div style="padding: 200px;">
    <a-form-pro
      :schemas="schemas"
      @submit="handleSubmit"
      actionAffix
      :showResetButton="false"
      :showSubmitButton="false"
      :actionColOptions="{
        span: 24,
        push: 0
      }"
    >
      <template #resetBefore>
        <a-button>上一步</a-button>
      </template>
      <template #submitBefore>
        <a-button>保存</a-button>
        <a-button>下一步</a-button>
      </template>
    </a-form-pro>
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="ts">
// TODO
// - 指令
// - use
import { defineComponent} from 'vue';
import AFormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro';
import '@fe6/water-pro/es/form-pro/style';
import AButton from '@fe6/water-pro/es/button';
import '@fe6/water-pro/es/button/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

const schemas: FormSchema[] = [
  {
    field: 'eafield1',
    component: 'Render',
    label: '字段1',
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
    label: '字段1',
    children: [
      {
        field: 'afield1',
        component: 'Input',
        label: '字段1',
      },
      {
        field: 'afield2',
        component: 'Switch',
        label: '字段2',
      },
    ]
  },
  {
    field: 'eabfield1',
    component: 'Render',
    label: '字段1',
    children: [
      {
        field: 'bfield1',
        component: 'Input',
        label: '字段1',
      },
      {
        field: 'bfield2',
        component: 'Switch',
        label: '字段2',
      },
    ]
  },
  {
    field: 'eacfield1',
    component: 'Render',
    label: '字段1',
    children: [
      {
        field: 'cfield1',
        component: 'Input',
        label: '字段1',
      },
      {
        field: 'cfield2',
        component: 'Switch',
        label: '字段2',
      },
    ]
  },
];

export function demoListApi() {
  const arr: any = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: `${index}`,
      name: 'water',
      age: `1${index}`,
      no: `${index + 10}`,
      address: '北京',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  return new Promise((selove) => {
    setTimeout(() => {
      selove(arr);
    }, 1000);
  });
}

export default defineComponent({
  components: {
    AFormPro,
    AButton,
    // AColorPicker: ColorPicker,
  },
  setup() {
    const [
      childrenPro,
      { getFieldsValue }
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
    return {
      childrenPro,
      getFieldsValue,
      schemas,
      handleSubmit(values: any) {
        console.log(this, 'this');
        const myValues = JSON.stringify(values);
        (this as any).$message.info(myValues === '{}' ? '操作点数据吧' : myValues);
        console.log('提交的数据:' + JSON.stringify(values));
      },
    };
  },
});
</script>
