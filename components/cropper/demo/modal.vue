<docs>
---
order: 0
title:
  zh-CN: 弹框中使用
  en-US: Base
---

## zh-CN

弹框中使用。

## en-US

弹框中使用.
</docs>

<template>
  <div>
    <a-space>
      <a-button type="primary" @click="showModal">打开 Modal</a-button>
      <a-button type="primary" @click="onShowProModal">打开 Modal Pro</a-button>
    </a-space>
    <a-modal v-model:visible="visible" title="Basic Modal" :maskClosable="false" @ok="handleOk">
      <a-cropper :src="theUrl" />
    </a-modal>
    <a-modal-pro
      @register="registerModal"
      title="water"
      :width="800"
      :min-height="500"
      :maskClosable="false"
    > 
      <a-cropper :src="theUrl" />
    </a-modal-pro>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const theUrl = shallowRef('');
    const URL_PATH = 'https://dz-cdn.test.fanzhi.cn/images/88/6f/39057702af25a0eb4dbc61114e02.jpg';

      // 普通 modal start
    const visible = ref<boolean>(false);
    const showModal = () => {
      theUrl.value = URL_PATH;
      visible.value = true;
    };

    const handleOk = () => {
      visible.value = false;
    };
      // 普通 modal end

      // modal pro start
    const { register: registerModal, methods: modalMethods } = useModal();
    const onShowProModal = () => {
      theUrl.value = URL_PATH;
      modalMethods.openModal()
    }
    // modal pro end

    return {
      // 裁切图片
      theUrl,
      // 普通 modal start
      visible,
      showModal,
      handleOk,
      // 普通 modal end
      // modal pro start
      registerModal,
      onShowProModal,
      // modal pro end
    };
  },
});
</script>
