<docs>
---
order: 3
title:
  zh-CN: 确认对话框
  en-US: Confirmation modal dialog
---

## zh-CN

使用 `confirm()` 可以快捷地弹出确认框。

## en-US

To use `confirm()` to show a confirmation modal dialog.

</docs>

<template>
  <div>
    <a-button @click="showConfirm">Confirm</a-button>
    <a-button type="dashed" @click="showDeleteConfirm">Delete</a-button>
    <a-button type="dashed" @click="showPropsConfirm">With extra props</a-button>
  </div>
</template>
<script lang="ts">
import { createVNode, defineComponent } from 'vue';
import { Modal } from '@fe6/water-pro';
import IconBytedAttention from '@fe6/icon-vue/lib/icons/byted-attention';

export default defineComponent({
  setup() {
    const showConfirm = () => {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        icon: createVNode(IconBytedAttention, { colors: ['currentColor'] }),
        content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    };
    const showDeleteConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(IconBytedAttention, { colors: ['currentColor'] }),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    const showPropsConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(IconBytedAttention, { colors: ['currentColor'] }),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          disabled: true,
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    return {
      showConfirm,
      showDeleteConfirm,
      showPropsConfirm,
    };
  },
});
</script>
