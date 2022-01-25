import type { ExtractPropTypes, PropType } from 'vue';
import PropTypes from '../_util/vue-types';

export type BasicCloseClickEventHandler = (e: MouseEvent) => void;

export const basicCloseProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.number.def(16),
  colors: PropTypes.stringArray.def(['#00000072']),
  hoverColors: PropTypes.stringArray.def(['#000000bf']),
  onClick: [Function, Array] as PropType<BasicCloseClickEventHandler>,
};
export type BasicCloseProps = Partial<ExtractPropTypes<typeof basicCloseProps>>;
