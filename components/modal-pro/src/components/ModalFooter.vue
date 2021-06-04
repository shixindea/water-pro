<!-- @format -->

<template>
  <div
    v-if="showCancelBtn || showOkBtn || $slots.insertFooter"
    :class="prefixClsNew"
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

  import Button from '../../../button/button';
  import useConfigInject from '../../../_util/hooks/useConfigInject';

  import { basicProps } from '../props';

  export default defineComponent({
    name: 'BasicModalFooter',
    components: { AButton: Button },
    props: basicProps,
    emits: ['ok', 'cancel'],
    setup(props, { emit }) {
      const { prefixCls: prefixClsNew } = useConfigInject('modal-pro-footer', props);
      function handleOk() {
        emit('ok');
      }

      function handleCancel() {
        emit('cancel');
      }
      return { handleOk, handleCancel, prefixClsNew };
    },
  });
</script>

