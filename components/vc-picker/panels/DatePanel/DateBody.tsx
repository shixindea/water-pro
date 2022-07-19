import type { GenerateConfig } from '../../generate';
import { computed } from 'vue';
import isArray from 'lodash-es/isArray';
import {
  WEEK_DAY_COUNT,
  getWeekStartDate,
  isSameDate,
  isSameMonth,
  formatValue,
} from '../../utils/dateUtil';
import type { Locale } from '../../interface';
import useCellClassName from '../../hooks/useCellClassName';
import PanelBody from '../PanelBody';
import type { VueNode } from '../../../_util/type';
import { useInjectRange } from '../../RangeContext';
import useMergeProps from '../../hooks/useMergeProps';

export type DateRender<DateType> = (props: { current: DateType; today: DateType }) => VueNode;

export type DateBodyPassProps<DateType> = {
  dateRender?: DateRender<DateType>;
  disabledDate?: (date: DateType) => boolean;

  // Used for week panel
  prefixColumn?: (date: DateType) => VueNode;
  rowClassName?: (date: DateType) => string;
};

export type DateBodyProps<DateType> = {
  prefixCls: string;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType | DateType[] | null;
  viewDate: DateType | DateType[];
  locale: Locale;
  rowCount: number;
  onSelect: (value: DateType) => void;
  type?: string;
} & DateBodyPassProps<DateType>;

function DateBody<DateType>(_props: DateBodyProps<DateType>) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    generateConfig,
    prefixColumn,
    type,
    locale,
    rowCount,
    viewDate,
    value,
    dateRender,
  } = props;

  const { rangedValue, hoverRangedValue } = useInjectRange();
  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );

  const baseDate = getWeekStartDate(locale.locale, generateConfig, theViewDate.value);
  const cellPrefixCls = `${prefixCls}-cell`;
  const weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  const today = generateConfig.getNow();

  // ============================== Header ==============================
  const headerCells: VueNode[] = [];
  const weekDaysLocale: string[] =
    locale.shortWeekDays ||
    (generateConfig.locale.getShortWeekDays
      ? generateConfig.locale.getShortWeekDays(locale.locale)
      : []);

  if (prefixColumn) {
    headerCells.push(<th key="empty" aria-label="empty cell" />);
  }
  for (let i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(<th key={i}>{weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]}</th>);
  }

  // =============================== Body ===============================
  const getCellClassName = useCellClassName({
    cellPrefixCls,
    today,
    isMultiple,
    value,
    generateConfig,
    rangedValue: prefixColumn ? null : rangedValue.value,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue.value,
    isSameCell: (current, target) => isSameDate(generateConfig, current, target),
    isInView: (date) =>
      isMultiple.value && isArray(viewDate)
        ? viewDate.some((oneViewDate: DateType) => isSameMonth(generateConfig, date, oneViewDate))
        : isSameMonth(generateConfig, date, viewDate),
    offsetCell: (date, offset) => generateConfig.addDate(date, offset),
  });

  const getCellNode = dateRender
    ? (date: DateType) => dateRender({ current: date, today })
    : undefined;

  return (
    <PanelBody
      {...props}
      rowNum={rowCount}
      colNum={WEEK_DAY_COUNT}
      baseDate={baseDate}
      getCellNode={getCellNode}
      getCellText={generateConfig.getDate}
      getCellClassName={getCellClassName}
      getCellDate={generateConfig.addDate}
      titleCell={(date) =>
        formatValue(date, {
          locale,
          format: 'YYYY-MM-DD',
          generateConfig,
        })
      }
    />
  );
}

DateBody.displayName = 'DateBody';
DateBody.inheritAttrs = false;
DateBody.props = [
  'prefixCls',
  'generateConfig',
  'value?',
  'viewDate',
  'locale',
  'rowCount',
  'onSelect',
  'dateRender?',
  'disabledDate?',
  // Used for week panel
  'prefixColumn?',
  'rowClassName?',
];
export default DateBody;
