/** @format */

import type { ComputedRef, Slots } from 'vue';
import type { Recordable } from '../../../_util/type';
import type { FetchParams } from '../types/table';
import type { TableProProps } from '../props';

import { unref, computed } from 'vue';
import { isFunction } from '@fe6/shared';

import type { FormProProps } from '../../../form-pro';

export function useTableForm(
  propsRef: ComputedRef<TableProProps>,
  slots: Slots,
  fetch: (opt?: FetchParams | undefined) => any,
) {
  const getFormProps = computed((): Partial<FormProProps> => {
    const { formConfig } = unref(propsRef);
    return {
      ...formConfig,
    };
  });

  const getFormSlotKeys = computed(() => {
    const keys = Object.keys(slots);
    return keys.map((item) => (item.startsWith('form-') ? item : null)).filter(Boolean);
  });

  function replaceFormSlotKey(key: string) {
    if (!key) {
      return '';
    }
    return key?.replace?.(/form\-/, '') ?? '';
  }

  function handleSearchInfoChange(info: Recordable) {
    const { handleSearchInfoFn } = unref(propsRef);
    if (handleSearchInfoFn && isFunction(handleSearchInfoFn)) {
      info = handleSearchInfoFn(info) || info;
    }
    fetch({ searchInfo: info, page: 1 });
  }

  return {
    getFormProps,
    replaceFormSlotKey,
    getFormSlotKeys,
    handleSearchInfoChange,
  };
}
