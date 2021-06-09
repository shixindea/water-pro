import { defineComponent, inject } from 'vue';
import isMobile from '../vc-menu/utils/isMobile';
import { useAttrs } from '../_util/hooks/use-attrs';
import { useRuleFormItem } from '../_util/hooks/use-form-item';
import { getOptionProps } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';

import Input from './Input';
import inputProps from './inputProps';

export default defineComponent({
  name: 'AInputCount',
  props: {
    ...inputProps,
    maxLength: PropTypes.number,
  },
  setup(props) {
    const attrs = useAttrs();
    const [state] = useRuleFormItem(props);
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      attrs,
      state,
      input: null,
    };
  },
  methods: {
    saveInput(node: HTMLInputElement) {
      this.input = node;
    },
    handleChange(e: Event) {
      this.$emit('update:value', (e.target as HTMLInputElement).value);
      if (e && e.target && e.type === 'click') {
        this.$emit('count', (e.target as HTMLInputElement).value, e);
      }
      this.$emit('change', e);
    },
    handleCount(e: Event) {
      if (this.loading || this.disabled) {
        return;
      }
      this.$emit('count', this.input.stateValue, e);
      if (!isMobile.tablet) {
        this.input.focus();
      }
    },
    focus() {
      this.input.focus();
    },

    blur() {
      this.input.blur();
    },
  },
  render() {
    const {
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      size,
      class: className,
      ...restProps
    } = { ...getOptionProps(this), ...this.$attrs } as any;
    const getPrefixCls = this.configProvider.getPrefixCls;
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

    const inputProps = {
      ...restProps,
      prefixCls: inputPrefixCls,
      size,
      onPressEnter: this.handleCount,
      onChange: this.handleChange,
      ...this.attrs,
      suffix: this.maxLength > 0 ? `${String(this.value).length} / ${this.maxLength}` : '',
    };
    return <Input {...inputProps} ref={this.saveInput} />;
  },
});
