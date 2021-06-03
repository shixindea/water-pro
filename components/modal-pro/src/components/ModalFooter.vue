<!-- @format -->

<template>
  <div
    v-if="showCancelBtn || showOkBtn || $slots.insertFooter"
    class="a-modal-footer"
  >
    <slot name="insertFooter"></slot>
    <a-button
      v-if="showCancelBtn"
      v-bind="cancelButtonProps"
      @click="handleCancel"
    >
      {{ cancelText }}
    </a-button>
    <slot name="centerFooter"></slot>
    <a-button
      v-if="showOkBtn"
      :type="okType"
      :loading="confirmLoading"
      v-bind="okButtonProps"
      @click="handleOk"
    >
      {{ okText }}
    </a-button>
    <slot name="appendFooter"></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { basicProps } from '../props';

  export default defineComponent({
    name: 'BasicModalFooter',
    props: basicProps,
    emits: ['ok', 'cancel'],
    setup(_, { emit }) {
      function handleOk() {
        emit('ok');
      }

      function handleCancel() {
        emit('cancel');
      }
      return { handleOk, handleCancel };
    },
  });
</script>

