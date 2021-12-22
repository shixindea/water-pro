/** @format */

import type { ComputedRef } from 'vue';
import type { TableProProps } from '../props';

import { ref, unref, computed, watch } from 'vue';

export function useLoading(props: ComputedRef<TableProProps>) {
  const loadingRef = ref(unref(props).loading);

  watch(
    () => unref(props).loading,
    (loading) => {
      loadingRef.value = loading;
    },
  );

  const getLoading = computed(() => {
    return unref(loadingRef);
  });

  function setLoading(loading: boolean) {
    loadingRef.value = loading;
  }

  return { getLoading, setLoading };
}
