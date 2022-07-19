import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
import { computed } from 'vue';
import isArray from 'lodash-es/isArray';
import { formatValue, isSameQuarter } from '../../utils/dateUtil';
import { useInjectRange } from '../../RangeContext';
import useCellClassName from '../../hooks/useCellClassName';
import PanelBody from '../PanelBody';
import useMergeProps from '../../hooks/useMergeProps';

export const QUARTER_COL_COUNT = 4;
const QUARTER_ROW_COUNT = 1;

export type QuarterBodyProps<DateType> = {
  prefixCls: string;
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType | DateType[] | null;
  viewDate: DateType | DateType[];
  disabledDate?: (date: DateType) => boolean;
  onSelect: (value: DateType) => void;
  type?: string;
};

function QuarterBody<DateType>(_props: QuarterBodyProps<DateType>) {
  const props = useMergeProps(_props);
  const { prefixCls, locale, type, value, viewDate, generateConfig } = props;

  const { rangedValue, hoverRangedValue } = useInjectRange();

  const cellPrefixCls = `${prefixCls}-cell`;

  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );

  const getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: (current: any, target) => {
      let now: any;
      if (isMultiple.value) {
        now = current && current?.length > 0 ? current[current.length - 1] : null;
      } else {
        now = current;
      }
      return isSameQuarter(generateConfig, now, target);
    },
    isInView: () => true,
    offsetCell: (date, offset) => generateConfig.addMonth(date, offset * 3),
  });

  const baseQuarter = generateConfig.setDate(generateConfig.setMonth(theViewDate.value, 0), 1);

  return (
    <PanelBody
      {...props}
      rowNum={QUARTER_ROW_COUNT}
      colNum={QUARTER_COL_COUNT}
      baseDate={baseQuarter}
      getCellText={(date) =>
        formatValue(date, {
          locale,
          format: locale.quarterFormat || '[Q]Q',
          generateConfig,
        })
      }
      getCellClassName={getCellClassName}
      getCellDate={(date, offset) => generateConfig.addMonth(date, offset * 3)}
      titleCell={(date) =>
        formatValue(date, {
          locale,
          format: 'YYYY-[Q]Q',
          generateConfig,
        })
      }
    />
  );
}

QuarterBody.displayName = 'QuarterBody';
QuarterBody.inheritAttrs = false;
export default QuarterBody;
