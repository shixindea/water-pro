import { defineComponent, ref } from 'vue';
import { IconBytedCloseOne } from '@fe6/icon-vue';

import useConfigInject from '../_util/hooks/useConfigInject';
import { basicClearProps } from './props';

export default defineComponent({
  name: 'ABasicClear',
  emits: ['on-enter', 'on-leave'],
  props: basicClearProps,
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('basic-clear', props);

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
        <IconBytedCloseOne
          theme="filled"
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
