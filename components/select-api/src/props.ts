import type { PropType, ExtractPropTypes } from 'vue';
import type { SelectValue } from '../../select';
import type { FieldNames, SelectApiLocale } from '../interface';

import { selectProps as vcSelectProps } from '../../vc-select';

import PropTypes from '../../_util/vue-types';
import { tuple } from '../../_util/type';
import omit from '../../_util/omit';

export function selectApiProps() {
  return {
    ...omit(vcSelectProps<SelectValue>(), ['inputIcon', 'mode', 'getInputElement', 'backfill']),
    value: {
      type: [Array, Object, String, Number] as PropType<SelectValue>,
    },
    defaultValue: {
      type: [Array, Object, String, Number] as PropType<SelectValue>,
    },
    notFoundContent: PropTypes.any,
    suffixIcon: PropTypes.any,
    itemIcon: PropTypes.any,
    loadingPlaceholder: PropTypes.string,
    size: PropTypes.oneOf(tuple('small', 'middle', 'large', 'default')),
    mode: PropTypes.oneOf(tuple('multiple', 'tags', 'SECRET_COMBOBOX_MODE_DO_NOT_USE')),
    bordered: PropTypes.looseBool.def(true),
    transitionName: PropTypes.string.def('ant-slide-up'),
    choiceTransitionName: PropTypes.string.def(''),
    locale: { type: Object as PropType<SelectApiLocale> },

    api: {
      type: Function as PropType<(arg?: any) => Promise<any[]>>,
      default: null,
    },
    apiParams: PropTypes.object.def({}),
    loopGetOptions: PropTypes.bool,
    fieldNames: { type: Object as PropType<FieldNames> }, // +
  };
}

export type SelectApiProps = Partial<ExtractPropTypes<ReturnType<typeof selectApiProps>>>;
