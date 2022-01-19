import type { PropType } from 'vue';

import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';

export const containerCollapseProps = {
  title: PropTypes.string.def(''),
  // Can it be expanded
  expanable: PropTypes.bool.def(true),
  // Warm reminder on the right side of the title
  helpMessage: {
    type: [Array, String] as PropType<string[] | string>,
    default: '',
  },
  value: PropTypes.bool,
  triggerWindowResize: PropTypes.bool,
  loading: PropTypes.bool,
  lazy: PropTypes.bool,
  lazyTime: PropTypes.number.def(0),
  titleLevel: PropTypes.number.def(5),
  prefixCls: PropTypes.string,
  mode: PropTypes.oneOf(tuple('simple', 'default')).def('default'),
  headerClassName: PropTypes.string,
  wrapClassName: PropTypes.string,
};
