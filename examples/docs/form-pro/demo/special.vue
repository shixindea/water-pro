<template>
  <a-form-pro @register="specialFormPro" @submit="specialHandleSubmit" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro/es/form-pro/index';

const getSelectForOptions = () => {
  return new Promise((selove) => {
    setTimeout(() => {
      selove([
        {
          label: 'water',
          value: 90
        },
        {
          label: 'antd',
          value: 80
        }
      ]);
    }, 1000);
  })
};

const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'SelectApi',
    label: 'SelectApi',
    componentProps: {
      api: getSelectForOptions,
    },
  },
  {
    field: 'field2',
    component: 'UploadImage',
    label: 'UploadImage',
    changeEvent: 'changeUpload',
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: () => {
            const { field2 } = values;
            if (!field2) {
              return Promise.reject('请上传 UploadImage');
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: (params) => {
      const { formActionType } = params;
      return {
        placeholder: 'UploadImage 自动上传',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        mergeMoreDataable: true,
        mergeOriginDatas: (uploadParams: Recordable) => {
          // 设置提交数据
          formActionType.setFieldsValue({
            type: 2,
          });
          return uploadParams.url;
        },
      };
    },
  },
  {
    field: 'field3',
    component: 'UploadName',
    changeEvent: 'changeUpload',
    label: 'UploadName',
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          trigger: 'blur',
          validator: () => {
            const { field3 } = values;
            if (!field3) {
              return Promise.reject('上传 UploadName');
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: () => {
      return {
        accept: '*',
        placeholder: 'UploadName 不是自动上传',
        autoUpload: false,
        onFormChange: (values: any) => {
          console.log(values, 'values');
        },
      };
    },
  },
];

export default defineComponent({
  setup() {
    const [
      specialFormPro,
      specialFormActions
    ] = useForm({
      schemas,
    });

    const specialHandleSubmit = async () => {
      try {
        const updateParams = await specialFormActions.validate();
        console.log(JSON.stringify(updateParams), 'updateParams');
      } catch (err) {}
    };

    return {
      specialFormPro,
      specialHandleSubmit,
    };
  },
});
</script>
