/** @format */

import type { VNode, RendererNode, RendererElement, ComputedRef, CSSProperties } from 'vue';
import type { Options } from 'scroll-into-view-if-needed';
import type { NamePath, RuleObject } from '../../../form/interface';
import type { ButtonProps as AntdButtonProps } from '../../../button/buttonTypes';
import type { Recordable } from '../../../_util/type';
import type { FormProProps } from '../props';
import type { ColProps } from '../../../col';

import type { ComponentType } from './index';
import type { TableActionType } from '../../../table-pro/src/types/table';
import type { SizeType } from '../../../config-provider';

export type FieldMapToTime = [string, [string, string], string?][];

export type Rule = RuleObject & {
  trigger?: 'blur' | 'change' | ['change', 'blur'];
};

export interface RenderCallbackParams {
  schema: FormProSchema;
  values: Recordable;
  model: Recordable;
  field: string;
}

export interface FormProComponentPropsParams {
  schema: FormProSchema;
  tableAction: TableActionType;
  formActionType: FormActionType;
  formModel: Recordable;
}

export interface ButtonProps extends AntdButtonProps {
  text?: string;
}

export interface FormActionType {
  submit: () => Promise<void>;
  setFieldsValue: <T>(values: T) => Promise<void>;
  resetFields: (emitReset?: boolean, triggerSubmit?: boolean) => Promise<void>;
  getFieldsValue: (filterHidden?: boolean) => Recordable;
  getChildrenFieldsValue: (filterHidden?: boolean) => Recordable;
  resetAllModel: () => Promise<void>;
  clearValidate: (name?: string | string[]) => Promise<void>;
  updateSchema: any;
  setProps: (formProps: FormProProps) => Promise<void>;
  removeSchemaByFiled: (field: string | string[]) => Promise<void>;
  appendSchemaByField: (
    schema: FormProSchema,
    prefixField: string | undefined,
    first?: boolean | undefined,
  ) => Promise<void>;
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
  scrollToField: (name: NamePath, options?: ScrollOptions | Options) => Promise<void>;
  // 将错误元素滚动到屏幕中心 4.20.0+
  scrollToCenterField: () => void;
}

export type FormRegisterFn = (formInstance: FormActionType) => void;

export type UseFormReturnType = [FormRegisterFn, FormActionType];

export interface FormSchema {
  // Field name
  field: string;
  // 内部值更改触发的事件名称，默认更改
  changeEvent?: string;
  // 绑定到 v-model 默认值的变量名
  valueField?: string;
  // 组件的 slot 设置
  componentSlots?: object;
  // Label 名字
  label?: string | ((renderCallbackParams: ComputedRef<RenderCallbackParams>) => string);
  // 分组
  children?: FormSchema[];
  // 子 Label 名字
  subLabel?: string;
  // 在 Label 边上的提示
  helpMessage?: string | string[];
  // BaseHelp 组件的 props
  helpComponentProps?: Partial<HelpComponentProps>;
  // Label 宽度的简单设置
  labelWidth?: string | number;
  // Disable the adjustment of labelWidth with global settings of formModel, and manually set labelCol and wrapperCol by yourself
  disabledLabelWidth?: boolean;
  // 组件名字
  component?: ComponentType;
  // 组件的 props
  componentProps?: ((opt: FormProComponentPropsParams) => Recordable) | object;
  // 是否不填
  required?: boolean;
  // 是否展示必填小星星，如果为 false ，不管规则中是否有 required 字段，也不自动生成 required ，一律不显示红色小星星 4.20.0+
  requireShow?: boolean;
  // 单独定制 label
  labelCol?: ColProps;
  // 单独定制 wrapper
  wrapperCol?: ColProps;
  // 整体设置大小，包括 label 的大小和组件的大小
  size?: SizeType;
  // 控制表单格式
  valueLayout?: (attr: unknown, field: string, props: any, params: any) => void;

  // 自定义后缀
  suffix?:
    | string
    | number
    | ((values: ComputedRef<RenderCallbackParams>) => string | number)
    | (() => VNode<RendererNode, RendererElement, { [key: string]: any }>);
  // 自定义尾部
  end?:
    | string
    | number
    | ((values: ComputedRef<RenderCallbackParams>) => string | number)
    | (() => VNode<RendererNode, RendererElement, { [key: string]: any }>);

  // 右边内容的宽度
  wrapperWidth?: string;
  // FEAT 4.0+
  suffixStyle?: CSSProperties | ((values: ComputedRef<RenderCallbackParams>) => CSSProperties);
  // FEAT 4.0+
  endStyle?: CSSProperties | ((values: ComputedRef<RenderCallbackParams>) => CSSProperties);
  // Validation rules
  rules?: Rule[];
  // Check whether the information is added to the label
  rulesMessageJoinLabel?: boolean;

  // 4.0 废弃，请使用
  // itemProps?: Partial<FormProItem>; FormPro.props.labelCol 和 FormPro.props.wrapperCol 代替

  // col configuration outside formModelItem
  // 4.0 废弃，因为 底部操作 form action 对不齐问题
  // colProps?: Partial<ColProps>;

  // FEAT 4.0+
  inlineCol?: Partial<ColProps>;

  // 默认值
  defaultValue?: any;
  isAdvanced?: boolean;

  // Matching details components
  span?: number;

  ifShow?: boolean | ((renderCallbackParams: ComputedRef<RenderCallbackParams>) => boolean);

  // NOTE 4.0 废弃
  // show?: boolean | ((renderCallbackParams: ComputedRef<RenderCallbackParams>) => boolean);

  // Render the content in the form-item tag
  render?: (renderCallbackParams: ComputedRef<RenderCallbackParams>) => VNode | VNode[] | string;

  // Rendering col content requires outer wrapper form-item
  renderColContent?: (
    renderCallbackParams: ComputedRef<RenderCallbackParams>,
  ) => VNode | VNode[] | string | JSX.Element;

  // NOTE 4.0 废弃
  // renderComponentContent?:
  //   | ((renderCallbackParams: ComputedRef<RenderCallbackParams>) => VNode)
  //   | VNode
  //   | VNode[]
  //   | string;

  // Custom slot, in from-item
  slot?: string;

  // Custom slot, similar to renderColContent
  colSlot?: string;

  dynamicDisabled?:
    | boolean
    | ((renderCallbackParams: ComputedRef<RenderCallbackParams>) => boolean);

  dynamicRules?: (renderCallbackParams: ComputedRef<RenderCallbackParams>) => Rule[];
}
export interface HelpComponentProps {
  maxWidth?: string;
  // Whether to display the serial number
  showIndex?: boolean;
  // Text list
  text?: any;
  // colour
  color?: string;
  // font size
  fontSize?: string;
  icon?: string;
  absolute?: boolean;
  // Positioning
  position?: any;
  placement?: string;
}

export interface FormProSchema extends FormSchema {
  layout?: string;
}
