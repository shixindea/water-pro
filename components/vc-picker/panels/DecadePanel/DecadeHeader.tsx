import { computed } from 'vue';
import isArray from 'lodash-es/isArray';
import Header from '../Header';
import type { GenerateConfig } from '../../generate';
import { DECADE_DISTANCE_COUNT } from '.';
import { useInjectPanel } from '../../PanelContext';
import useMergeProps from '../../hooks/useMergeProps';

export type YearHeaderProps<DateType> = {
  prefixCls: string;
  viewDate: DateType | DateType[];
  generateConfig: GenerateConfig<DateType>;
  type?: string;

  onPrevDecades: () => void;
  onNextDecades: () => void;
};

function DecadeHeader<DateType>(_props: YearHeaderProps<DateType>) {
  const props = useMergeProps(_props);
  const { prefixCls, generateConfig, type, viewDate, onPrevDecades, onNextDecades } = props;
  const { hideHeader } = useInjectPanel();
  if (hideHeader) {
    return null;
  }

  const headerPrefixCls = `${prefixCls}-header`;
  const isMultiple = computed(() => type === 'multiple');
  const theViewDate = computed(() =>
    isMultiple.value && isArray(viewDate) && viewDate.length > 0
      ? viewDate?.[viewDate.length - 1]
      : (viewDate as DateType),
  );

  const yearNumber = generateConfig.getYear(theViewDate.value);
  const startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  const endYear = startYear + DECADE_DISTANCE_COUNT - 1;

  return (
    <Header
      {...props}
      prefixCls={headerPrefixCls}
      onSuperPrev={onPrevDecades}
      onSuperNext={onNextDecades}
    >
      {startYear}-{endYear}
    </Header>
  );
}

DecadeHeader.displayName = 'DecadeHeader';
DecadeHeader.inheritAttrs = false;

export default DecadeHeader;
