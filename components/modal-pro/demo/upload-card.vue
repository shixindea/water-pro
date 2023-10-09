<docs>
---
order: 0
title:
  zh-CN: 改变上传照片墙数据
  en-US: UploadCard
---

## zh-CN

在弹框中的使用。

## en-US

UploadCard.

</docs>

<template>
  <div>
    <a-button @click="open1">图1</a-button>
    <a-button @click="open2">图2</a-button>
    <div>{{ theImgs }}</div>
    <a-modal-pro @register="registerModal" title="water" :footer="null" @cancel="closeGroupModal">
      <a-form-pro @register="groupForm" @reset="closeModal" @submit="onOk" />
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';
import { ref, nextTick, defineComponent } from 'vue';
import { useModal, useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'industryProveUrl',
    component: 'UploadCard',
    label: '资质证明',
    changeEvent: 'changeUpload',
    dynamicRules: (ruleParams) => {
      return [
        {
          required: true,
          validator: () => {
            const { industryProveUrl } = ruleParams.value.values;
            if (!industryProveUrl || !industryProveUrl.length) {
              return Promise.reject(new Error('请上传资质证明'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: () => {
      return {
        draggable: true,
        maxUploadCount: 5,
        accept: 'image/png,image/jpeg,image/gif',
        resultKey: 'data',
        limitSize: 5,
      };
    },
  },
];

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    const [
      groupForm,
      { setFieldsValue: setFieldsValueGroup, getFieldsValue: getFieldsValueGroup },
    ] = useForm({
      schemas,
      labelWidth: 100,
      // showActionButtonGroup: false,
    });
    let num = ref(1);
    const theImgs = ref([]);
    const onOk = () => {
      theImgs.value = getFieldsValueGroup().industryProveUrl;
    };
    return {
      num,
      registerModal,
      schemas,
      groupForm,
      onOk,
      theImgs,
      open1: async () => {
        modalMethods.openModal();
        await nextTick();
        setFieldsValueGroup({
          industryProveUrl: [
            'https://test-oss.test.fanzhi.cn/images/00/17/baaf295b1b5fed679a29c7780a90.jpg',
            'https://test-oss.test.fanzhi.cn/images/94/ea/796d10207a7c52182b8643d2c5ad.jpg',
          ],
        });
      },
      open2: async () => {
        modalMethods.openModal();
        await nextTick();
        setFieldsValueGroup({
          industryProveUrl: [
            'https://test-oss.test.fanzhi.cn/images/ff/33/c130941d95ac47e2569c6b1a83ff.jpg',
            'https://test-oss.test.fanzhi.cn/images/e9/56/45ce6a2bef968242a674dee10dc3.jpg',
          ],
        });
      },
      closeGroupModal: () => {
        setFieldsValueGroup({
          adminId: [],
        });
        modalMethods.openModal(false);
      },
      closeModal() {
        modalMethods.openModal(false);
      },
    };
  },
});
</script>
