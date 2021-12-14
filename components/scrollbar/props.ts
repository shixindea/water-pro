import PropTypes from '../_util/vue-types';

export const scrollBarProps = {
  native: {
    type: Boolean,
    default: false,
  },
  wrapStyle: {
    type: [String, Array],
    default: '',
  },
  wrapClass: {
    type: [String, Array],
    default: '',
  },
  viewClass: {
    type: [String, Array],
    default: '',
  },
  viewStyle: {
    type: [String, Array],
    default: '',
  },
  showHorizontal: Boolean,
  prefixCls: PropTypes.string,
};
