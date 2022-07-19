import type { GenerateConfig } from '../../generate';
import { computed } from 'vue';
import isArray from 'lodash-es/isArray';
import Header from '../Header';
import { YEAR_DECADE_COUNT } from '.';
import { useInjectPanel } from '../../PanelContext';
import useMergeProps from '../../hooks/useMergeProps';

export type YearHeaderProps<DateType> = {
  prefixCls: string;
  viewDate: DateType | DateType[];
  value?: DateType | null;
  generateConfig: GenerateConfig<DateType>;
  type?: string;

  onPrevDecade: () => void;
  onNextDecade: () => void;
  onDecadeClick: () => void;
};

function YearHeader<DateType>(_props: YearHeaderProps<DateType>) {
  const props = useMergeProps(_props);
  const { prefixCls, generateConfig, viewDate, type, onPrevDecade, onNextDecade, onDecadeClick } =
    props;
  const { hideHeader } = useInjectPanel();
  if (hideHeader.value) {
    return null;
  }

  const headerPrefixCls = `${prefixCls}-header`;
  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate)
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );

  const yearNumber = generateConfig.getYear(theViewDate.value);
  const startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  const endYear = startYear + YEAR_DECADE_COUNT - 1;

  return (
    <Header
      {...props}
      prefixCls={headerPrefixCls}
      onSuperPrev={onPrevDecade}
      onSuperNext={onNextDecade}
    >
      <button type="button" onClick={onDecadeClick} class={`${prefixCls}-decade-btn`}>
        {startYear}-{endYear}
      </button>
    </Header>
  );
}

YearHeader.displayName = 'YearHeader';
YearHeader.inheritAttrs = false;

export default YearHeader;
