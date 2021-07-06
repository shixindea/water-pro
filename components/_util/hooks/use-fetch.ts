/** @format */

import { ref } from 'vue';
import { isFunction, isArray } from '@fe6/shared';
import warning from '../warning';

export default (api: any) => {
  const loading = ref(false);
  const result = ref([]);

  async function fetch(params?: Recordable) {
    return new Promise(async solve => {
      const { callback, params: fecthParams } = params || {};

      if (!api || !isFunction(api) || typeof api !== 'function') return;

      try {
        loading.value = true;
        const res = await api(fecthParams);
        loading.value = false;
        if (isArray(res)) {
          result.value = res;
          if (isFunction(callback)) {
            (callback as any)(res);
          }
          solve(res);
          return;
        }
      } catch (err) {
        if (isFunction(params.error)) {
          params.error();
        }
        warning(err);
      } finally {
        loading.value = false;
      }
    });
  }

  const setLoading = (loadingStatue: boolean) => {
    loading.value = loadingStatue;
  };

  return {
    loading,
    fetch,
    result,
    setLoading,
  } as const;
};
