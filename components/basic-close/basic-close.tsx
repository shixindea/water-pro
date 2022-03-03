import { defineComponent, ref } from 'vue';
import IconBytedClose from '@fe6/icon-vue/lib/icons/byted-close';

import useConfigInject from '../_util/hooks/useConfigInject';
import { basicCloseProps } from './props';

export default defineComponent({
  name: 'ABasicClose',
  emits: ['on-enter', 'on-leave', 'click'],
  props: basicCloseProps,
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('basic-close', props);

    const closeColors = ref(props.colors);
    const closeEnter = () => {
      closeColors.value = props.hoverColors;
      emit('on-enter');
    };
    const closeLeave = () => {
      closeColors.value = props.colors;
      emit('on-leave');
    };
    const click = () => {
      emit('click');
    };
    return () => {
      return (
        <IconBytedClose
          size={props.size}
          colors={closeColors.value}
          onMouseenter={closeEnter}
          onMouseleave={closeLeave}
          onClick={click}
          class={prefixClsNew.value}
        />
      );
    };
  },
});
