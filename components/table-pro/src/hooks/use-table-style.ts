/** @format */

import type { ComputedRef } from 'vue';
import type { TableCustomRecord } from '../types/table';
import type { TableProProps } from '../props';

import { unref } from 'vue';
import { isFunction } from '@fe6/shared';

export function useTableStyle(propsRef: ComputedRef<TableProProps>, prefixCls: string) {
  function getRowClassName(record: TableCustomRecord, index: number) {
    const { striped, rowClassName } = unref(propsRef);
    if (!striped) {
      return;
    }
    if (rowClassName && isFunction(rowClassName)) {
      return rowClassName(record, index);
    }
    return (index || 0) % 2 === 1 ? `${prefixCls}-row__striped` : '';
  }

  return {
    getRowClassName,
  };
}
