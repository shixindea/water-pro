<docs>
---
order: 0
title:
  zh-CN: 全屏
  en-US: Fullscreen
---

## zh-CN

`can-fullscree` 设置全屏。

## en-US

Fullscreen.

</docs>

<template>
  <div>
    <a-button @click="open">打开</a-button>
    <a-modal-pro @register="registerModal" can-fullscreen title="water">
      这里面是简单的内容
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
    };
  },
});
</script>
