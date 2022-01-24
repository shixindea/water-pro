import type { PropType, ExtractPropTypes } from 'vue';

import PropTypes from '../_util/vue-types';

export const containerLazyProps = {
  // Waiting time, if the time is specified, whether visible or not, it will be automatically loaded after the specified time
  timeout: PropTypes.number,

  // The viewport where the component is located. If the component is scrolling in the page container, the viewport is the container
  viewport: {
    type: (typeof window !== 'undefined' ? window.HTMLElement : Object) as PropType<HTMLElement>,
    default: () => null,
  },

  // Preload threshold, css unit
  threshold: PropTypes.string.def('0px'),

  // The scroll direction of the viewport, vertical represents the vertical direction, horizontal represents the horizontal direction
  direction: PropTypes.oneOf(['vertical', 'horizontal']).def('vertical'),

  // The label name of the outer container that wraps the component
  tag: PropTypes.string.def('div'),

  maxWaitingTime: PropTypes.number.def(80),

  // transition name
  transitionName: PropTypes.string.def('container-lazy'),
  prefixCls: PropTypes.string,
};
export type ContainerLazyProps = Partial<ExtractPropTypes<typeof containerLazyProps>>;
