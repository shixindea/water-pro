import type { ExtractPropTypes, PropType } from 'vue';
import PropTypes from '../_util/vue-types';

export type BasicTitleClickEventHandler = (e: MouseEvent) => void;

export const basicTitleProps = {
  helpMessage: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
  span: PropTypes.bool,
  title: PropTypes.string,
  prefixCls: PropTypes.string,
  resetable: PropTypes.bool.def(true),
  onClick: [Function, Array] as PropType<BasicTitleClickEventHandler>,
};
export type BasicTitleProps = Partial<ExtractPropTypes<typeof basicTitleProps>>;
