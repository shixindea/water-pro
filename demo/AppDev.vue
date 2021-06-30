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
import { defineComponent, h } from 'vue';
import AFormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro';
import '@fe6/water-pro/es/form-pro/style';
import AButton from '@fe6/water-pro/es/button';
import '@fe6/water-pro/es/button/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';


const tagModalListApi = () => {
  return new Promise((solve) => {
    setTimeout(() => {
      solve([
        {
          name: '组件库',
          children: [
            {
              name: 'water',
              id: 80,
            },
            {
              name: 'antd',
              id: 180,
            },
          ],
        },
        {
          name: '官网',
          children: [
            {
              name: '金茂',
              id: 380,
            },
            {
              name: '票大大',
              id: 480,
            },
          ],
        },
      ]);
    }, 1000);
  })
}

const schemas: FormSchema[] = [
  {
    field: 'tagModalListSelect',
    component: 'TagModalList',
    label: '标签弹框 select 模式',
    componentProps: {
      createable: true,
      showMoreButton: true,
      countMaxLength: 2,
      type: 'select',
      api: tagModalListApi,
      titleRightRender: () => {
        return h('a', {
          style: 'color: #1996f9',
          href: 'http://evente.cn',
          target: '_blank'
        }, '设置');
      }
    },
  },
  {
    field: 'tagModalListDefault',
    component: 'TagModalList',
    label: '标签弹框 默认 模式',
    componentProps: {
      createable: true,
      api: tagModalListApi,
    },
  },
];
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
