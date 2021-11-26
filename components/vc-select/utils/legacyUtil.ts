import { flattenChildren, isValidElement } from '../../_util/props-util';
import { VNodeChild } from 'vue';
import { OptionData, OptionGroupData, OptionsType } from '../interface';

function convertNodeToOption(node: any): OptionData {
  const {
    key,
    children,
    props: { value, disabled, ...restProps },
  } = node;
  const child = children && children.default ? children.default() : undefined;
  return {
    key,
    value: value !== undefined ? value : key,
    children: child,
    disabled: disabled || disabled === '', // support <a-select-option disabled />
    ...restProps,
  };
}

export function convertChildrenToData(
  nodes: VNodeChild | JSX.Element,
  optionOnly = false,
): OptionsType {
  const dd = flattenChildren(nodes as [])
    .map((node: any, index: number): OptionData | OptionGroupData | null => {
      if (!isValidElement(node) || !node.type) {
        return null;
      }

      const {
        type: { isSelectOptGroup },
        key,
        children,
        props,
      } = node;

      if (optionOnly || !isSelectOptGroup) {
        return convertNodeToOption(node);
      }
      const child = children && children.default ? children.default() : undefined;
      const label = props?.label || children.label?.() || key;
      return {
        key: `__RC_SELECT_GRP__${key === null ? index : key}__`,
        ...props,
        label,
        options: convertChildrenToData(child || []),
      } as any;
    })
    .filter(data => data);
  return dd;
}
