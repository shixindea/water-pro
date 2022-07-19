import type { PanelMode, PickerMode } from '../../vc-picker/interface';
import type { GenerateConfig } from '../../vc-picker/generate/index';
import type { CommonProps, DatePickerProps } from './props';
import IconBytedCalendar from '@fe6/icon-vue/lib/icons/byted-calendar';
import IconBytedTime from '@fe6/icon-vue/lib/icons/byted-time';
import isArray from 'lodash-es/isArray';
import cloneDeep from 'lodash-es/cloneDeep';
import RCPicker from '../../vc-picker';
import zhCN from '../locale/zh_CN';
import { getPlaceholder } from '../util';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';
import { getTimeProps, Components } from '.';
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';
import useConfigInject from '../../_util/hooks/useConfigInject';
import classNames from '../../_util/classNames';
import { commonProps, datePickerProps } from './props';
import BasicClear from '../../basic-clear';

import devWarning from '../../vc-util/devWarning';
import { useInjectFormItemContext } from '../../form/FormItemContext';

export default function generateSinglePicker<DateType, ExtraProps = {}>(
  generateConfig: GenerateConfig<DateType>,
  extraProps: ExtraProps,
) {
  function getPicker(picker?: PickerMode, displayName?: string) {
    const comProps = {
      ...commonProps<DateType>(),
      ...datePickerProps<DateType>(),
      ...extraProps,
    };
    return defineComponent({
      name: displayName,
      inheritAttrs: false,
      props: comProps,
      slots: [
        'suffixIcon',
        // 'clearIcon',
        'prevIcon',
        'nextIcon',
        'superPrevIcon',
        'superNextIcon',
        // 'panelRender',
        'dateRender',
        'renderExtraFooter',
        'monthCellRender',
      ],
      setup(_props, { slots, expose, attrs, emit }) {
        // 兼容 vue 3.2.7
        const props = _props as unknown as CommonProps<DateType> &
          DatePickerProps<DateType> &
          ExtraProps;
        const formItemContext = useInjectFormItemContext();
        const isMultiple = computed(() => props.type === 'multiple');
        devWarning(
          !(props.monthCellContentRender || slots.monthCellContentRender),
          'DatePicker',
          '`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.',
        );

        devWarning(
          !attrs.getCalendarContainer,
          'DatePicker',
          '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.',
        );
        const { prefixCls, direction, getPopupContainer, size, rootPrefixCls } = useConfigInject(
          'picker',
          props,
        );
        const pickerRef = ref();
        onMounted(() => {
          nextTick(() => {
            if (process.env.NODE_ENV === 'test') {
              if (props.autofocus) {
                pickerRef.value?.focus();
              }
            }
          });
        });
        expose({
          focus: () => {
            pickerRef.value?.focus();
          },
          blur: () => {
            pickerRef.value?.blur();
          },
        });
        const maybeToString = (date: DateType) => {
          return props.valueFormat ? generateConfig.toString(date, props.valueFormat) : date;
        };
        const onChange = (date: DateType, dateString: string) => {
          // 清空
          if (isMultiple.value && date === null && dateString === '') {
            emit('update:value', []);
            emit('change', [], '');
            formItemContext.onFieldChange();
            return;
          }

          let theValue: DateType | DateType[] = date;
          const value = maybeToString(date);
          if (isMultiple.value && isArray(props.value)) {
            const theNowVal = maybeToString(value as DateType);
            const theOneIdx = (props.value as any)?.findIndex((vItem: any) => {
              if (props.valueFormat) {
                return vItem === theNowVal;
              } else {
                // FIX 换算成字符串格式，点击今天的时候取消不了
                const toStringItem = generateConfig.toString(vItem, 'YYYY-MM-DD');
                const toStringTheNowVal = generateConfig.toString(theNowVal, 'YYYY-MM-DD');
                return toStringItem === toStringTheNowVal;
              }
            });

            if (theOneIdx > -1) {
              theValue = cloneDeep(props.value);
              (theValue as DateType[]).splice(theOneIdx, 1);
            } else {
              theValue = props.value.concat(value as any);
            }
          }

          emit('update:value', theValue);
          emit('change', theValue, dateString);
          formItemContext.onFieldChange();
        };
        const onOpenChange = (open: boolean) => {
          emit('update:open', open);
          emit('openChange', open);
        };
        const onFocus = (e: FocusEvent) => {
          emit('focus', e);
        };
        const onBlur = (e: FocusEvent) => {
          emit('blur', e);
          formItemContext.onFieldBlur();
        };
        const onPanelChange = (date: DateType, mode: PanelMode | null) => {
          const value = maybeToString(date);
          emit('panelChange', value, mode);
        };
        const onOk = (date: DateType) => {
          const value = maybeToString(date);
          emit('ok', value);
        };

        const [contextLocale] = useLocaleReceiver('DatePicker', zhCN);

        const value = computed(() => {
          if (props.value) {
            return props.valueFormat
              ? generateConfig.toDate(props.value as string | DateType, props.valueFormat)
              : props.value;
          }
          // FIX formPro 多选日期的问题
          return (!props.value ? (isMultiple.value ? [] : undefined) : props.value) as DateType;
        });
        const defaultValue = computed(() => {
          if (props.defaultValue) {
            return props.valueFormat
              ? generateConfig.toDate(props.defaultValue as string | DateType, props.valueFormat)
              : props.defaultValue;
          }
          return (props.defaultValue === '' ? undefined : props.defaultValue) as DateType;
        });
        const defaultPickerValue = computed(() => {
          if (props.defaultPickerValue) {
            return props.valueFormat
              ? generateConfig.toDate(
                  props.defaultPickerValue as string | DateType,
                  props.valueFormat,
                )
              : props.defaultPickerValue;
          }
          return (
            props.defaultPickerValue === '' ? undefined : props.defaultPickerValue
          ) as DateType;
        });

        return () => {
          const locale = { ...contextLocale.value, ...props.locale };
          const p = { ...props, ...attrs };
          const {
            bordered = true,
            placeholder,
            suffixIcon = slots.suffixIcon?.(),
            showToday = true,
            transitionName,
            allowClear = true,
            dateRender = slots.dateRender,
            renderExtraFooter = slots.renderExtraFooter,
            monthCellRender = slots.monthCellRender ||
              (props as any).monthCellContentRender ||
              slots.monthCellContentRender,
            clearIcon = slots.clearIcon?.(),
            id = formItemContext.id.value,
            ...restProps
          } = p;
          let showTime = p.showTime === '' ? true : p.showTime;
          if (isMultiple.value) {
            showTime = false;
          }
          const { format } = p as any;

          let additionalOverrideProps: any = {};
          if (picker) {
            additionalOverrideProps.picker = picker;
          }
          const mergedPicker = picker || p.picker || 'date';

          additionalOverrideProps = {
            ...additionalOverrideProps,
            ...(showTime
              ? getTimeProps({
                  format,
                  picker: mergedPicker,
                  ...(typeof showTime === 'object' ? showTime : {}),
                })
              : {}),
            ...(mergedPicker === 'time'
              ? getTimeProps({ format, ...restProps, picker: mergedPicker })
              : {}),
          };
          const pre = prefixCls.value;
          const SuffixIconComp = picker === 'time' ? IconBytedTime : IconBytedCalendar;
          return (
            <RCPicker
              monthCellRender={monthCellRender}
              dateRender={dateRender}
              renderExtraFooter={renderExtraFooter}
              ref={pickerRef}
              placeholder={getPlaceholder(mergedPicker, locale, placeholder)}
              suffixIcon={suffixIcon || <SuffixIconComp colors={['currentColor']} />}
              clearIcon={clearIcon || <BasicClear />}
              allowClear={allowClear}
              transitionName={transitionName || `${rootPrefixCls.value}-slide-up`}
              {...restProps}
              {...additionalOverrideProps}
              id={id}
              picker={mergedPicker}
              value={value.value}
              defaultValue={defaultValue.value}
              defaultPickerValue={defaultPickerValue.value}
              showToday={showToday}
              locale={locale!.lang}
              class={classNames(
                {
                  [`${pre}-${size.value}`]: size.value,
                  [`${pre}-borderless`]: !bordered,
                },
                attrs.class,
              )}
              prefixCls={pre}
              getPopupContainer={attrs.getCalendarContainer || getPopupContainer.value}
              generateConfig={generateConfig}
              prevIcon={slots.prevIcon?.() || <span class={`${pre}-prev-icon`} />}
              nextIcon={slots.nextIcon?.() || <span class={`${pre}-next-icon`} />}
              superPrevIcon={slots.superPrevIcon?.() || <span class={`${pre}-super-prev-icon`} />}
              superNextIcon={slots.superNextIcon?.() || <span class={`${pre}-super-next-icon`} />}
              components={Components}
              direction={direction.value}
              onChange={onChange}
              onOpenChange={onOpenChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onPanelChange={onPanelChange}
              onOk={onOk}
            />
          );
        };
      },
    });
  }

  const DatePicker = getPicker(undefined, 'ADatePicker');
  const WeekPicker = getPicker('week', 'AWeekPicker');
  const MonthPicker = getPicker('month', 'AMonthPicker');
  const YearPicker = getPicker('year', 'AYearPicker');
  const TimePicker = getPicker('time', 'TimePicker'); // 给独立组件 TimePicker 使用，此处名称不用更改
  const QuarterPicker = getPicker('quarter', 'AQuarterPicker');

  return {
    DatePicker,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker,
  };
}
