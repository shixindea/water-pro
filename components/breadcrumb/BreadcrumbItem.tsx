import type { ExtractPropTypes, PropType } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { getPropsSlot } from '../_util/props-util';
import DropDown from '../dropdown/dropdown';
import useConfigInject from '../_util/hooks/useConfigInject';
import BasicArrow from '../basic-arrow';

export const breadcrumbItemProps = () => ({
  prefixCls: String,
  href: String,
  separator: PropTypes.any,
  overlay: PropTypes.any,
  onClick: Function as PropType<MouseEventHandler>,
});

export type BreadcrumbItemProps = Partial<ExtractPropTypes<ReturnType<typeof breadcrumbItemProps>>>;
export default defineComponent({
  name: 'ABreadcrumbItem',
  inheritAttrs: false,
  __ANT_BREADCRUMB_ITEM: true,
  props: breadcrumbItemProps(),
  // emits: ['click'],
  slots: ['separator', 'overlay'],
  setup(props, { slots, attrs }) {
    const { prefixCls } = useConfigInject('breadcrumb', props);
    /**
     * if overlay is have
     * Wrap a DropDown
     */
    const renderBreadcrumbNode = (breadcrumbItem: JSX.Element, prefixCls: string) => {
      const overlay = getPropsSlot(slots, props, 'overlay');
      if (overlay) {
        return (
          <DropDown overlay={overlay} placement="bottom">
            <span class={`${prefixCls}-overlay-link`}>
              {breadcrumbItem}
              <BasicArrow expand colors={['#00000072']} />
            </span>
          </DropDown>
        );
      }
      return breadcrumbItem;
    };

    return () => {
      const separator = getPropsSlot(slots, props, 'separator') ?? '/';
      const children = getPropsSlot(slots, props);
      const { class: cls, style, ...restAttrs } = attrs;
      let link: JSX.Element;
      if (props.href !== undefined) {
        link = (
          <a class={`${prefixCls.value}-link`} onClick={props.onClick} {...restAttrs}>
            {children}
          </a>
        );
      } else {
        link = (
          <span class={`${prefixCls.value}-link`} onClick={props.onClick} {...restAttrs}>
            {children}
          </span>
        );
      }
      // wrap to dropDown
      link = renderBreadcrumbNode(link, prefixCls.value);
      if (children) {
        return (
          <span class={cls} style={style}>
            {link}
            {separator && <span class={`${prefixCls.value}-separator`}>{separator}</span>}
          </span>
        );
      }
      return null;
    };
  },
});
