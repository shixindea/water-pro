<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

第一个对话框。

## en-US

Basic modal.

</docs>

<template>
  <div>
    <a-button @click="open">打开</a-button>
    <a-modal-pro @register="registerModal" title="water"> 这里面是简单的内容 </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
    };
  },
});
</script>
