<docs>
---
order: 0
title:
  zh-CN: 帮助提示的标题
  en-US: text
---

## zh-CN

`text="这只是个小提示"`

## en-US

Text.

</docs>

<template>
  <div>
    <a-button @click="open">打开</a-button>
    <a-modal-pro @register="registerModal" title="water" text="这只是个小提示">
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
