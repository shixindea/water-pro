/** @format */

import type { NamePath } from '../../../form/interface';
import type { FormActionType, UseFormReturnType, FormProSchema } from '../types/form';
import type { FormProProps } from '../props';
import type { Nullable, Recordable } from '../../../_util/type';

import { ref, onUnmounted, unref, nextTick, watch } from 'vue';

import { isProdMode } from '../../../_util/env';
import warning from '../../../_util/warning';
import { getDynamicProps } from '../../../_util/use';

export declare type ValidateFields = (nameList?: NamePath[]) => Promise<Recordable>;

export function useForm(props?: FormProProps): UseFormReturnType {
  const formRef = ref<Nullable<FormActionType>>(null);
  const loadedRef = ref<Nullable<boolean>>(false);

  async function getForm() {
    const form = unref(formRef);
    if (!form) {
      warning(
        'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!',
      );
    }
    await nextTick();
    return form as FormActionType;
  }

  function register(instance: FormActionType) {
    isProdMode() &&
      onUnmounted(() => {
        formRef.value = null;
        loadedRef.value = null;
      });
    if (unref(loadedRef) && isProdMode() && instance === unref(formRef)) {
      return;
    }

    formRef.value = instance;
    loadedRef.value = true;

    watch(
      () => props,
      () => {
        if (props) {
          instance && instance.setProps(getDynamicProps(props));
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );
  }

  const methods: FormActionType = {
    scrollToField: async (name: NamePath, options?: ScrollOptions | undefined) => {
      const form = await getForm();
      form.scrollToField(name, options);
    },
    setProps: async (formProps: FormProProps) => {
      const form = await getForm();
      form.setProps(formProps);
    },
    resetAllModel: async () => {
      const form = await getForm();
      form.resetAllModel();
    },
    updateSchema: async (
      data: Partial<FormProSchema> | Partial<FormProSchema>[],
      replace = false,
    ) => {
      const form = await getForm();
      form.updateSchema(data, replace);
    },

    clearValidate: async (name?: string | string[]) => {
      const form = await getForm();
      form.clearValidate(name);
    },

    resetFields: async (emitReset?: boolean, triggerSubmit?: boolean) => {
      getForm().then(async (form) => {
        await form.resetFields(emitReset, triggerSubmit);
      });
    },

    removeSchemaByFiled: async (field: string | string[]) => {
      const form = await getForm();
      form.removeSchemaByFiled(field);
    },

    // TODO promisify
    getFieldsValue: <T>(filterHidden?: boolean) => {
      return unref(formRef)?.getFieldsValue(filterHidden) as T;
    },

    // children 结构
    getChildrenFieldsValue: <T>(filterHidden?: boolean) => {
      return unref(formRef)?.getChildrenFieldsValue(filterHidden) as T;
    },

    setFieldsValue: async <T>(values: T) => {
      const form = await getForm();
      form.setFieldsValue<T>(values);
    },

    appendSchemaByField: async (
      schema: FormProSchema,
      prefixField: string | undefined,
      first: boolean | undefined,
    ) => {
      const form = await getForm();
      form.appendSchemaByField(schema, prefixField, first);
    },

    submit: async (): Promise<any> => {
      const form = await getForm();
      return form.submit();
    },

    validate: async (nameList?: NamePath[]): Promise<Recordable> => {
      const form = await getForm();
      return form.validate(nameList);
    },

    validateFields: async (nameList?: NamePath[]): Promise<Recordable> => {
      const form = await getForm();
      return form.validateFields(nameList);
    },

    scrollToCenterField: async () => {
      const form = await getForm();
      form.scrollToCenterField();
    },
  };

  return [register, methods];
}
