import type { PropType, Component, ExtractPropTypes } from 'vue';
import type { Key } from '../_util/type';
import PropTypes from '../_util/vue-types';

export const virtualListProps = {
  prefixCls: PropTypes.string,
  data: PropTypes.array,
  height: PropTypes.number,
  itemHeight: PropTypes.number,
  /** If not match virtual scroll condition, Set List still use height of container. */
  fullHeight: PropTypes.looseBool,
  itemKey: {
    type: [String, Number, Function] as PropType<Key | ((item: Record<string, any>) => Key)>,
    required: true,
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
  },
  /** Set `false` will always use real scroll instead of virtual one */
  virtual: PropTypes.looseBool,
  children: PropTypes.func,
  onScroll: PropTypes.func,
  onMousedown: PropTypes.func,
  onMouseenter: PropTypes.func,
  onVisibleChange: Function as PropType<(visibleList: any[], fullList: any[]) => void>,
};
export type VirtualListProps = Partial<ExtractPropTypes<typeof virtualListProps>>;
