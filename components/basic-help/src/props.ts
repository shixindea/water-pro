import type { PropType } from 'vue';
import PropTypes from '../../_util/vue-types';

export const basicHelpProps = {
  // max-width
  maxWidth: PropTypes.string.def('400px'),
  // Whether to display the serial number
  showIndex: PropTypes.bool,
  // color
  color: PropTypes.string.def('#ffffff'),
  fontSize: PropTypes.string.def('14px'),
  placement: PropTypes.string.def('bottom'),
  prefixCls: PropTypes.string,
  absolute: PropTypes.bool,
  // Text list
  text: PropTypes.stringArray,
  // 定位
  position: {
    type: [Object] as PropType<any>,
    default: () => ({
      position: 'absolute',
      left: 0,
      bottom: 0,
    }),
  },
};
