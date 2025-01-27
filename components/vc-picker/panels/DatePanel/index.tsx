import type { DateBodyPassProps, DateRender } from './DateBody';
import { computed } from 'vue';
import DateBody from './DateBody';
import DateHeader from './DateHeader';
import type { PanelSharedProps } from '../../interface';
import { WEEK_DAY_COUNT } from '../../utils/dateUtil';
import type { KeyboardConfig } from '../../utils/uiUtil';
import { createKeydownHandler } from '../../utils/uiUtil';
import classNames from '../../../_util/classNames';
import useMergeProps from '../../hooks/useMergeProps';

const DATE_ROW_COUNT = 6;

export type DatePanelProps<DateType> = {
  active?: boolean;
  dateRender?: DateRender<DateType>;
  rangePlacement?: string;

  // Used for week panel
  panelName?: string;
  keyboardConfig?: KeyboardConfig;
} & PanelSharedProps<DateType> &
  DateBodyPassProps<DateType>;

function DatePanel<DateType>(_props: DatePanelProps<DateType>) {
  const props = useMergeProps(_props);
  const {
    prefixCls,
    panelName = 'date',
    keyboardConfig,
    active,
    operationRef,
    generateConfig,
    value,
    viewDate,
    onViewDateChange,
    onPanelChange,
    onSelect,
  } = props;
  const isMultiple = computed(() => props.type === 'multiple');
  const panelPrefixCls = `${prefixCls}-${panelName}-panel`;
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: (event: KeyboardEvent) =>
      createKeydownHandler(event, {
        onLeftRight: (diff) => {
          onSelect(generateConfig.addDate((value || viewDate) as any, diff), 'key');
        },
        onCtrlLeftRight: (diff) => {
          onSelect(generateConfig.addYear((value || viewDate) as any, diff), 'key');
        },
        onUpDown: (diff) => {
          onSelect(
            generateConfig.addDate((value || viewDate) as any, diff * WEEK_DAY_COUNT),
            'key',
          );
        },
        onPageUpDown: (diff) => {
          onSelect(generateConfig.addMonth((value || viewDate) as any, diff), 'key');
        },
        ...keyboardConfig,
      }),
  };

  // ==================== View Operation ====================
  const onYearChange = (diff: number) => {
    const newDate = generateConfig.addYear(
      isMultiple.value ? viewDate?.[(viewDate as DateType[]).length - 1] : viewDate,
      diff,
    );
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  const onMonthChange = (diff: number) => {
    const newDate = generateConfig.addMonth(
      isMultiple.value ? viewDate?.[(viewDate as DateType[]).length - 1] : viewDate,
      diff,
    );
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return (
    <div
      class={classNames(panelPrefixCls, {
        [`${panelPrefixCls}-active`]: active,
      })}
    >
      <DateHeader
        {...props}
        prefixCls={prefixCls}
        value={value as any}
        viewDate={viewDate}
        // View Operation
        onPrevYear={() => {
          onYearChange(-1);
        }}
        onNextYear={() => {
          onYearChange(1);
        }}
        onPrevMonth={() => {
          onMonthChange(-1);
        }}
        onNextMonth={() => {
          onMonthChange(1);
        }}
        onMonthClick={() => {
          onPanelChange('month', viewDate as any);
        }}
        onYearClick={() => {
          onPanelChange('year', viewDate as any);
        }}
      />
      <DateBody
        {...props}
        onSelect={(date) => onSelect(date, 'mouse')}
        prefixCls={prefixCls}
        value={value}
        viewDate={viewDate as any}
        rowCount={DATE_ROW_COUNT}
      />
    </div>
  );
}

DatePanel.displayName = 'DatePanel';
DatePanel.inheritAttrs = false;

export default DatePanel;
