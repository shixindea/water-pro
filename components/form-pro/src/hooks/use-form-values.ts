/** @format */

import type { Ref, ComputedRef } from 'vue';
import type { Recordable } from '../../../_util/type';
import type { FormProProps } from '../props';
import type { FormProSchema } from '../types/form';

import { unref } from 'vue';
import { isArray, isFunction, isPlainObject, isString, isUndefined, isNull } from '@fe6/shared';

interface UseFormValuesContext {
  defaultValueRef: Ref<any>;
  getSchema: ComputedRef<FormProSchema[]>;
  formModel: Recordable;
  getProps: ComputedRef<FormProProps>;
}
export function useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps,
}: UseFormValuesContext) {
  // Processing form values
  function handleFormValues(values: Recordable) {
    if (!isPlainObject(values)) {
      return {};
    }
    const { transformDateFunc } = unref(getProps);
    const res: Recordable = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key] = item;
      if ((isArray(value) && value.length === 0) || isFunction(value)) {
        continue;
      }
      const schemaItem = getSchema.value.find((gsItem: any) => gsItem.field === key);
      if (isPlainObject(value)) {
        value = transformDateFunc(value, schemaItem);
      }
      if (isArray(value)) {
        value = value.map((item: any) => transformDateFunc(item, schemaItem));
      }
      // Remove spaces
      if (isString(value)) {
        value = value.trim();
      }
      res[key] = value;
    }
    return handleRangeTimeValue(res);
  }

  /**
   * @description: Processing time interval parameters
   */
  function handleRangeTimeValue(values: Recordable) {
    const { fieldMapToTime } = unref(getProps);
    if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
      return values;
    }
    for (const [field, [startTimeKey, endTimeKey]] of fieldMapToTime) {
      if (!field || !startTimeKey || !endTimeKey || !values[field]) {
        continue;
      }

      const [startTime, endTime]: string[] = values[field];
      values[startTimeKey] = startTime;
      values[endTimeKey] = endTime;
      Reflect.deleteProperty(values, field);
    }

    return values;
  }

  function initDefault() {
    const schemas = unref(getSchema);
    const obj: Recordable = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!isUndefined(defaultValue) && !isNull(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }

  return { handleFormValues, initDefault };
}
