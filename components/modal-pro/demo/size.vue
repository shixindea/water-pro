<docs>
---
order: 0
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

弹框的宽高设置，内容高度的设置。

## en-US

Size.

</docs>

<template>
  <div>
    <a-button @click="open">打开</a-button>
    <a-modal-pro
      @register="registerModal"
      title="water"
      :width="800"
      :min-height="1000"
      :body-style="{ height: '500px' }"
    >
      设置宽高的内容
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
