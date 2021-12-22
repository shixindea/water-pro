/** @format */

import type { ComputedRef, Ref } from 'vue';
import type { Recordable, Nullable } from '../../../_util/type';
import type { TableActionType } from '../types/table';
import type { TableProProps } from '../props';

import { provide, inject } from 'vue';

const key = Symbol('table-pro');

type Instance = TableActionType & {
  wrapRef: Ref<Nullable<HTMLElement>>;
  getBindValues: ComputedRef<Recordable>;
};

type RetInstance = Omit<Instance, 'getBindValues'> & {
  getBindValues: ComputedRef<TableProProps>;
};

export function createTableContext(instance: Instance) {
  provide(key, instance);
}

export function useTableContext(): RetInstance {
  return inject(key) as RetInstance;
}
