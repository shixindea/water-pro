import type { HTMLAttributes, PropType } from 'vue';
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import type { Direction } from '../config-provider';

export interface TypographyProps extends HTMLAttributes {
  direction?: Direction;
  prefixCls?: string;
  size?: string;
  resetable?: boolean;
  blockable?: boolean;
  centerable?: boolean;
  class?: object | string | any[];
}

export interface InternalTypographyProps extends TypographyProps {
  component?: string;
}
export const typographyProps = () => ({
  prefixCls: String,
  direction: String as PropType<Direction>,
  // Form Internal use
  component: String,
  blockable: Boolean,
  centerable: Boolean,
  resetable: Boolean,
  size: {
    type: String,
    default: 'default',
  },
});
const Typography = defineComponent<InternalTypographyProps>({
  name: 'ATypography',
  inheritAttrs: false,
  props: typographyProps() as any,
  setup(props, { slots, attrs }) {
    const { prefixCls, direction } = useConfigInject('typography', props);
    return () => {
      const {
        prefixCls: _prefixCls,
        class: _className,
        direction: _direction,
        component: Component = 'article' as any,
        ...restProps
      } = { ...props, ...attrs };
      return (
        <Component
          class={classNames(
            prefixCls.value,
            { [`${prefixCls.value}-rtl`]: direction.value === 'rtl' },
            {
              [`${prefixCls.value}-reset`]: props.resetable,
              [`${prefixCls.value}-block`]: props.blockable,
              [`${prefixCls.value}-center`]: props.centerable,
              [`${prefixCls.value}-${props.size}`]: props.size && props.size !== 'default',
            },
            attrs.class,
          )}
          {...restProps}
        >
          {slots.default?.()}
        </Component>
      );
    };
  },
});

export default Typography;
