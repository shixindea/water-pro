import Spin from '../../spin';
import IconBytedDown from '@fe6/icon-vue/lib/icons/byted-down';
import IconBytedSearch from '@fe6/icon-vue/lib/icons/byted-search';
import IconBytedCheck from '@fe6/icon-vue/lib/icons/byted-check';
import IconBytedCloseOne from '@fe6/icon-vue/lib/icons/byted-close-one';
import IconBytedClose from '@fe6/icon-vue/lib/icons/byted-close';

export default function getIcons(props: any, slots: any = {}) {
  const { loading, multiple, prefixCls } = props;
  const suffixIcon = props.suffixIcon || (slots.suffixIcon && slots.suffixIcon());
  const clearIcon = props.clearIcon || (slots.clearIcon && slots.clearIcon());
  const menuItemSelectedIcon =
    props.menuItemSelectedIcon || (slots.menuItemSelectedIcon && slots.menuItemSelectedIcon());
  const removeIcon = props.removeIcon || (slots.removeIcon && slots.removeIcon());
  // Clear Icon
  let mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = <IconBytedCloseOne size={16} colors={['currentColor']} />;
  }

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = <Spin size="small" class={`${prefixCls}-spin`} />;
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open && showSearch) {
        return <IconBytedSearch size={16} colors={['currentColor']} class={iconCls} />;
      }
      return <IconBytedDown size={16} colors={['currentColor']} class={iconCls} />;
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <IconBytedCheck colors={['currentColor']} />;
  } else {
    mergedItemIcon = null;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    // NOTE 为测过
    mergedRemoveIcon = <IconBytedClose colors={['currentColor']} />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
