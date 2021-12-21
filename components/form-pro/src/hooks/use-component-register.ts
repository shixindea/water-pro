/** @format */

import type { Component } from 'vue';
import { tryOnUnmounted } from '../../../_util/hooks/use-mounted';
import type { ComponentType } from '../types/index';

import { add, del } from '../component-map';

export function useComponentRegister(compName: ComponentType, comp: Component) {
  add(compName, comp);
  tryOnUnmounted(() => {
    del(compName);
  });
}
