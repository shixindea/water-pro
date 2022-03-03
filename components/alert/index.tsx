import type { ExtractPropTypes } from 'vue';
import { inject, defineComponent, ref } from 'vue';
import IconBytedCheckOne from '@fe6/icon-vue/lib/icons/byted-check-one';
import IconBytedInfo from '@fe6/icon-vue/lib/icons/byted-info';
import IconBytedCloseOne from '@fe6/icon-vue/lib/icons/byted-close-one';
import IconBytedAttention from '@fe6/icon-vue/lib/icons/byted-attention';

import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { getTransitionProps, Transition } from '../_util/transition';
import { isValidElement, getPropsSlot } from '../_util/props-util';
import { tuple, withInstall } from '../_util/type';
import { cloneElement } from '../_util/vnode';
import { defaultConfigProvider } from '../config-provider';
import BasicClose from '../basic-close';

function noop() {}

const iconMap = {
  success: IconBytedCheckOne,
  info: IconBytedInfo,
  error: IconBytedCloseOne,
  warning: IconBytedAttention,
};

const AlertTypes = tuple('success', 'info', 'warning', 'error');

export type AlertType = typeof AlertTypes[number];

const alertProps = {
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: PropTypes.oneOf(AlertTypes),
  /** Whether Alert can be closed */
  closable: PropTypes.looseBool,
  /** Close text to show */
  closeText: PropTypes.any,
  /** Content of Alert */
  message: PropTypes.any,
  /** Additional content of Alert */
  description: PropTypes.any,
  /** Trigger when animation ending of Alert */
  afterClose: PropTypes.func.def(noop),
  /** Whether to show icon */
  showIcon: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  banner: PropTypes.looseBool,
  icon: PropTypes.any,
  onClose: PropTypes.any,
};

export type AlertProps = Partial<ExtractPropTypes<typeof alertProps>>;

const Alert = defineComponent({
  name: 'AAlert',
  inheritAttrs: false,
  props: alertProps,
  emits: ['close'],
  setup(props, { slots, emit, attrs, expose }) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const closing = ref(false);
    const closed = ref(false);
    const alertNode = ref();

    const handleClose = (e: MouseEvent) => {
      e.preventDefault();

      const dom = alertNode.value;

      dom.style.height = `${dom.offsetHeight}px`;
      // Magic code
      // 重复一次后才能正确设置 height
      dom.style.height = `${dom.offsetHeight}px`;

      closing.value = true;
      emit('close', e);
    };

    const animationEnd = () => {
      closing.value = false;
      closed.value = true;
      props.afterClose?.();
    };

    expose({ animationEnd });

    return () => {
      const { prefixCls: customizePrefixCls, banner } = props;
      const { getPrefixCls } = configProvider;
      const prefixCls = getPrefixCls('alert', customizePrefixCls);

      let { closable, type, showIcon } = props;

      const closeText = getPropsSlot(slots, props, 'closeText');
      const description = getPropsSlot(slots, props, 'description');
      const message = getPropsSlot(slots, props, 'message');
      const icon = getPropsSlot(slots, props, 'icon');

      // banner模式默认有 Icon
      showIcon = banner && showIcon === undefined ? true : showIcon;
      // banner模式默认为警告
      type = banner && type === undefined ? 'warning' : type || 'info';

      const IconType = iconMap?.[type] || null;

      // closeable when closeText is assigned
      if (closeText) {
        closable = true;
      }

      const alertCls = classNames(prefixCls, {
        [`${prefixCls}-${type}`]: true,
        [`${prefixCls}-closing`]: closing.value,
        [`${prefixCls}-with-description`]: !!description,
        [`${prefixCls}-no-icon`]: !showIcon,
        [`${prefixCls}-banner`]: !!banner,
        [`${prefixCls}-closable`]: closable,
      });

      const closeIcon = closable ? (
        <button type="button" onClick={handleClose} class={`${prefixCls}-close-icon`} tabindex={0}>
          {closeText ? (
            <span class={`${prefixCls}-close-text`}>{closeText}</span>
          ) : (
            <BasicClose size={12} />
          )}
        </button>
      ) : null;

      const iconNode = (icon &&
        (isValidElement(icon) ? (
          cloneElement(icon, {
            class: `${prefixCls}-icon`,
          })
        ) : (
          <span class={`${prefixCls}-icon`}>{icon}</span>
        ))) || (
        <IconType
          class={`${prefixCls}-icon`}
          theme={description ? 'outline' : 'filled'}
          colors={['currentColor']}
        />
      );

      const transitionProps = getTransitionProps(`${prefixCls}-slide-up`, {
        appear: false,
        onAfterLeave: animationEnd,
      });
      return closed.value ? null : (
        <Transition {...transitionProps}>
          <div
            {...attrs}
            v-show={!closing.value}
            class={[attrs.class, alertCls]}
            data-show={!closing.value}
            ref={alertNode}
          >
            {showIcon ? iconNode : null}
            <div class={`${prefixCls}-content`}>
              <div class={`${prefixCls}-message`}>{message}</div>
              <div class={`${prefixCls}-description`}>{description}</div>
            </div>
            {closeIcon}
          </div>
        </Transition>
      );
    };
  },
});

export default withInstall(Alert);
