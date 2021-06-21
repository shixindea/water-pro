import { inject, defineComponent, PropType } from 'vue';
import classNames from '../_util/classNames';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';

const CheckableTag = defineComponent({
  name: 'ACheckableTag',
  props: {
    prefixCls: PropTypes.string,
    checked: PropTypes.looseBool,
    onChange: {
      type: Function as PropType<(checked: boolean) => void>,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  emits: ['update:checked', 'change', 'click'],
  setup(props, { slots, emit }) {
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const { getPrefixCls } =
      inject('configProvider', defaultConfigProvider) || defaultConfigProvider;
    const handleClick = (e: MouseEvent) => {
      const { checked } = props;
      emit('update:checked', !checked);
      emit('change', !checked);
      emit('click', e);
    };

    return () => {
      const { checked, prefixCls: customizePrefixCls } = props;
      const prefixCls = getPrefixCls('tag', customizePrefixCls);
      const cls = classNames(prefixCls, {
        [`${prefixCls}-checkable`]: true,
        [`${prefixCls}-checkable-checked`]: checked,
      });

      return (
        <span class={cls} onClick={handleClick}>
          {slots.default?.()}
        </span>
      );
    };
  },
});

export default CheckableTag;
