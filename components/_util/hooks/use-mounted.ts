import { onMounted, onUnmounted, getCurrentInstance, nextTick } from 'vue';

import type { Fn } from '../type';

/**
 * Mounted state in ref.
 *
 * @see https://vueuse.org/useMounted
 * @param options
 */
export function tryOnMounted(fn: Fn, sync = true) {
  if (getCurrentInstance()) {
    onMounted(fn);
  } else if (sync) {
    fn();
  } else {
    nextTick(fn);
  }
}

export function tryOnUnmounted(fn: Fn) {
  if (getCurrentInstance()) {
    onUnmounted(fn);
  }
}
