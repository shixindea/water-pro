<docs>
---
order: 0
title:
  zh-CN: 加载中
  en-US: Loading
---

## zh-CN

内容加载，按钮加载的实现。

## en-US

Loading.

</docs>

<template>
  <div>
    <a-button @click="open">打开</a-button>
    <a-modal-pro
      @register="registerModal"
      title="water"
      @ok="okHandle"
      :loading="modalLoading"
      loading-tip="我们在努力的加载"
      :ok-button-props="{
        loading: modalLoading,
      }"
      ok-text="点击加载"
    >
      这里面是简单的内容
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup(props) {
    const { register: registerModal, methods: modalMethods } = useModal();
    const modalLoading = ref(false);
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
      okHandle: () => {
        modalLoading.value = true;
        setTimeout(() => {
          modalMethods.openModal(false);
          modalLoading.value = false;
        }, 1500);
      },
      modalLoading,
    };
  },
});
</script>
