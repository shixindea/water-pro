import { defineComponent, ref } from 'vue';
import { IconBytedClose } from '@fe6/icon-vue';

import useConfigInject from '../_util/hooks/useConfigInject';
import { basicCloseProps } from './props';

export default defineComponent({
  name: 'ABasicClose',
  emits: ['on-enter', 'on-leave'],
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
    return () => {
      return (
        <IconBytedClose
          size={props.size}
          colors={closeColors.value}
          onMouseenter={closeEnter}
          onMouseleave={closeLeave}
          class={prefixClsNew.value}
        />
      );
    };
  },
});
