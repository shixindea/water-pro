import type { PropType } from 'vue';
import { defineComponent, nextTick } from 'vue';
import Transition from '../_util/transition';
import Spin from '../spin';
import { ButtonType } from './buttonTypes';

const getCollapsedWidth = (node: HTMLSpanElement) => {
  if (node) {
    node.style.width = '0px';
    node.style.opacity = '0';
    node.style.transform = 'scale(0)';
  }
};
const getRealWidth = (node: HTMLSpanElement) => {
  nextTick(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';
    }
  });
};
const resetStyle = (node: HTMLSpanElement) => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
export default defineComponent({
  name: 'LoadingIcon',
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean,
    danger: Boolean,
    type: String as PropType<ButtonType>,
  },
  setup(props) {
    return () => {
      const { danger, existIcon, prefixCls, loading, type } = props;
      let theSpinColor = '';

      if (type === 'primary') {
        theSpinColor = '#fff';
      }

      if (danger && type !== 'primary') {
        theSpinColor = 'var(--ant-error-color)';
      }

      if (existIcon) {
        return (
          <span class={`${prefixCls}-loading-icon`}>
            <Spin spinClassName={`${prefixCls}-spin`} size="small" color={theSpinColor} />
          </span>
        );
      }
      const visible = !!loading;
      return (
        <Transition
          name={`${prefixCls}-loading-icon-motion`}
          onBeforeEnter={getCollapsedWidth}
          onEnter={getRealWidth}
          onAfterEnter={resetStyle}
          onBeforeLeave={getRealWidth}
          onLeave={(node: HTMLSpanElement) => {
            setTimeout(() => {
              getCollapsedWidth(node);
            });
          }}
          onAfterLeave={resetStyle}
        >
          {visible ? (
            <span class={[`${prefixCls}-loading-icon`, `${prefixCls}-spin`]}>
              <Spin size="small" color={theSpinColor} />
            </span>
          ) : null}
        </Transition>
      );
    };
  },
});
