/** @format */

import type { Ref, ComputedRef } from 'vue';
import type { Options } from 'scroll-into-view-if-needed';
import type { FormProSchema, FormActionType } from '../types/form';
import type { NamePath } from '../../../form/interface';
import type { Recordable, EmitType, Fn } from '../../../_util/type';
import type { FormProProps } from '../props';

import { unref, toRaw, ref, nextTick } from 'vue';
import { cloneDeep, uniqBy } from 'lodash-es';
import {
  isArray,
  isBoolean,
  isFunction,
  isPlainObject,
  isString,
  deepMerge,
  hasOwn,
} from '@fe6/shared';

import warning from '../../../_util/warning';
import { handleInputNumberValue } from '../helper';

interface UseFormActionContext {
  emit: EmitType;
  getProps: ComputedRef<FormProProps>;
  getSchema: ComputedRef<FormProSchema[]>;
  formModel: Recordable;
  defaultValueRef: Ref<Recordable>;
  formElRef: Ref<FormActionType>;
  schemaRef: Ref<FormProSchema[] | Partial<FormProSchema>[]>;
  getOriginSchema: Ref<FormProSchema[] | Partial<FormProSchema>[]>;
  handleFormValues: Fn;
}
export function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  defaultValueRef,
  formElRef,
  schemaRef,
  getOriginSchema,
  handleFormValues,
}: UseFormActionContext) {
  async function resetFields(emitReset = true, triggerSubmit = true): Promise<void> {
    const { resetFunc, resetOnSubmit } = unref(getProps);
    resetFunc && isFunction(resetFunc) && (await resetFunc());
    const formEl = unref(formElRef);
    if (!formEl) {
      return;
    }

    Object.keys(formModel).forEach((key) => {
      formModel[key] = defaultValueRef.value[key];
    });
    clearValidate();
    if (emitReset) {
      emit('reset', toRaw(formModel));
    }
    triggerSubmit && resetOnSubmit && handleSubmit(false);
  }

  /**
   * @description: Set form value
   */
  async function setFieldsValue(values: Recordable): Promise<void> {
    const fields = unref(getSchema)
      .map((item) => item.field)
      .filter(Boolean);

    const validKeys: string[] = [];
    Object.keys(values).forEach((key) => {
      const schema = unref(getSchema).find((item) => item.field === key);

      let value = values[key];

      const hasKey = Reflect.has(values, key);
      // Fix 没设置成功
      formModel[key] = value;
      value = handleInputNumberValue(schema?.component, value);
      // 0| '' is allow
      if (hasKey && fields.includes(key)) {
        validKeys.push(key);
      }
    });
    // Fix 执行了多次校验字段
    // validateFields(validKeys);
  }
  /**
   * @description: Delete based on field name
   */
  async function removeSchemaByFiled(fields: string | string[]): Promise<void> {
    const schemaList: FormProSchema[] = cloneDeep(unref(getSchema));
    if (!fields) {
      return;
    }

    let fieldList: string[] = isString(fields) ? [fields as string] : (fields as string[]);
    if (isString(fields)) {
      fieldList = [fields as string];
    }
    for (const field of fieldList) {
      _removeSchemaByFiled(field, schemaList);
    }
    schemaRef.value = schemaList;
  }

  /**
   * @description: Delete based on field name
   */
  function _removeSchemaByFiled(field: string, schemaList: FormProSchema[]): void {
    if (isString(field)) {
      const index = schemaList.findIndex((schema) => schema.field === field);
      if (index !== -1) {
        schemaList.splice(index, 1);
      }
    }
  }

  /**
   * @description: Insert after a certain field, if not insert the last
   */
  async function appendSchemaByField(schema: FormProSchema, prefixField?: string, first = false) {
    const schemaList: FormProSchema[] = cloneDeep(unref(getSchema));

    const index = schemaList.findIndex((schema) => schema.field === prefixField);
    const hasInList = schemaList.some((item) => item.field === prefixField || schema.field);

    if (!hasInList) {
      return;
    }

    if (!prefixField || index === -1 || first) {
      first ? schemaList.unshift(schema) : schemaList.push(schema);
      schemaRef.value = schemaList;
      return;
    }
    if (index !== -1) {
      schemaList.splice(index + 1, 0, schema);
    }
    schemaRef.value = schemaList;
  }

  async function updateSchema(
    data: Partial<FormProSchema> | Partial<FormProSchema>[],
    replace = false,
  ) {
    let updateData: Partial<FormProSchema>[] = [];
    if (isPlainObject(data)) {
      updateData.push(data as FormProSchema);
    }
    if (isArray(data)) {
      updateData = [...(data as Partial<FormProSchema>[])];
    }

    const hasField = updateData.every((item) => Reflect.has(item, 'field') && item.field);

    if (!hasField) {
      warning(
        'All children of the form Schema array that need to be updated must contain the `field` field',
      );
      return;
    }
    let schema: FormProSchema[] | Partial<FormProSchema>[] = [];
    const oldSchema = unref(getSchema);
    updateData.forEach((item) => {
      if (oldSchema.length) {
        if (replace) {
          schema = updateData.slice();
        } else {
          oldSchema.forEach((val) => {
            if (val.field === item.field) {
              const newSchema = deepMerge(val, item);
              schema.push(newSchema as FormProSchema);
            } else {
              schema.push(val);
            }
          });
        }
      } else {
        schema = updateData.slice();
      }
    });
    schemaRef.value = uniqBy(schema, 'field');
  }

  function getShow(schema): { isShow: boolean; isIfShow: boolean } {
    const { show, ifShow } = schema;
    const { showAdvancedButton, mergeDynamicData } = unref(getProps);
    const itemIsAdvanced = showAdvancedButton
      ? isBoolean(schema.isAdvanced)
        ? schema.isAdvanced
        : true
      : true;
    const values = {
      ...mergeDynamicData,
      ...(unref(defaultValueRef) as any),
      ...(unref(formModel) as any),
      ...handleFormValues(toRaw(unref(formModel))),
    } as Recordable;
    const getValues = ref({
      field: schema.field,
      model: formModel,
      values,
      schema,
    });

    let isShow = true;
    let isIfShow = true;

    if (isBoolean(show)) {
      isShow = show as boolean;
    }
    if (isBoolean(ifShow)) {
      isIfShow = ifShow as boolean;
    }
    if (isFunction(show)) {
      isShow = (show as Function)(getValues);
    }
    if (isFunction(ifShow)) {
      isIfShow = (ifShow as Function)(getValues);
    }
    isShow = (isShow && itemIsAdvanced) as boolean;
    return { isShow, isIfShow };
  }

  function getFieldsValue(filterHidden?: boolean): Recordable {
    const formEl = unref(formElRef);
    if (!formEl) {
      return {};
    }
    const myValue = handleFormValues(toRaw(unref(formModel)));

    if (filterHidden) {
      const myNewValue = {};
      getOriginSchema.value.forEach((pItem: any) => {
        const { isIfShow: isParentIfShow } = getShow(pItem);
        if (isParentIfShow && hasOwn(myValue, pItem.field)) {
          myNewValue[pItem.field] = myValue[pItem.field];
        }

        if (hasOwn(pItem, 'children')) {
          pItem.children.forEach((cItem: any) => {
            const { isIfShow: isChildIfShow } = getShow(cItem);
            if (isChildIfShow && isParentIfShow && hasOwn(myValue, cItem.field)) {
              myNewValue[cItem.field] = myValue[cItem.field];
            }
          });
        }
      });
      return myNewValue;
    }
    return myValue;
  }

  function getChildrenFieldsValue(filterHidden?: boolean) {
    const formEl = unref(formElRef);
    if (!formEl) {
      return {};
    }
    const myValue = handleFormValues(toRaw(unref(formModel)));
    const myNewValue = {};
    getOriginSchema.value.forEach((pItem: any) => {
      const { isIfShow: isParentIfShow } = getShow(pItem);
      if ((!filterHidden || isParentIfShow) && hasOwn(myValue, pItem.field)) {
        myNewValue[pItem.field] = myValue[pItem.field];
      }

      if (hasOwn(pItem, 'children')) {
        pItem.children.forEach((cItem: any) => {
          const { isIfShow: isChildIfShow } = getShow(cItem);
          if (
            (!filterHidden || (isChildIfShow && isParentIfShow)) &&
            hasOwn(myValue, cItem.field)
          ) {
            if (!hasOwn(myNewValue, pItem.field)) {
              myNewValue[pItem.field] = {};
            }
            myNewValue[pItem.field][cItem.field] = myValue[cItem.field];
          }
        });
      }
    });
    return myNewValue;
  }

  async function validateFields(nameList?: NamePath[] | undefined) {
    return unref(formElRef)?.validateFields(nameList);
  }

  async function validate(nameList?: NamePath[] | undefined) {
    await unref(formElRef)?.validate(nameList);
    return handleFormValues(toRaw(unref(formModel)));
  }

  async function clearValidate(name?: string | string[]) {
    await unref(formElRef)?.clearValidate(name);
  }

  async function scrollToField(name: NamePath, options?: ScrollOptions | Options | undefined) {
    await unref(formElRef)?.scrollToField(name, options);
  }

  const scrollToCenterField = () => {
    setTimeout(async () => {
      await nextTick();
      const isError = document.getElementsByClassName('has-error');
      if (isError.length) {
        isError[0].scrollIntoView({
          // 滚动到指定节点
          // 值有start,center,end，nearest，当前显示在视图区域中间
          block: 'center',
          // 值有auto、instant,smooth，缓动动画（当前是慢速的）
          behavior: 'smooth',
        });
      }
      await nextTick();
      const isTextError = document.getElementsByClassName('ant-form-item-explain-error');
      if (isTextError.length) {
        isTextError[0].scrollIntoView({
          // 滚动到指定节点
          // 值有start,center,end，nearest，当前显示在视图区域中间
          block: 'center',
          // 值有auto、instant,smooth，缓动动画（当前是慢速的）
          behavior: 'smooth',
        });
      }
    }, 300);
  };

  /**
   * @description: Form submission
   */
  async function handleSubmit(e?: Event | boolean): Promise<void> {
    !isBoolean(e) && (e as Event)?.preventDefault && (e as Event).preventDefault();
    const { submitFunc, submitOnReset, scrollToFirstError, scrollToFirstErrorPosition } =
      unref(getProps);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc();
      return;
    }
    const formEl = unref(formElRef);
    if (!formEl) {
      return;
    }
    try {
      const values = await validate();
      emit('submit', values);
      if (!isBoolean(e) && submitOnReset) {
        resetFields(true, false);
      }
    } catch (error) {
      if (scrollToFirstError && error.errorFields.length) {
        let scrollToFieldOptions: Options = {};
        if (typeof scrollToFirstError === 'object') {
          scrollToFieldOptions = scrollToFirstError;
        }

        if (scrollToFirstErrorPosition === 'center') {
          scrollToCenterField();
        } else {
          scrollToField(error.errorFields[0].name?.[0], scrollToFieldOptions);
        }
      }
      emit('submit-error', error);
    }
  }

  return {
    handleSubmit,
    clearValidate,
    validate,
    validateFields,
    getFieldsValue,
    getChildrenFieldsValue,
    updateSchema,
    appendSchemaByField,
    removeSchemaByFiled,
    resetFields,
    setFieldsValue,
    scrollToField,
    scrollToCenterField,
  };
}
