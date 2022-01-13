import type { AntTreeNodeProps } from '../Tree';

import { cloneVNode } from 'vue';
import {
  IconAntdFile,
  IconAntdPlusSquare,
  IconAntdMinusSquare,
  IconAntdCaretDown,
} from '@fe6/icon-vue';

import { isValidElement } from '../../_util/props-util';
import Spin from '../../spin';

export default function renderSwitcherIcon(
  prefixCls: string,
  switcherIcon: any,
  showLine: boolean | { showLeafIcon: boolean } | undefined,
  props: AntTreeNodeProps,
) {
  const { isLeaf, expanded, loading } = props;
  let icon = switcherIcon;
  if (loading) {
    return <Spin class={`${prefixCls}-switcher-loading-icon`} size="mini" />;
  }
  let showLeafIcon: boolean;
  if (showLine && typeof showLine === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }
  let defaultIcon = null;
  const switcherCls = `${prefixCls}-switcher-icon`;
  if (isLeaf) {
    if (showLine) {
      if (typeof showLine === 'object' && !showLeafIcon) {
        defaultIcon = <span class={`${prefixCls}-switcher-leaf-line`} />;
      } else {
        defaultIcon = (
          <IconAntdFile colors={['currentColor']} class={`${prefixCls}-switcher-line-icon`} />
        );
      }
    }
    return defaultIcon;
  } else {
    defaultIcon = <IconAntdCaretDown size={7} colors={['currentColor']} class={switcherCls} />;
    if (showLine) {
      defaultIcon = expanded ? (
        <IconAntdMinusSquare
          size={12}
          colors={['currentColor']}
          class={`${prefixCls}-switcher-line-icon`}
        />
      ) : (
        <IconAntdPlusSquare
          size={12}
          colors={['currentColor']}
          class={`${prefixCls}-switcher-line-icon`}
        />
      );
    }
  }

  if (typeof switcherIcon === 'function') {
    icon = switcherIcon({ ...props, defaultIcon, switcherCls });
  } else if (isValidElement(icon)) {
    icon = cloneVNode(icon, {
      class: switcherCls,
    });
  }

  return icon || defaultIcon;
}
