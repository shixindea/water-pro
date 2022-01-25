import type { ExtractPropTypes, PropType } from 'vue';
import PropTypes from '../_util/vue-types';

export type BasicClearClickEventHandler = (e: MouseEvent) => void;

export const basicClearProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.number.def(16),
  colors: PropTypes.stringArray.def(['#00000040']),
  hoverColors: PropTypes.stringArray.def(['#00000073']),
  onClick: [Function, Array] as PropType<BasicClearClickEventHandler>,
};
export type BasicClearProps = Partial<ExtractPropTypes<typeof basicClearProps>>;
