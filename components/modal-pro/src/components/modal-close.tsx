import { defineComponent, computed, ref } from 'vue';
import IconBytedFullScreen from '@fe6/icon-vue/lib/icons/byted-full-screen';
import IconBytedOffScreen from '@fe6/icon-vue/lib/icons/byted-off-screen';

import useConfigInject from '../../../_util/hooks/useConfigInject';

import BasicClose from '../../../basic-close';
import PropTypes from '../../../_util/vue-types';

export default defineComponent({
  name: 'ModalClose',
  props: {
    canFullscreen: PropTypes.bool.def(true),
    fullScreen: PropTypes.bool,
    prefixCls: PropTypes.string,
  },
  emits: ['cancel', 'fullscreen'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-pro-close', props);

    const getClass = computed(() => {
      return [
        prefixClsNew,
        `${prefixClsNew.value}--custom`,
        {
          [`${prefixClsNew.value}--can-full`]: props.canFullscreen,
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

    const closeFullColors = ref('#00000072');
    const closeFullEnter = () => {
      closeFullColors.value = '#000000bf';
    };
    const closeFullLeave = () => {
      closeFullColors.value = '#00000072';
    };

    return {
      prefixClsNew,
      getClass,
      handleCancel,
      handleFullScreen,
      closeFullColors,
      closeFullEnter,
      closeFullLeave,
    };
  },
  render() {
    let fullScreenNode = null;

    if (this.canFullscreen) {
      if (this.fullScreen) {
        fullScreenNode = (
          <IconBytedOffScreen
            size={16}
            class={`${this.prefixClsNew}-full`}
            role="full"
            onClick={this.handleFullScreen}
            colors={[this.closeFullColors]}
            onMouseenter={this.closeFullEnter}
            onMouseleave={this.closeFullLeave}
          />
        );
      } else {
        fullScreenNode = (
          <IconBytedFullScreen
            size={16}
            class={`${this.prefixClsNew}-full`}
            role="close"
            onClick={this.handleFullScreen}
            colors={[this.closeFullColors]}
            onMouseenter={this.closeFullEnter}
            onMouseleave={this.closeFullLeave}
          />
        );
      }
    }

    return (
      <div class={this.getClass}>
        {fullScreenNode}
        <BasicClose
          size={16}
          colors={['currentColor']}
          class={this.canFullscreen ? `${this.prefixClsNew}-icon` : ''}
          onClick={this.handleCancel}
        />
      </div>
    );
  },
});
