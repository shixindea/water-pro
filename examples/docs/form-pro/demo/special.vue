<template>
  <a-form-pro @register="specialFormPro" @submit="specialHandleSubmit" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

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
    field: 'spfield1',
    component: 'SelectApi',
    label: 'SelectApi',
    componentProps: {
      api: getSelectForOptions,
    },
  },
  {
    field: 'spfield2',
    component: 'UploadImage',
    label: 'UploadImage',
    changeEvent: 'changeUpload',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          validator: () => {
            const { spfield2 } = values;
            if (!spfield2) {
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
    field: 'spfield3',
    component: 'UploadName',
    changeEvent: 'changeUpload',
    label: 'UploadName',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          trigger: 'blur',
          validator: () => {
            const { spfield3 } = values;
            if (!spfield3) {
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
      labelWidth: 200,
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
