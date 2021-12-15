import type { PropType } from 'vue';
import type { Recordable } from '../../_util/type';
import type { TagModalListLocale } from '../interface';

import { tuple } from '../../_util/type';
import PropTypes from '../../_util/vue-types';

export const tagModalListProps = {
  value: Array as PropType<any[]>,
  maxTagTextLength: PropTypes.number.def(4), // 文字 4 个字
  maxTagCount: PropTypes.number.def(2), // 标签 4 个字
  createable: PropTypes.bool,
  closable: PropTypes.bool.def(true),
  size: PropTypes.oneOf(tuple('small', 'large', 'default')),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['select', '']).def(''),
  prefixCls: PropTypes.string,
  modalTitle: PropTypes.string,
  createPlaceholder: PropTypes.string,
  nameLabel: PropTypes.string.def('name'),
  valueLabel: PropTypes.string.def('id'),
  childrenLabel: PropTypes.string.def('children'),
  checkMode: PropTypes.oneOf(tuple('radio', 'checkbox')).def('checkbox'),
  maxCheckCount: PropTypes.number,
  api: {
    type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
    default: null,
  },
  apiParams: PropTypes.object.def({}),
  beforeClose: {
    type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
    default: () => {
      return new Promise((reslove) => {
        reslove(true);
      });
    },
  },
  beforeOk: {
    type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
    default: ({ success }: any) => {
      return new Promise((reslove) => {
        success();
        reslove(true);
      });
    },
  },
  titleRightRender: PropTypes.func,
  options: PropTypes.array.def([]),
  showSelected: PropTypes.bool.def(true),
  createIcon: PropTypes.bool.def(true),
  createBordered: PropTypes.bool.def(true),
  disabled: PropTypes.bool,
  locale: { type: Object as PropType<TagModalListLocale> },
};
