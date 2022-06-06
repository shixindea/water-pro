<docs>
---
order: 0
title:
  zh-CN: 表单
  en-US: FormPro usage
---

## zh-CN

打开三次每次都不一样。

## en-US

FormPro.

</docs>

<template>
  <div>
    <a-button @click="open">第 {{ num - 1 }} 次打开</a-button>
    <a-modal-pro @register="registerModal" title="water" :footer="null" @cancel="closeGroupModal">
      <a-form-pro @register="groupForm" />
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import type { AjaxApi, FormProSchema } from '@fe6/water-pro';
import { ref, nextTick, defineComponent } from 'vue';
import { useModal, useForm } from '@fe6/water-pro';

import genData from './data1';

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    console.log(genData, '接口请求成功');
    success(genData);
  }, 100);
};

const schemas: FormProSchema[] = [
  {
    field: 'adminId',
    label: '负责人',
    component: 'ModalUser',
    componentProps: {
      api: getSelectForOptions,
      placeholder: '负责人',
    },
  },
];

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    const [groupForm, { setFieldsValue: setFieldsValueGroup }] = useForm({
      schemas,
      labelWidth: 100,
      showActionButtonGroup: false,
    });
    let num = ref(1);
    return {
      num,
      registerModal,
      schemas,
      groupForm,
      open: async () => {
        modalMethods.openModal();
        await nextTick();
        if (num.value === 1) {
          num.value = 2;
          setFieldsValueGroup({
            adminId: ['cfe7385ed75ecd2d21112eb44b36ae7b'],
          });
        } else if (num.value === 2) {
          num.value = 3;
          setFieldsValueGroup({
            adminId: ['XiaoJieYun'],
          });
        }
      },
      closeGroupModal: () => {
        setFieldsValueGroup({
          adminId: [],
        });
      },
    };
  },
});
</script>
