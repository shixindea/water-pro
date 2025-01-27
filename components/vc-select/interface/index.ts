import type { VNode, CSSProperties } from 'vue';
import type { VueNode } from '../../_util/type';
import type { Key, RawValueType } from './generator';

export type RenderDOMFunc = (props: any) => HTMLElement;

export type RenderNode = VueNode | ((props: any) => VueNode);

export type Mode = 'multiple' | 'tags' | 'combobox';

// ======================== Option ========================

export interface FieldNames {
  value?: string;
  label?: string;
  options?: string;
}

export type OnActiveValue = (
  active: RawValueType,
  index: number,
  info?: { source?: 'keyboard' | 'mouse' },
) => void;

export interface OptionCoreData {
  key?: Key;
  disabled?: boolean;
  value?: Key;
  title?: string;
  class?: string;
  style?: CSSProperties;
  label?: VueNode;
  /** @deprecated Only works when use `children` as option data */
  children?: VNode[] | JSX.Element[];
}

export interface OptionData extends OptionCoreData {
  /** Save for customize data */
  [prop: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface OptionGroupData {
  key?: Key;
  label?: VueNode;
  options: OptionData[];
  class?: string;
  style?: CSSProperties;

  /** Save for customize data */
  [prop: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type OptionsType = (OptionData | OptionGroupData)[];

export interface FlattenOptionData {
  group?: boolean;
  groupOption?: boolean;
  key: string | number;
  data: OptionData | OptionGroupData;
  label?: any;
  value?: RawValueType;
}
