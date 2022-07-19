import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
import { computed, useAttrs } from 'vue';
import isArray from 'lodash-es/isArray';
import { formatValue, isSameMonth, isSameYear } from '../../utils/dateUtil';
import { useInjectRange } from '../../RangeContext';
import useCellClassName from '../../hooks/useCellClassName';
import PanelBody from '../PanelBody';
import type { VueNode } from '../../../_util/type';
import useMergeProps from '../../hooks/useMergeProps';

export const MONTH_COL_COUNT = 3;
const MONTH_ROW_COUNT = 4;

export type MonthCellRender<DateType> = (obj: { current: DateType; locale: Locale }) => VueNode;

export type MonthBodyProps<DateType> = {
  prefixCls: string;
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType | DateType[] | null;
  viewDate: DateType | DateType[];
  disabledDate?: (date: DateType) => boolean;
  monthCellRender?: MonthCellRender<DateType>;
  onSelect: (value: DateType) => void;
  type?: string;
};

function MonthBody<DateType>(_props: MonthBodyProps<DateType>) {
  const props = useMergeProps(_props);
  const { prefixCls, locale, type, value, viewDate, generateConfig, monthCellRender } = props;
  const { picker } = useAttrs();
  const { rangedValue, hoverRangedValue } = useInjectRange();

  const cellPrefixCls = `${prefixCls}-cell`;

  const isMultiple = computed(() => type === 'multiple');
  const needMultipleSame = computed(() => isMultiple.value && picker === 'month');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );
  const baseMonth = generateConfig.setMonth(theViewDate.value, 0);

  const getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: (current, target) => {
      let now: any;
      if (isMultiple.value && current) {
        if (needMultipleSame.value) {
          return (current as DateType[]).some(
            (oneViewDate: DateType) =>
              isSameMonth(generateConfig, target, oneViewDate) &&
              isSameYear(generateConfig, target, oneViewDate),
          );
        } else {
          now = current && current?.length > 0 ? current[current.length - 1] : null;
        }
      } else {
        now = current;
      }
      return isSameYear(generateConfig, now, target) && isSameMonth(generateConfig, now, target);
    },
    isInView: () => true,
    offsetCell: (date, offset) => generateConfig.addMonth(date, offset),
    extendClass: {
      [`${cellPrefixCls}-multiple-month-view`]: needMultipleSame.value,
    },
  });

  const monthsLocale: string[] =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths
      ? generateConfig.locale.getShortMonths(locale.locale)
      : []);

  const getCellNode = monthCellRender
    ? (date: DateType) => monthCellRender({ current: date, locale })
    : undefined;

  return (
    <PanelBody
      {...props}
      rowNum={MONTH_ROW_COUNT}
      colNum={MONTH_COL_COUNT}
      baseDate={baseMonth}
      getCellNode={getCellNode}
      getCellText={(date) =>
        locale.monthFormat
          ? formatValue(date, {
              locale,
              format: locale.monthFormat,
              generateConfig,
            })
          : monthsLocale[generateConfig.getMonth(date)]
      }
      getCellClassName={getCellClassName}
      getCellDate={generateConfig.addMonth}
      titleCell={(date) =>
        formatValue(date, {
          locale,
          format: 'YYYY-MM',
          generateConfig,
        })
      }
    />
  );
}

MonthBody.displayName = 'MonthBody';
MonthBody.inheritAttrs = false;

export default MonthBody;
