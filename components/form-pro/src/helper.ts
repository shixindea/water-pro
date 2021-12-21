/** @format */

import type { ValidationRule } from '../../form/Form';
import type { ComponentType } from './types/index';
import type { FormProLocale } from '../interface';

import { isNumber } from '@fe6/shared';

import zhCn from '../locale/zh_CN';

const inputText = '请输入';
const chooseText = '请选择';

/**
 * @description: 生成placeholder
 *  4.0.0 删除
 */
export function createPlaceholderMessage(component: ComponentType, locale: FormProLocale = zhCn) {
  if (component.includes('Input') || component.includes('Complete')) {
    return locale?.inputPlaceholder || inputText;
  }
  if (component.includes('Picker')) {
    return locale?.selectPlaceholder || chooseText;
  }
  if (
    component.includes('Select') ||
    component.includes('Cascader') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    // return `请选择${label}`;
    return locale?.selectPlaceholder || chooseText;
  }
  return '';
}

function genType() {
  return [
    'DatePicker',
    'MonthPicker',
    'RangePicker',
    'RangeGroupPicker',
    'WeekPicker',
    'TimePicker',
    'TimeRangePicker',
  ];
}

export function setComponentRuleType(rule: ValidationRule, component: ComponentType) {
  if (['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'].includes(component)) {
    rule.type = 'object';
  } else if (
    [
      'RangePicker',
      'RangeGroupPicker',
      'TimeRangePicker',
      'Upload',
      'CheckboxGroup',
      'TimePicker',
    ].includes(component)
  ) {
    rule.type = 'array';
  } else if (['InputNumber'].includes(component)) {
    rule.type = 'number';
  }
}

export function handleInputNumberValue(component?: ComponentType, val?: any) {
  if (!component) {
    return val || '';
  }
  if (['Input', 'InputPassword', 'InputSearch', 'InputTextArea'].includes(component)) {
    return val && isNumber(val) ? `${val}` : val;
  }
  return val;
}

/**
 * 时间字段
 */
export const dateItemType = genType();
