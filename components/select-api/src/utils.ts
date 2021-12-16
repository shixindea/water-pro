import type { FieldNames } from '../interface';

export function fillFieldNames(fieldNames?: FieldNames) {
  const { key, options, disabled, label, value } = fieldNames || {};

  return {
    label: label || 'label',
    disabled: disabled || 'disabled',
    key: key || 'key',
    value: value || 'value',
    options: options || 'options',
  };
}
