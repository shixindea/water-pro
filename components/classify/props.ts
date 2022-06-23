import type { ExtractPropTypes, PropType } from 'vue';
import type { BasicColumn } from '../table-pro';
import type { ClassifyLocale } from './interface';
import PropTypes from '../_util/vue-types';

export const classifyProps = {
  value: PropTypes.any,
  api: {
    type: Function as PropType<(arg?: any) => Promise<any[]>>,
    default: null,
  },
  apiParams: PropTypes.object.def({}),
  loopGetOptions: PropTypes.bool,
  filterOption: {
    type: Function,
    default: (inputValue: string, option: any) => {
      return option.label.includes(inputValue);
    },
  },
  removeApi: {
    type: Function as PropType<(arg?: any) => Promise<any[]>>,
    default: null,
  },
  removeApiParams: PropTypes.object.def({}),
  removeTip: PropTypes.string,
  removeKey: PropTypes.string.def('id'), // 删除的默认唯一索引，用于loading
  editApi: {
    type: Function as PropType<(arg?: any) => Promise<any[]>>,
    default: null,
  },
  editApiParams: PropTypes.object.def({}),
  createFormConfig: PropTypes.object.def({}),
  createApi: {
    type: Function as PropType<(arg?: any) => Promise<any[]>>,
    default: null,
  },
  showDropdownAdd: PropTypes.bool.def(true),
  showDropdownManger: PropTypes.bool.def(true),
  createApiParams: PropTypes.object.def({}),
  createTitle: PropTypes.string,
  editTitle: PropTypes.string,
  drawerTitle: PropTypes.string,
  drawerWidth: PropTypes.number.def(650),
  drawerZIndex: PropTypes.number.def(1000),
  drawerCreateButtonText: PropTypes.string,
  drawerTableApi: {
    type: Function as PropType<(arg?: any) => Promise<any[]>>,
    default: null,
  },
  drawerTableApiParams: PropTypes.object.def({}),
  drawerTableColumns: {
    type: [Array] as PropType<BasicColumn[]>,
    default: () => [],
  },
  drawerTableDraggable: PropTypes.bool.def(false),
  drawerTableDragKey: PropTypes.string.def('id'), // 会返回所有排好序的 id 值的数组
  drawerTableDragApi: {
    type: Function as PropType<(arg?: any) => Promise<any[]>>,
    default: null,
  },
  selectOptions: PropTypes.array,
  labelKey: PropTypes.string.def('label'),
  subLabelKey: PropTypes.string.def('subLabel'),
  valueKey: PropTypes.string.def('value'),
  locale: { type: Object as PropType<ClassifyLocale> },
  drawerTableEditDisabled: {
    type: Function,
    default: () => {
      return false;
    },
  },
  drawerTableRemoveDisabled: {
    type: Function,
    default: () => {
      return false;
    },
  },
};
export type ClassifyProps = Partial<ExtractPropTypes<typeof classifyProps>>;
