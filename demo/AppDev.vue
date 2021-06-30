<template>
  <div style="padding: 200px;">
    <!-- <a-form-pro
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
    </a-form-pro> -->
    <div>
      -{{aaa}}--
    </div>
    <ACascaderApi change-on-select v-model:value="aaa" :api="getCascaderApi" />
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="ts">
// TODO
// - 指令
// - use
import { defineComponent, ref } from 'vue';
import AFormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro';
import '@fe6/water-pro/es/form-pro/style';
import AButton from '@fe6/water-pro/es/button';
import '@fe6/water-pro/es/button/style';
import ACascaderApi from '@fe6/water-pro/es/cascader-api';
import '@fe6/water-pro/es/button/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

const getCascaderApi = () => {
  return new Promise((solve) => {
    setTimeout(() => {
      solve([
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ]);
    }, 1000);
  })
}

const schemas: FormSchema[] = [
  {
    field: 'sss',
    component: 'TagModalList',
    label: '标签弹框 默认 模式',
    componentProps: {
      createable: true,
      api: getCascaderApi,
    },
  },
];
export default defineComponent({
  components: {
    AFormPro,
    AButton,
    ACascaderApi,
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
    const aaa = ref([]);
    return {
      aaa,
      childrenPro,
      getFieldsValue,
      schemas,
      handleSubmit(values: any) {
        console.log(this, 'this');
        const myValues = JSON.stringify(values);
        (this as any).$message.info(myValues === '{}' ? '操作点数据吧' : myValues);
        console.log('提交的数据:' + JSON.stringify(values));
      },
      getCascaderApi,
    };
  },
});
</script>
