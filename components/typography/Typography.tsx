import type { HTMLAttributes } from 'vue';
import { defineComponent } from 'vue';

import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';

export interface TypographyProps extends HTMLAttributes {
  prefixCls?: string;
  size?: 'default' | 'small' | 'large';
  resetable?: boolean;
  blockable?: boolean;
}

export interface InternalTypographyProps extends TypographyProps {
  component?: string;
}

const Typography = defineComponent<InternalTypographyProps>({
  name: 'ATypography',
  inheritAttrs: false,
  setup(props, { slots, attrs }) {
    const { prefixCls } = useConfigInject('typography', props);
    return () => {
      const {
        prefixCls: _prefixCls,
        class: _className,
        component: Component = 'article' as any,
        ...restProps
      } = { ...props, ...attrs };
      return (
        <Component
          class={classNames(prefixCls.value, attrs.class, {
            [`${prefixCls.value}-reset`]: props.resetable,
            [`${prefixCls.value}-block`]: props.blockable,
            [`${prefixCls.value}-${props.size}`]: props.size && props.size !== 'default',
          })}
          {...restProps}
        >
          {slots.default?.()}
        </Component>
      );
    };
  },
});

Typography.props = {
  prefixCls: PropTypes.string,
  component: PropTypes.string,
  resetable: PropTypes.looseBool,
  blockable: PropTypes.looseBool,
  size: PropTypes.oneOf(['large', 'small', 'default']).def('default'),
};

export default Typography;
