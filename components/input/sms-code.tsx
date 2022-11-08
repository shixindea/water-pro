import type { ButtonProps } from '../button/buttonTypes';

import { defineComponent, ref, PropType } from 'vue';
import { hasOwn } from '@fe6/shared';

import AButton from '../button';
import AInput from './Input';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';

import useFetch from '../_util/hooks/use-fetch';
import classNames from '../_util/classNames';
import { getComponent, getOptionProps } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import { Recordable } from '../_util/type';

import zhCn from './locale/zh_CN';
import inputProps from './inputProps';
import { InputLocale } from './interface';

export default defineComponent({
  name: 'ASmsCode',
  components: {
    AInput,
    AInputGroup: AInput.Group,
  },
  mixins: [BaseMixin],
  inheritAttrs: false,
  emit: ['on-enter'],
  props: {
    ...inputProps(),
    locale: { type: Object as PropType<InputLocale> },
    prefixCls: PropTypes.string.def('ant-input-smscode'),
    inputPrefixCls: PropTypes.string.def('ant-input'),
    formTest: PropTypes.looseBool,
    buttonOptions: Object as PropType<Partial<ButtonProps>>,
    btnText: PropTypes.string,
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
    before: {
      type: Function,
      default(fn) {
        fn();
      },
    },
    ajaxParams: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: () => ({}),
    },
    smsInputStyle: PropTypes.style,
  },
  setup(props: any) {
    const [contextLocale] = useLocaleReceiver('Input', zhCn);
    const { configProvider } = useConfigInject('input-smscode', props);
    const { loading, fetch } = useFetch(props.api);
    const locale = { ...contextLocale.value, ...props.locale };
    const btnContent = ref(props.btnText || locale?.smsCode.btnText || '获取验证码');
    return {
      sendLoading: loading,
      fetch,
      configProvider,
      btnContent,
      locale,
    };
  },
  data() {
    return {
      smsCode: '',
      // 验证码 start
      allTimes: 0,
      start: false,
      timer: null,
      go: true, // 是否可以继续获取
      // 验证码 end
      phone: '',
      input: null,
    };
  },
  created() {
    this.setSmsCode();
    this.setPhone();
    this.resetCode();
  },
  // 修复表单中重置恢复字段初始化时候还在倒计时
  updated() {
    this.setSmsCode();
    this.setPhone();
    this.resetCode();
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    saveInput(node: any) {
      this.input = node;
    },
    resetCode() {
      this.btnContent = this.btnText || this.locale?.smsCode.btnText || '获取验证码';
      this.allTimes = 60;
      this.go = true;
      this.start = false;
    },
    auto() {
      setTimeout(() => {
        if (this.start) {
          if (this.allTimes > 1) {
            this.allTimes--;
            this.btnContent = `${this.allTimes}${this.locale?.smsCode?.btnUnit || '秒后重试'}`;
            this.timer = setTimeout(this.auto.bind(this), 1000);
          } else {
            clearTimeout(this.timer);
            this.resetCode();
          }
        }
      }, 50);
    },
    sendSMSCode() {
      if (!this.formTest && !this.sendLoading && !this.start && this.go) {
        (this.before as Function)(async (valid: boolean) => {
          if (!valid) {
            const params = {
              phone: this.phone,
              ...(this.ajaxParams as Function)(),
            };
            this.fetch({
              params,
              error: () => {
                this.resetCode();
              },
              success: (result: any) => {
                if (result) {
                  if (this.go && !this.start) {
                    this.go = false;
                    this.start = true;
                    this.auto();
                  }
                }
              },
            });
          }
        });
      }
    },
    setPhone() {
      this.phone = this.user;
    },
    setSmsCode() {
      this.smsCode = String(this.value);
      this.resetCode();
    },
    changeSmsCode(e: any) {
      this.$emit('update:value', this.smsCode || e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    enterSms() {
      this.$emit('on-enter');
    },
  },
  render() {
    const {
      prefixCls,
      inputPrefixCls,
      size,
      suffix,
      action,
      visibilityToggle,
      iconRender,
      buttonOptions,
      smsInputStyle,
      ...restProps
    } = getOptionProps(this);

    const { class: className } = this.$attrs;
    const inputClassName = classNames(prefixCls, className, {
      [`${prefixCls}-${size}`]: !!size,
    });
    const isLoading = hasOwn(buttonOptions, 'loading')
      ? buttonOptions.loading || this.sendLoading
      : this.sendLoading;
    const inputProps: any = {
      ...restProps,
      prefixCls: inputPrefixCls,
      size,
      prefix: getComponent(this, 'prefix'),
      addonAfter: getComponent(this, 'addonAfter'),
      addonBefore: getComponent(this, 'addonBefore'),
      ...this.$attrs,
      class: inputClassName,
      autocomplete: 'off',
      onChange: this.changeSmsCode,
      onKeyup: this.enterSms,
      ref: 'input',
      style: smsInputStyle,
    };

    const btnProps: any = {
      ...buttonOptions,
      loading: isLoading,
      onClick: () => {
        this.sendSMSCode();
      },
    };

    return (
      <AInput.Group class="ant-input-smscode" compact>
        <a-input {...inputProps} />
        <AButton {...btnProps}>{this.btnContent}</AButton>
      </AInput.Group>
    );
  },
});
