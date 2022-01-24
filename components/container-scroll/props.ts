import type { ExtractPropTypes } from 'vue';

import PropTypes from '../_util/vue-types';

export const containerScrollProps = {
  prefixCls: PropTypes.string,
  showHorizontal: PropTypes.bool.def(false),
};
export type ContainerScrollProps = Partial<ExtractPropTypes<typeof containerScrollProps>>;
