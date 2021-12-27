/** @format */

import type { FieldMapToTime, FormProSchema } from './types/form';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TableActionType } from '../../table-pro';
import type { ButtonProps } from '../../button/buttonTypes';
import type { Recordable, Fn } from '../../_util/type';
import type { FormProLocale } from '../interface';
import type { RowProps } from '../../row';
import type { ColProps } from '../../col';

import { hasOwn } from '@vue/shared';
import { isArray } from 'lodash';
import PropTypes from '../../_util/vue-types';

export const formProProps = () => ({
  model: {
    type: Object as PropType<Recordable>,
    default: {},
  },
  // 标签宽度  固定宽度
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
  },
  fieldMapToTime: {
    type: Array as PropType<FieldMapToTime>,
    default: () => [],
  },
  actionAffix: PropTypes.looseBool,
  actionTarget: PropTypes.func,
  actionOffsetBottom: PropTypes.number.def(0),
  actionAlgin: PropTypes.oneOf(['left', 'right', 'center', 'space-between']).def('left'),
  // NOTE 4.0  废弃
  // compact: PropTypes.bool,
  resetClearValidate: PropTypes.bool.def(true),
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormProSchema[]>,
    default: () => [],
    // required: true,
  },
  mergeDynamicData: {
    type: Object as PropType<Recordable>,
    default: null,
  },
  // NOTE 4.0  废弃
  // baseRowStyle: {
  //   type: Object as PropType<CSSProperties>,
  // },
  // NOTE 4.0  废弃
  // baseColProps: {
  //   type: Object as PropType<Partial<ColProps>>,
  // },
  // 水平排列的间距
  baseGutter: PropTypes.number.def(0),
  autoSetPlaceHolder: PropTypes.bool.def(true),
  submitOnReset: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small', 'large']).def('default'),
  // 禁用表单
  disabled: PropTypes.bool,
  emptySpan: {
    type: [Number, Object] as PropType<number | Partial<ColProps>>,
    default: 0,
  },
  // 是否显示收起展开按钮
  showAdvancedButton: PropTypes.bool,
  // FEAT 4.0+
  advancedAll: PropTypes.bool,
  // 转化时间
  transformDateFunc: {
    type: Function as PropType<Fn>,
    default: (date: any, schemaItem: FormProSchema) => {
      let format =
        schemaItem &&
        (schemaItem.component === 'TimePicker' || schemaItem.component === 'TimeRangePicker')
          ? 'HH:mm:ss'
          : 'YYYY-MM-DD HH:mm:ss';
      if (
        schemaItem &&
        hasOwn(schemaItem, 'componentProps') &&
        hasOwn(schemaItem.componentProps, 'format')
      ) {
        format = (schemaItem.componentProps as any).format;
        if (isArray(format)) {
          format = format[0];
        }
      }
      return date._isAMomentObject ? date?.format(format) : date;
    },
  },
  rulesMessageJoinLabel: PropTypes.bool.def(true),
  // 超过3行自动折叠
  // NOTE 4.0  废弃
  // autoAdvancedLine: PropTypes.number.def(3),

  // 是否显示操作按钮
  showActionButtonGroup: PropTypes.bool.def(true),
  // 操作列Col配置
  actionColOptions: {
    type: Object as PropType<Partial<ColProps>>,
    default: () =>
      ({
        span: 22,
        push: 2,
      } as ColProps),
  },
  // 显示重置按钮
  showResetButton: PropTypes.bool.def(true),
  // 是否聚焦第一个输入框，只在第一个表单项为input的时候作用
  autoFocusFirstItem: PropTypes.bool,
  // 重置按钮配置
  resetButtonOptions: Object as PropType<Partial<ButtonProps>>,

  // 显示确认按钮
  showSubmitButton: PropTypes.bool.def(true),
  // 确认按钮配置
  submitButtonOptions: Object as PropType<Partial<ButtonProps>>,

  // 自定义重置函数
  resetFunc: Function as PropType<() => Promise<void>>,
  submitFunc: Function as PropType<() => Promise<void>>,

  // 以下为默认props
  hideRequiredMark: PropTypes.bool,

  labelCol: {
    type: Object as PropType<Partial<ColProps>>,
    default: () => ({ span: 2 } as ColProps),
  },
  // FEAT 4.0+
  inlineCol: {
    type: Object as PropType<Partial<ColProps>>,
    default: () => ({ span: 8 } as ColProps),
  },
  // FEAT 4.0+
  inlineRow: {
    type: Object as PropType<Partial<RowProps>>,
    default: () => ({ gutter: [16, 16] } as RowProps),
  },

  // FEAT 4.0+
  inlineActionCol: {
    type: Object as PropType<Partial<ColProps>>,
    default: () => ({ span: 8 } as ColProps),
  },

  // NOTE 4.0  废弃
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']).def('horizontal'),
  tableAction: {
    type: Object as PropType<TableActionType>,
  },

  wrapperCol: {
    type: Object as PropType<Partial<ColProps>>,
    default: () => ({ span: 22 } as ColProps),
  },

  colon: PropTypes.bool.def(true),

  labelAlign: PropTypes.string,
  prefixCls: PropTypes.string,
  navAffix: PropTypes.looseBool,
  navTarget: PropTypes.func,
  navOffsetTop: PropTypes.number.def(0),
  locale: { type: Object as PropType<FormProLocale> },
});
export type FormProProps = Partial<ExtractPropTypes<ReturnType<typeof formProProps>>>;
