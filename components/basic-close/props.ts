import PropTypes from '../_util/vue-types';

export const basicCloseProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.number.def(16),
  colors: PropTypes.stringArray.def(['#00000072']),
  hoverColors: PropTypes.stringArray.def(['#000000bf']),
};
