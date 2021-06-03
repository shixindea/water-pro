<!-- @format -->

<template>
  <div :class="getClass">
    <template v-if="canFullscreen">
      <FullscreenExitOutlined
        v-if="fullScreen"
        role="full"
        @click="handleFullScreen"
      />

      <FullscreenOutlined v-else role="close" @click="handleFullScreen" />
    </template>
    <CloseOutlined @click="handleCancel" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, inject } from 'vue';
  import {
    FullscreenExitOutlined,
    FullscreenOutlined,
    CloseOutlined,
  } from '@ant-design/icons-vue';
  import { defaultConfigProvider } from '../../../config-provider';

  import PropTypes from '../../../_util/vue-types';

  export default defineComponent({
    name: 'ModalClose',
    components: { FullscreenExitOutlined, FullscreenOutlined, CloseOutlined },
    props: {
      canFullscreen: PropTypes.bool.def(true),
      fullScreen: PropTypes.bool,
      prefixCls: PropTypes.string,
    },
    emits: ['cancel', 'fullscreen'],
    setup(props, { emit }) {
      const { getPrefixCls } = inject('configProvider', defaultConfigProvider);
      const prefixClsNew = getPrefixCls('basic-modal-close', props.prefixCls);

      const getClass = computed(() => {
        return [
          prefixClsNew,
          `${prefixClsNew}--custom`,
          {
            [`${prefixClsNew}--can-full`]: props.canFullscreen,
          },
        ];
      });

      function handleCancel() {
        emit('cancel');
      }
      function handleFullScreen(e: Event) {
        e?.stopPropagation();
        e?.preventDefault();
        emit('fullscreen');
      }

      return {
        getClass,
        handleCancel,
        handleFullScreen,
      };
    },
  });
</script>
