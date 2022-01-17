import type { PropType, ExtractPropTypes } from 'vue';
import type { Recordable } from '../../_util/type';
import type { ModalUserLocale, ModalUserFieldNames } from '../interface';

import { clone } from '@fe6/shared';

import PropTypes from '../../_util/vue-types';
import { tuple } from '../../_util/type';
import type { EventDataNode } from '../../vc-tree/interface';
import { defaultFields } from './utils';

export function modalUserProps() {
  return {
    value: Array as PropType<any[]>,
    maxTagTextLength: PropTypes.number.def(8), // 文字 4 个字
    maxTagCount: PropTypes.number.def(2), // 标签 4 个字
    closable: PropTypes.bool.def(true),
    size: PropTypes.oneOf(tuple('small', 'large', 'default')),
    placeholder: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    type: PropTypes.oneOf(['select', '']).def('select'),
    prefixCls: PropTypes.string,
    modalTitle: PropTypes.string,
    modalRightTitle: PropTypes.string,
    titleRightRender: PropTypes.func,
    locale: { type: Object as PropType<ModalUserLocale> },
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
    apiParams: PropTypes.object.def({}),
    beforeOk: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: ({ success }: any) => {
        return new Promise((reslove) => {
          success();
          reslove(true);
        });
      },
    },
    // FEAT 4.0+
    beforeParams: PropTypes.object.def({}),
    options: PropTypes.array.def([]),
    disabled: PropTypes.bool,
    scrollName: PropTypes.string.def(''),
    modalProps: PropTypes.object.def({}),
    showAlias: PropTypes.bool.def(true),
    // FEAT 4.0+
    showRoleName: PropTypes.bool.def(true),
    // FEAT 4.0+
    showAvatar: PropTypes.bool.def(true),
    mode: PropTypes.oneOf(['checkbox', 'radio']).def('checkbox'),
    // FEAT 4.0+
    // 通过这个判断是用户数据
    userLabel: PropTypes.string.def('user'),
    // FEAT 4.0+
    // 通过这个判断是部门数据
    departmentLabel: PropTypes.string.def('department'),
    // FEAT 4.0+
    fieldNames: {
      type: Object as PropType<ModalUserFieldNames>,
      default: clone(defaultFields),
    },
    // FEAT 4.0+
    height: PropTypes.number.def(370),
    // FEAT 4.0+
    // 自动勾选重复的用户，根据 fieldNames.value 字段判断
    repeatableCheck: PropTypes.bool.def(true),
    // FEAT 4.0+
    loadApi: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
    // FEAT 4.0+
    loadApiParams: PropTypes.object.def({}),
    // FEAT 4.0+
    virtual: PropTypes.bool.def(true),
  };
}

export type ModalUserProps = Partial<ExtractPropTypes<ReturnType<typeof modalUserProps>>>;
