/** @format */

import type { ComputedRef, Slots } from 'vue';
import type { Recordable } from '../../../_util/type';
import type { TableProProps } from '../props';

import { unref, computed, h } from 'vue';
import { isString } from '@fe6/shared';

import { getSetupSlot } from '../../../_util/props-util';
import TableHeader from '../components/table-header';

export function useTableHeader(propsRef: ComputedRef<TableProProps>, slots: Slots) {
  const getHeaderProps = computed((): Recordable => {
    const { title, showTableSetting, titleHelpMessage, tableSetting } = unref(propsRef);
    const hideTitle = !slots?.tableTitle && !title && !slots?.toolbar && !showTableSetting;
    if (hideTitle && !isString(title)) {
      return {};
    }

    return {
      title: hideTitle
        ? null
        : () =>
            h(
              TableHeader as any,
              {
                title,
                titleHelpMessage,
                showTableSetting,
                tableSetting,
              },
              {
                ...(slots.toolbar
                  ? {
                      toolbar: () => getSetupSlot(slots, 'toolbar'),
                    }
                  : {}),
                ...(slots.tableTitle
                  ? {
                      tableTitle: () => getSetupSlot(slots, 'tableTitle'),
                    }
                  : {}),
              },
            ),
    };
  });
  return { getHeaderProps };
}
