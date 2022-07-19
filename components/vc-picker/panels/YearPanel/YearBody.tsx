import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
import { computed, useAttrs } from 'vue';
import isArray from 'lodash-es/isArray';
import { YEAR_DECADE_COUNT } from '.';
import useCellClassName from '../../hooks/useCellClassName';
import { formatValue, isSameYear } from '../../utils/dateUtil';
import { useInjectRange } from '../../RangeContext';
import PanelBody from '../PanelBody';
import useMergeProps from '../../hooks/useMergeProps';

export const YEAR_COL_COUNT = 3;
const YEAR_ROW_COUNT = 4;

export type YearBodyProps<DateType> = {
  prefixCls: string;
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType | DateType[] | null;
  viewDate: DateType | DateType[];
  disabledDate?: (date: DateType) => boolean;
  onSelect: (value: DateType) => void;
  type?: string;
};

function YearBody<DateType>(_props: YearBodyProps<DateType>) {
  const props = useMergeProps(_props);
  const { prefixCls, value, viewDate, type, locale, generateConfig } = props;
  const { rangedValue, hoverRangedValue } = useInjectRange();
  const { picker } = useAttrs();

  const yearPrefixCls = `${prefixCls}-cell`;
  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );
  const needMultipleSame = computed(() => isMultiple.value && picker === 'year');

  // =============================== Year ===============================
  const yearNumber = generateConfig.getYear(theViewDate.value);
  const startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  const endYear = startYear + YEAR_DECADE_COUNT - 1;
  const baseYear = generateConfig.setYear(
    theViewDate.value,
    startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2),
  );

  const isInView = (date: DateType) => {
    const currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };

  const getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value: value as any,
    generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: (current, target) => {
      let now: any;
      if (isMultiple.value && current) {
        if (needMultipleSame.value) {
          return (current as DateType[]).some((oneViewDate: DateType) =>
            isSameYear(generateConfig, target, oneViewDate),
          );
        } else {
          now = current && current?.length > 0 ? current[current.length - 1] : null;
        }
      } else {
        now = current;
      }
      return isSameYear(generateConfig, now, target);
    },
    isInView,
    offsetCell: (date, offset) => generateConfig.addYear(date, offset),
  });

  return (
    <PanelBody
      {...props}
      rowNum={YEAR_ROW_COUNT}
      colNum={YEAR_COL_COUNT}
      baseDate={baseYear}
      getCellText={generateConfig.getYear}
      getCellClassName={getCellClassName}
      getCellDate={generateConfig.addYear}
      titleCell={(date) =>
        formatValue(date, {
          locale,
          format: 'YYYY',
          generateConfig,
        })
      }
    />
  );
}

YearBody.displayName = 'YearBody';
YearBody.inheritAttrs = false;

export default YearBody;
