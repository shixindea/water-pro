<template>
  <a-button @click="showConfirm">Confirm</a-button>
</template>
<script lang="ts">
import { createVNode, defineComponent } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const showConfirm = () => {
      for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
          Modal.confirm({
            content: 'destroy all',
            icon: createVNode(ExclamationCircleOutlined),
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            cancelText: 'Click to destroy all',
            onCancel() {
              Modal.destroyAll();
            },
          });
        }, i * 500);
      }
    };
    return {
      showConfirm,
    };
  },
});
</script>
