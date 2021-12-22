/** @format */

import type { ComputedRef } from 'vue';
import type { AdvanceState } from '../types/hooks';
import type { FormProSchema } from '../types/form';
import type { FormProProps } from '../props';
import type { EmitType, Indexable } from '../../../_util/type';

import { unref, watch, ref } from 'vue';
import { hasOwn } from '@fe6/shared';

import { useBreakpoint } from './use-breakpoint';

interface UseAdvancedContext {
  advanceState: AdvanceState;
  emit: EmitType;
  getProps: ComputedRef<FormProProps>;
  getSchema: ComputedRef<FormProSchema[]>;
}

export default function ({ advanceState, emit, getProps, getSchema }: UseAdvancedContext) {
  const { realWidthRef } = useBreakpoint();
  // 恢复之前的折叠
  const oldAdvance = ref<Indexable>({});

  watch(
    [() => unref(getSchema), () => advanceState.isAdvanced, () => unref(realWidthRef)],
    () => {
      const { showAdvancedButton } = unref(getProps);
      if (showAdvancedButton) {
        saveOldAdvance();
      }
    },
    { immediate: true },
  );

  function saveOldAdvance() {
    for (const schema of unref(getSchema)) {
      if (!hasOwn(oldAdvance.value, schema.field)) {
        oldAdvance.value[schema.field] = !!schema?.isAdvanced;
      }
    }

    if (getProps.value.advancedAll) {
      changeFields();
    }
  }

  // NOTE 操作字段的展开收起
  function changeFields() {
    for (const schema of unref(getSchema)) {
      if (advanceState.isAdvanced) {
        schema.isAdvanced = true;
      } else {
        schema.isAdvanced = oldAdvance.value[schema.field];
      }
    }
  }

  function handleToggleAdvanced() {
    advanceState.isAdvanced = !advanceState.isAdvanced;
    changeFields();
    emit('advanced-change', advanceState);
  }

  return { handleToggleAdvanced };
}
