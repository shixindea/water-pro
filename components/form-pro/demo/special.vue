<docs>
---
order: 0
title:
  zh-CN: 独有的组件
  en-US: Special
---

## zh-CN

独有的组件

## en-US

Special.
</docs>

<template>
  <a-form-pro @register="specialFormPro" @submit="specialHandleSubmit" />
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type {
  FormProSchema,
  RenderCallbackParams,
  FormProComponentPropsParams,
  AjaxApi,
} from '@fe6/water-pro';

import { defineComponent, onMounted } from 'vue';

import { useForm } from '@fe6/water-pro';

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90,
      },
      {
        label: 'antd',
        value: 80,
      },
    ]);
  }, 1000);
};

const genData: any[] = [
  {
    id: 1,
    name: '本地环境-段',
    parentId: 0,
    type: 'department',
    key: '0',
    children: [
      {
        id: 53,
        userId: 'ShangHaojia',
        name: '上好佳',
        alias: 'Irresistible teacher',
        key: '0-1',
        position: '千禧部门',
        avatar: 'https://ecdn.evente.cn/assets/image/b-favicon-1.ico',
        roleName: '管理员',
        type: 'user',
      },
      {
        id: 2,
        name: '亚太地区',
        type: 'department',
        key: '0-2',
        children: [
          {
            id: 51,
            userId: 'Meina',
            name: '美娜',
            alias: 'out of body master',
            key: '0-2-1',
            position: '鼓励部门',
            avatar: 'https://ecdn.evente.cn/assets/image/b-favicon-1.ico',
            roleName: '超级管理员',
            type: 'user',
          },
          {
            id: 3,
            name: '中国',
            type: 'department',
            key: '0-2-2',
            children: [
              {
                id: 44,
                name: '大中华区',
                type: 'department',
                key: '0-2-2-1',
                children: [
                  {
                    id: 5,
                    name: '西三旗部',
                    type: 'department',
                    key: '0-2-2-1-1',
                    children: [
                      {
                        id: 51,
                        userId: 'Cangjingkong',
                        name: '苍井空',
                        alias: 'Irresistible teacher',
                        key: '0-2-2-1-1-1',
                        position: '退休',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                      {
                        id: 151,
                        userId: 'Cang',
                        name: '苍',
                        key: '0-2-2-1-1-2',
                        alias: 'Irresistible teacher',
                        position: '退休',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                    ],
                  },
                ],
              },
              {
                id: 6,
                name: '华南区',
                type: 'department',
                key: '0-2-2-2',
                children: [
                  {
                    id: 7,
                    name: '西部',
                    type: 'department',
                    key: '0-2-2-2-1',
                    children: [
                      {
                        id: 51,
                        userId: 'Cangjingkong',
                        name: '苍井1空',
                        alias: 'Irresistible teacher',
                        position: '退休',
                        key: '0-2-2-2-1-1',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                      {
                        id: 151,
                        userId: 'Ca1ngjingkong',
                        name: '苍井空1',
                        key: '0-2-2-2-1-2',
                        alias: 'Irresistible teacher',
                        position: '退休',
                        avatar: 'http://water.chjgo.com/assets/logo.20db40aa.png',
                        roleName: '超级管理员',
                        type: 'user',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const tagModalListApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
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
};

const getModalUserForOptions = ({ success }: AjaxApi) => {
  console.log('下拉配置初始化');

  setTimeout(() => {
    success(genData);
  }, 100);
};

const schemas: FormProSchema[] = [
  {
    field: 'modalUser',
    component: 'ModalUser',
    label: 'ModalUser',
    componentProps: {
      api: getModalUserForOptions,
      placeholder: '请输入',
    },
  },
  // {
  //   field: 'spfield1',
  //   component: 'SelectApi',
  //   label: 'SelectApi',
  //   componentProps: {
  //     api: getSelectForOptions,
  //     placeholder: '请输入',
  //   },
  // },
  // {
  //   field: 'spfield2',
  //   component: 'UploadImage',
  //   label: 'UploadImage',
  //   dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
  //     return [
  //       {
  //         required: true,
  //         validator: () => {
  //           const { spfield2 } = ruleParams.value.values;
  //           if (!spfield2) {
  //             return Promise.reject(new Error('请上传 UploadImage'));
  //           }
  //           return Promise.resolve();
  //         },
  //       },
  //     ];
  //   },
  //   componentProps: ({ formActionType }: FormProComponentPropsParams) => {
  //     return {
  //       placeholder: 'UploadImage 自动上传',
  //       action: 'https://api.dev.mosh.cn/public/upload/image/binary',
  //       mergeMoreDataable: true,
  //       mergeOriginDatas: (uploadParams: any) => {
  //         console.log(uploadParams, 'uploadParams');
  //         // 设置提交数据
  //         formActionType.setFieldsValue({
  //           type: 2,
  //         });
  //         return uploadParams.url;
  //       },
  //     };
  //   },
  // },
  // {
  //   field: 'tagModalListSelect',
  //   component: 'TagModalList',
  //   label: '标签弹框 select 模式',
  //   componentProps: {
  //     createable: true,
  //     showMoreButton: true,
  //     countMaxLength: 2,
  //     type: 'select',
  //     api: tagModalListApi,
  //     placeholder: '请输入',
  //   },
  // },
  // {
  //   field: 'spfield3auto',
  //   component: 'UploadName',
  //   label: 'UploadNameAuto',
  //   dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
  //     return [
  //       {
  //         required: true,
  //         trigger: 'blur',
  //         validator: () => {
  //           const { spfield3auto } = ruleParams.value.values;
  //           console.log(spfield3auto, 'spfield3auto');
  //           if (!spfield3auto) {
  //             return Promise.reject(new Error('上传 UploadName'));
  //           }
  //           return Promise.resolve();
  //         },
  //       },
  //     ];
  //   },
  //   componentProps: () => {
  //     return {
  //       accept: '*',
  //       action: 'https://qiwei-api.dev.mosh.cn/api/v1/upload/image/binary',
  //       headers: {
  //         Authorization:
  //           'Bearer mDzrafumbBwJcjJGrWll/R9olSdnGQBeqtrCh4JGS8TBdli/IbE3P7oPITBY0Eo8JiQH5f5XziMI4RrOoHzLfw==',
  //       },
  //       placeholder: 'UploadName 自动上传',
  //     };
  //   },
  // },
  // {
  //   field: 'spfield3',
  //   component: 'UploadName',
  //   label: 'UploadName',
  //   dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
  //     return [
  //       {
  //         required: true,
  //         trigger: 'blur',
  //         validator: () => {
  //           const { spfield3 } = ruleParams.value.values;
  //           if (!spfield3) {
  //             return Promise.reject(new Error('上传 UploadName'));
  //           }
  //           return Promise.resolve();
  //         },
  //       },
  //     ];
  //   },
  //   componentProps: () => {
  //     return {
  //       accept: '*',
  //       placeholder: 'UploadName 不是自动上传',
  //       autoUpload: false,
  //       onFormChange: (values: any) => {
  //         console.log(values, 'values');
  //       },
  //     };
  //   },
  // },
  // {
  //   field: 'spfield4',
  //   component: 'UploadCard',
  //   label: 'UploadCard',
  //   dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
  //     return [
  //       {
  //         required: true,
  //         validator: () => {
  //           const { spfield4 } = ruleParams.value.values;
  //           if (!spfield4 || !spfield4.length) {
  //             return Promise.reject(new Error('请上传 UploadCard'));
  //           }
  //           return Promise.resolve();
  //         },
  //       },
  //     ];
  //   },
  //   componentProps: (params: FormProComponentPropsParams) => {
  //     return {
  //       placeholder: 'UploadCard',
  //       action: 'https://api.dev.mosh.cn/public/upload/image/binary',
  //       onFormChange: () => {
  //         // 上传之后验证一下
  //         params.formActionType.validate(['spfield4']);
  //       },
  //     };
  //   },
  // },
];

export default defineComponent({
  setup() {
    const [specialFormPro, specialFormActions] = useForm({
      schemas,
      labelWidth: 200,
    });

    const specialHandleSubmit = async () => {
      try {
        const updateParams = await specialFormActions.validate();
        console.log(JSON.stringify(updateParams), 'updateParams');
      } catch (err) {}
    };

    onMounted(() => {
      setTimeout(() => {
        specialFormActions.setFieldsValue({
          modalUser: ['ShangHaojia'],
        });
      }, 90);
    });

    return {
      specialFormPro,
      specialHandleSubmit,
    };
  },
});
</script>
