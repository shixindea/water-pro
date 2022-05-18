import type { ExtractPropTypes } from 'vue';
import type { ChangeEvent } from '../_util/EventInterface';
import { defineComponent } from 'vue';
import IconBytedSearch from '@fe6/icon-vue/lib/icons/byted-search';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import Input from '../input';

export const transferSearchProps = {
  prefixCls: String,
  placeholder: String,
  value: String,
  handleClear: Function,
  disabled: { type: Boolean, default: undefined },
  onChange: Function,
};

export type TransferSearchProps = Partial<ExtractPropTypes<typeof transferSearchProps>>;

export default defineComponent({
  name: 'Search',
  inheritAttrs: false,
  props: initDefaultProps(transferSearchProps, {
    placeholder: '',
  }),
  emits: ['change'],
  setup(props, { emit }) {
    const handleChange = (e: ChangeEvent) => {
      emit('change', e);
      if (e.target.value === '') {
        props.handleClear?.();
      }
    };

    return () => {
      const { placeholder, value, prefixCls, disabled } = props;
      return (
        <Input
          placeholder={placeholder}
          class={prefixCls}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          allowClear
          v-slots={{ prefix: () => <IconBytedSearch colors={['currentColor']} /> }}
        />
      );
    };
  },
});
