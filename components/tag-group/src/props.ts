import type { PropType, ExtractPropTypes } from 'vue';
import type { TagGroupLocale } from '../interface';

import PropTypes from '../../_util/vue-types';

import type { TagOptionItem } from './types';

export const tagGroupProps = {
  value: {
    type: Array as PropType<TagOptionItem[]>,
    default: () => [],
  },
  maxTagTextLength: PropTypes.number.def(4), // 文字 4 个字
  maxTagCount: PropTypes.number.def(4), // 标签 4 个
  closable: PropTypes.bool.def(false),
  createPlaceholder: PropTypes.string,
  createable: PropTypes.bool,
  createInputable: PropTypes.bool.def(true),
  createLoading: PropTypes.bool,
  removeLoading: PropTypes.bool,
  closeEmitAble: PropTypes.bool.def(true),
  nameLabel: PropTypes.string.def('name'),
  color: PropTypes.string.def('blue'),
  prefixCls: PropTypes.string,
  tagStyle: PropTypes.style,
  className: PropTypes.any,
  showSelected: PropTypes.bool.def(true),
  createBordered: PropTypes.bool.def(true),
  createIcon: PropTypes.bool.def(true),
  disabled: PropTypes.bool,
  locale: { type: Object as PropType<TagGroupLocale> },
};
export type TagGroupProps = Partial<ExtractPropTypes<typeof tagGroupProps>>;
