import type { PropType, ExtractPropTypes } from 'vue';
import type { ColorPickerLocale } from './interface';

export type ColorPickerSize = 'default' | 'small' | 'large';
export type ColorPickerMode = 'default' | 'simple';

export const colorPickerProps = {
  prefixCls: String,
  defaultValue: String, // 默认值
  config: Object as PropType<any>, // pickr配置
  value: String, // 颜色值
  colorRounded: Number, // 颜色数值保留几位小数
  size: {
    type: String as PropType<ColorPickerSize>,
    default: 'default',
  }, // 尺寸
  getPopupContainer: Function as PropType<(node: HTMLElement) => HTMLElement>, // 指定渲染容器
  disabled: { type: Boolean, default: false }, // 是否禁用
  format: String, // 颜色格式设置
  alpha: { type: Boolean, default: false }, // 是否开启透明通道
  hue: { type: Boolean, default: true }, // 是否开启色彩预选
  padding: { type: Number, default: 16 }, // 弹框间距
  mode: {
    type: String as PropType<ColorPickerMode>,
    default: 'default',
  }, // 模式
  predefine: {
    type: Array as PropType<string[]>,
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
export type ColorPickerProps = Partial<ExtractPropTypes<typeof colorPickerProps>>;
