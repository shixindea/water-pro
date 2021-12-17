import type { PropType } from 'vue';
import type { ColorPickerLocale } from './interface';

import PropTypes from '../_util/vue-types';

export const colorPickerProps = {
  prefixCls: PropTypes.string,
  defaultValue: PropTypes.string, // 默认值
  config: PropTypes.object, // pickr配置
  value: PropTypes.string, // 颜色值
  colorRounded: PropTypes.number, // 颜色数值保留几位小数
  size: PropTypes.oneOf(['default', 'small', 'large']).def('default'), // 尺寸
  getPopupContainer: PropTypes.func, // 指定渲染容器
  disabled: PropTypes.looseBool.def(false), // 是否禁用
  format: PropTypes.string, // 颜色格式设置
  alpha: PropTypes.looseBool.def(false), // 是否开启透明通道
  hue: PropTypes.looseBool.def(true), // 是否开启色彩预选
  padding: PropTypes.number.def(16), // 弹框间距
  mode: PropTypes.oneOf(['default', 'simple']).def('default'), // 尺寸
  predefine: {
    type: Array,
    default: () => [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 1)',
      'rgba(156, 39, 176, 1)',
      'rgba(103, 58, 183, 1)',
      'rgba(63, 81, 181, 1)',
      'rgb(255, 120, 0)',
      '#c71585',
      'rgba(0, 188, 212, 1)',
      'rgba(0, 150, 136, 1)',
      'rgba(76, 175, 80, 1)',
      'rgba(139, 195, 74, 1)',
      'rgba(205, 220, 57, 1)',
      'rgba(255, 235, 59, 1)',
      'rgba(255, 193, 7, 1)',
    ],
  },
  locale: { type: Object as PropType<ColorPickerLocale> },
};
