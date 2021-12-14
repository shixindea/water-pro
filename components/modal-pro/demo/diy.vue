<docs>
---
order: 0
title:
  zh-CN: 自定义
  en-US: slot
---

## zh-CN

slot

## en-US

slot.

</docs>

<template>
  <div>
    <a-button @click="open">打开</a-button>
    <a-modal-pro @register="registerModal">
      这里是自定义
      <template #footer>
        <div style="color: red" @click="close">footer</div>
      </template>
      <template #header>
        <div style="color: green">header</div>
      </template>
      <template #close>
        <div style="color: blue" @click="close">close</div>
      </template>
    </a-modal-pro>
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
      close: () => {
        modalMethods.openModal(false);
      },
    };
  },
});
</script>
