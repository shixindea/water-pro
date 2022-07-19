import { computed } from 'vue';
import isArray from 'lodash-es/isArray';
import Header from '../Header';
import type { Locale } from '../../interface';
import type { GenerateConfig } from '../../generate';
import { useInjectPanel } from '../../PanelContext';
import { formatValue } from '../../utils/dateUtil';
import useMergeProps from '../../hooks/useMergeProps';

export type MonthHeaderProps<DateType> = {
  prefixCls: string;
  viewDate: DateType | DateType[];
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;
  type?: string;
  disabledSelectYear?: boolean;

  onPrevYear: () => void;
  onNextYear: () => void;
  onYearClick: () => void;
};

function MonthHeader<DateType>(_props: MonthHeaderProps<DateType>) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig,
    type,
    disabledSelectYear,
    locale,
    viewDate,
    onNextYear,
    onPrevYear,
    onYearClick,
  } = props;
  const { hideHeader } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }
  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );

  const headerPrefixCls = `${prefixCls}-header`;

  return disabledSelectYear ? null : (
    <Header
      {...props}
      prefixCls={headerPrefixCls}
      onSuperPrev={onPrevYear}
      onSuperNext={onNextYear}
    >
      <button type="button" onClick={onYearClick} class={`${prefixCls}-year-btn`}>
        {formatValue(theViewDate.value, {
          locale,
          format: locale.yearFormat,
          generateConfig,
        })}
      </button>
    </Header>
  );
}

MonthHeader.displayName = 'MonthHeader';
MonthHeader.inheritAttrs = false;

export default MonthHeader;
