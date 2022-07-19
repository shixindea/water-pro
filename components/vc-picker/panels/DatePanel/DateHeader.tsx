import { computed } from 'vue';
import isArray from 'lodash-es/isArray';
import Header from '../Header';
import type { Locale } from '../../interface';
import type { GenerateConfig } from '../../generate';
import { useInjectPanel } from '../../PanelContext';
import { formatValue } from '../../utils/dateUtil';
import type { VueNode } from '../../../_util/type';
import useMergeProps from '../../hooks/useMergeProps';

export type DateHeaderProps<DateType> = {
  prefixCls: string;
  viewDate: DateType | DateType[];
  value?: DateType | null;
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;
  type?: string;
  disabledSelectYear?: boolean;

  onPrevYear: () => void;
  onNextYear: () => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onYearClick: () => void;
  onMonthClick: () => void;
};

function DateHeader<DateType>(_props: DateHeaderProps<DateType>) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig,
    locale,
    viewDate,
    onNextMonth,
    onPrevMonth,
    onNextYear,
    onPrevYear,
    onYearClick,
    onMonthClick,
    type,
    disabledSelectYear,
  } = props;

  const { hideHeader } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }

  const headerPrefixCls = `${prefixCls}-header`;

  const monthsLocale: string[] =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths
      ? generateConfig.locale.getShortMonths(locale.locale)
      : []);

  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );
  const month = generateConfig.getMonth(theViewDate.value);

  // =================== Month & Year ===================
  const yearNode: VueNode = disabledSelectYear ? null : (
    <button
      type="button"
      key="year"
      onClick={onYearClick}
      tabindex={-1}
      class={`${prefixCls}-year-btn`}
    >
      {formatValue(theViewDate.value, {
        locale,
        format: locale.yearFormat,
        generateConfig,
      })}
    </button>
  );
  const monthNode: VueNode = (
    <button
      type="button"
      key="month"
      onClick={onMonthClick}
      tabindex={-1}
      class={`${prefixCls}-month-btn`}
    >
      {locale.monthFormat
        ? formatValue(theViewDate.value, {
            locale,
            format: locale.monthFormat,
            generateConfig,
          })
        : monthsLocale[month]}
    </button>
  );

  const monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];

  return (
    <Header
      {...props}
      prefixCls={headerPrefixCls}
      onSuperPrev={onPrevYear}
      onPrev={onPrevMonth}
      onNext={onNextMonth}
      onSuperNext={onNextYear}
    >
      {monthYearNodes}
    </Header>
  );
}

DateHeader.displayName = 'DateHeader';
DateHeader.inheritAttrs = false;
export default DateHeader;
