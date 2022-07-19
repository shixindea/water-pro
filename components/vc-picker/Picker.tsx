/**
 * Removed:
 *  - getCalendarContainer: use `getPopupContainer` instead
 *  - onOk
 *
 * New Feature:
 *  - picker
 *  - allowEmpty
 *  - selectable
 *
 * Tips: Should add faq about `datetime` mode with `defaultValue`
 */

import type {
  PickerPanelBaseProps,
  PickerPanelDateProps,
  PickerPanelTimeProps,
} from './PickerPanel';
import isArray from 'lodash-es/isArray';
import isFunction from 'lodash-es/isFunction';
import PickerPanel from './PickerPanel';
import PickerTrigger from './PickerTrigger';
import { formatValue, isEqual, parseValue } from './utils/dateUtil';
import getDataOrAriaProps, { toArray } from './utils/miscUtil';
import type { ContextOperationRefProps } from './PanelContext';
import { useProvidePanel } from './PanelContext';
import type { CustomFormat, PickerMode } from './interface';
import { getDefaultFormat, getInputSize, elementsContains } from './utils/uiUtil';
import usePickerInput from './hooks/usePickerInput';
import useTextValueMapping from './hooks/useTextValueMapping';
import useValueTexts from './hooks/useValueTexts';
import useHoverValue from './hooks/useHoverValue';
import type { CSSProperties, HTMLAttributes, Ref } from 'vue';
import { computed, defineComponent, ref, toRef, watch } from 'vue';
import type { ChangeEvent, FocusEventHandler, MouseEventHandler } from '../_util/EventInterface';
import type { VueNode } from '../_util/type';
import type { AlignType } from '../vc-align/interface';
import useMergedState from '../_util/hooks/useMergedState';
import { warning } from '../vc-util/warning';
import classNames from '../_util/classNames';
import type { SharedTimeProps } from './panels/TimePanel';
import { useProviderTrigger } from '../vc-trigger/context';
import { legacyPropsWarning } from './utils/warnUtil';
import TagGroup from '../tag-group';

export type PickerRefConfig = {
  focus: () => void;
  blur: () => void;
};

export type PickerSharedProps<DateType> = {
  dropdownClassName?: string;
  dropdownAlign?: AlignType;
  popupStyle?: CSSProperties;
  transitionName?: string;
  placeholder?: string;
  allowClear?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  tabindex?: number;
  open?: boolean;
  defaultOpen?: boolean;
  /** Make input readOnly to avoid popup keyboard in mobile */
  inputReadOnly?: boolean;
  id?: string;

  // Value
  format?: string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[];

  // Render
  suffixIcon?: VueNode;
  clearIcon?: VueNode;
  prevIcon?: VueNode;
  nextIcon?: VueNode;
  superPrevIcon?: VueNode;
  superNextIcon?: VueNode;
  getPopupContainer?: (node: HTMLElement) => HTMLElement;
  panelRender?: (originPanel: VueNode) => VueNode;
  inputRender?: (props: HTMLAttributes) => VueNode;

  // Events
  onChange?: (value: DateType | DateType[] | null, dateString: string) => void;
  onOpenChange?: (open: boolean) => void;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onMousedown?: MouseEventHandler;
  onMouseup?: MouseEventHandler;
  onMouseenter?: MouseEventHandler;
  onMouseleave?: MouseEventHandler;
  onClick?: MouseEventHandler;
  onContextmenu?: MouseEventHandler;
  onKeydown?: (event: KeyboardEvent, preventDefault: () => void) => void;

  // WAI-ARIA
  role?: string;
  name?: string;

  autocomplete?: string;
  direction?: 'ltr' | 'rtl';
  showToday?: boolean;
  showTime?: boolean | SharedTimeProps<DateType>;
};

type OmitPanelProps<Props> = Omit<
  Props,
  'onChange' | 'hideHeader' | 'pickerValue' | 'onPickerValueChange'
>;

export type PickerBaseProps<DateType> = {} & PickerSharedProps<DateType> &
  OmitPanelProps<PickerPanelBaseProps<DateType>>;

export type PickerDateProps<DateType> = {} & PickerSharedProps<DateType> &
  OmitPanelProps<PickerPanelDateProps<DateType>>;

export type PickerTimeProps<DateType> = {
  picker: 'time';
  /**
   * @deprecated Please use `defaultValue` directly instead
   * since `defaultOpenValue` will confuse user of current value status
   */
  defaultOpenValue?: DateType;
} & PickerSharedProps<DateType> &
  Omit<OmitPanelProps<PickerPanelTimeProps<DateType>>, 'format'>;

export type PickerProps<DateType> =
  | PickerBaseProps<DateType>
  | PickerDateProps<DateType>
  | PickerTimeProps<DateType>;

// TMP type to fit for ts 3.9.2
type OmitType<DateType> = Omit<PickerBaseProps<DateType>, 'picker'> &
  Omit<PickerDateProps<DateType>, 'picker'> &
  Omit<PickerTimeProps<DateType>, 'picker'>;
type MergedPickerProps<DateType> = {
  picker?: PickerMode;
  type?: string;
  multipleMaxTagCount?: number;
  multipleMaxTagTextLength?: number;
  multipleClosable?: boolean;
  multipleTagGroupPopoverClass?: any;
} & OmitType<DateType>;

function Picker<DateType>() {
  return defineComponent<MergedPickerProps<DateType>>({
    name: 'Picker',
    inheritAttrs: false,
    props: [
      'prefixCls',
      'id',
      'tabindex',
      'dropdownClassName',
      'dropdownAlign',
      'popupStyle',
      'transitionName',
      'generateConfig',
      'locale',
      'inputReadOnly',
      'allowClear',
      'autofocus',
      'showTime',
      'showNow',
      'showHour',
      'showMinute',
      'showSecond',
      'picker',
      'format',
      'use12Hours',
      'value',
      'defaultValue',
      'open',
      'defaultOpen',
      'defaultOpenValue',
      'suffixIcon',
      'clearIcon',
      'disabled',
      'disabledDate',
      'placeholder',
      'getPopupContainer',
      'panelRender',
      'inputRender',
      'onChange',
      'onOpenChange',
      'onFocus',
      'onBlur',
      'onMousedown',
      'onMouseup',
      'onMouseenter',
      'onMouseleave',
      'onContextmenu',
      'onClick',
      'onKeydown',
      'onSelect',
      'direction',
      'autocomplete',
      'showToday',
      'renderExtraFooter',
      'dateRender',
      'type',
      'multipleMaxTagCount',
      'multipleMaxTagTextLength',
      'multipleClosable',
      'multipleTagGroupPopoverClass',
    ] as any,
    // slots: [
    //   'suffixIcon',
    //   'clearIcon',
    //   'prevIcon',
    //   'nextIcon',
    //   'superPrevIcon',
    //   'superNextIcon',
    //   'panelRender',
    // ],
    setup(props, { attrs, expose }) {
      const inputRef = ref(null);
      const picker = computed(() => props.picker ?? 'date');
      const needConfirmButton = computed(
        () => (picker.value === 'date' && !!props.showTime) || picker.value === 'time',
      );

      const isMultiple = computed(() => props.type === 'multiple');
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        legacyPropsWarning(props);
      }
      // ============================= State =============================
      const formatList = computed(() =>
        toArray(getDefaultFormat(props.format, picker.value, props.showTime, props.use12Hours)),
      );

      // Panel ref
      const panelDivRef = ref<HTMLDivElement>(null);
      const inputDivRef = ref<HTMLDivElement>(null);
      const containerRef = ref<HTMLDivElement>(null);

      // Real value
      const [mergedValue, setInnerValue] = useMergedState<DateType | DateType[]>(null, {
        value: toRef(props, 'value'),
        isMultiple,
        defaultValue: props.defaultValue,
      });
      const selectedValue = ref(mergedValue.value) as Ref<DateType | DateType[]>;
      const setSelectedValue = (val: DateType | DateType[]) => {
        selectedValue.value = val;
      };

      // Operation ref
      const operationRef = ref<ContextOperationRefProps>(null);

      // Open
      const [mergedOpen, triggerInnerOpen] = useMergedState(false, {
        value: toRef(props, 'open'),
        defaultValue: props.defaultOpen,
        postState: (postOpen) => (props.disabled ? false : postOpen),
        onChange: (newOpen) => {
          if (props.onOpenChange) {
            props.onOpenChange(newOpen);
          }

          if (!newOpen && operationRef.value && operationRef.value.onClose) {
            operationRef.value.onClose();
          }
        },
      });

      // ============================= Text ==============================
      const [valueTexts, firstValueText] = useValueTexts(selectedValue, {
        formatList,
        generateConfig: toRef(props, 'generateConfig'),
        locale: toRef(props, 'locale'),
        type: toRef(props, 'type'),
      });
      const [text, triggerTextChange, resetText] = useTextValueMapping({
        valueTexts,
        onTextChange: (newText) => {
          const inputDate = parseValue(newText, {
            locale: props.locale,
            formatList: formatList.value,
            generateConfig: props.generateConfig,
          });
          if (inputDate && (!props.disabledDate || !props.disabledDate(inputDate))) {
            setSelectedValue(inputDate);
          }
        },
      });

      // ============================ Trigger ============================
      const triggerChange = (newValue: DateType | DateType[] | null) => {
        const { onChange, generateConfig, locale } = props;
        setSelectedValue(newValue);
        setInnerValue(newValue);

        let isSameValue = false;

        if (!isMultiple.value) {
          isSameValue = isEqual(generateConfig, mergedValue.value as any, newValue);
        }
        if (onChange && !isSameValue) {
          onChange(
            newValue,
            newValue
              ? formatValue(newValue, { generateConfig, locale, format: formatList.value[0] })
              : '',
          );
        }
      };

      const triggerOpen = (newOpen: boolean) => {
        if (props.disabled && newOpen) {
          return;
        }
        triggerInnerOpen(newOpen);
      };

      const forwardKeydown = (e: KeyboardEvent) => {
        if (mergedOpen.value && operationRef.value && operationRef.value.onKeydown) {
          // Let popup panel handle keyboard
          return operationRef.value.onKeydown(e);
        }

        /* istanbul ignore next */
        /* eslint-disable no-lone-blocks */
        {
          warning(
            false,
            'Picker not correct forward Keydown operation. Please help to fire issue about this.',
          );
          return false;
        }
      };

      const onInternalMouseup: MouseEventHandler = (...args) => {
        if (props.onMouseup) {
          props.onMouseup(...args);
        }

        if (inputRef.value) {
          inputRef.value.focus();
          triggerOpen(true);
        }
      };

      // ============================= Input =============================
      const [inputProps, { focused, typing }] = usePickerInput({
        blurToCancel: needConfirmButton,
        open: mergedOpen,
        value: text,
        triggerOpen,
        forwardKeydown,
        isClickOutside: (target) =>
          !elementsContains(
            [panelDivRef.value, inputDivRef.value, containerRef.value],
            target as HTMLElement,
          ),
        onSubmit: () => {
          if (
            // When user typing disabledDate with keyboard and enter, this value will be empty
            !selectedValue.value ||
            // Normal disabled check
            (props.disabledDate && props.disabledDate(selectedValue.value))
          ) {
            return false;
          }

          triggerChange(selectedValue.value);
          triggerOpen(false);
          resetText();
          return true;
        },
        onCancel: () => {
          triggerOpen(false);
          setSelectedValue(mergedValue.value);
          resetText();
        },
        onKeydown: (e, preventDefault) => {
          props.onKeydown?.(e, preventDefault);
        },
        onFocus: (e: FocusEvent) => {
          props.onFocus?.(e);
        },
        onBlur: (e: FocusEvent) => {
          props.onBlur?.(e);
        },
      });

      // ============================= Sync ==============================
      // Close should sync back with text value
      watch([mergedOpen, valueTexts], () => {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);

          if (!valueTexts.value.length || valueTexts.value[0] === '') {
            triggerTextChange('');
          } else if (firstValueText.value !== text.value) {
            resetText();
          }
        }
      });

      // Change picker should sync back with text value
      watch(picker, () => {
        if (!mergedOpen.value) {
          resetText();
        }
      });

      // Sync innerValue with control mode
      watch(mergedValue, () => {
        // Sync select value
        setSelectedValue(mergedValue.value);
      });

      const [hoverValue, onEnter, onLeave] = useHoverValue(text, {
        formatList,
        generateConfig: toRef(props, 'generateConfig'),
        locale: toRef(props, 'locale'),
        type: toRef(props, 'type'),
      });

      const onContextSelect = (date: DateType, type: 'key' | 'mouse' | 'submit') => {
        if (type === 'submit' || (type !== 'key' && !needConfirmButton.value)) {
          // triggerChange will also update selected values
          triggerChange(date);
          if (!isMultiple.value) {
            triggerOpen(false);
          }
        }
      };

      useProvidePanel({
        operationRef,
        hideHeader: computed(() => picker.value === 'time'),
        panelRef: panelDivRef,
        onSelect: onContextSelect,
        open: mergedOpen,
        isMultiple,
        defaultOpenValue: toRef(props, 'defaultOpenValue'),
        onDateMouseenter: onEnter,
        onDateMouseleave: onLeave,
      });

      expose({
        focus: () => {
          if (inputRef.value) {
            inputRef.value.focus();
          }
        },
        blur: () => {
          if (inputRef.value) {
            inputRef.value.blur();
          }
        },
      });

      const getPortal = useProviderTrigger();

      return () => {
        const {
          prefixCls = 'rc-picker',
          id,
          tabindex,
          dropdownClassName,
          dropdownAlign,
          popupStyle,
          transitionName,
          generateConfig,
          locale,
          inputReadOnly,
          allowClear,
          autofocus,
          picker = 'date',
          defaultOpenValue,
          suffixIcon,
          clearIcon,
          disabled,
          placeholder,
          getPopupContainer,
          panelRender,
          onMousedown,
          onMouseenter,
          onMouseleave,
          onContextmenu,
          onClick,
          onSelect,
          direction,
          autocomplete = 'off',
          type,
          multipleMaxTagCount,
          multipleMaxTagTextLength,
          multipleClosable,
          multipleTagGroupPopoverClass,
        } = props;

        // ============================= Panel =============================
        const panelProps = {
          // Remove `picker` & `format` here since TimePicker is little different with other panel
          ...(props as Omit<MergedPickerProps<DateType>, 'picker' | 'format'>),
          ...attrs,
          class: classNames({
            [`${prefixCls}-panel-focused`]: !typing.value,
          }),
          style: undefined,
          pickerValue: undefined,
          onPickerValueChange: undefined,
          onChange: null,
        };

        let panelNode: VueNode = (
          <PickerPanel
            {...panelProps}
            generateConfig={generateConfig}
            value={selectedValue.value}
            locale={locale}
            type={type}
            tabindex={-1}
            onSelect={(date) => {
              onSelect?.(date);
              setSelectedValue(date);
            }}
            direction={direction}
            onPanelChange={(viewDate, mode) => {
              const { onPanelChange } = props;
              onLeave(true);
              onPanelChange?.(viewDate, mode);
            }}
          />
        );

        if (panelRender) {
          panelNode = panelRender(panelNode);
        }

        const panel = (
          <div
            class={`${prefixCls}-panel-container`}
            onMousedown={(e) => {
              e.preventDefault();
            }}
          >
            {panelNode}
          </div>
        );

        let suffixNode: VueNode;
        if (suffixIcon) {
          suffixNode = <span class={`${prefixCls}-suffix`}>{suffixIcon}</span>;
        }

        let clearNode: VueNode;
        if (
          allowClear &&
          (isMultiple.value && isArray(mergedValue.value)
            ? mergedValue.value.length > 0
            : mergedValue.value) &&
          !disabled
        ) {
          clearNode = (
            <span
              onMousedown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onMouseup={(e) => {
                e.preventDefault();
                e.stopPropagation();
                triggerChange(null);
                triggerOpen(false);
              }}
              class={`${prefixCls}-clear`}
              role="button"
            >
              {clearIcon || <span class={`${prefixCls}-clear-btn`} />}
            </span>
          );
        }

        const mergedInputProps: HTMLAttributes = {
          id,
          tabindex,
          disabled,
          readonly: inputReadOnly || typeof formatList.value[0] === 'function' || !typing.value,
          value: hoverValue.value || text.value,
          onInput: (e: ChangeEvent) => {
            triggerTextChange(e.target.value);
          },
          autofocus,
          placeholder,
          ref: inputRef,
          title: text.value,
          ...inputProps.value,
          size: getInputSize(picker, formatList.value[0], generateConfig),
          ...getDataOrAriaProps(props),
          autocomplete,
        };

        const inputNode = props.inputRender ? (
          props.inputRender(mergedInputProps)
        ) : (
          <input {...mergedInputProps} />
        );

        // 多选删除
        const mulitpleTagChange = (name: string, eventeType: string) => {
          if (eventeType === 'remove' && isArray(selectedValue.value)) {
            const theRemoveItem = (selectedValue.value as any).find(
              (sItem: DateType) =>
                formatValue(sItem, { generateConfig, locale, format: formatList.value[0] }) ===
                name,
            );
            if (theRemoveItem) {
              props.onChange(
                theRemoveItem,
                theRemoveItem
                  ? formatValue(theRemoveItem, {
                      generateConfig,
                      locale,
                      format: formatList.value[0],
                    })
                  : '',
              );
            }
          }
        };

        const multipleTagNode = () => {
          const theTagGroupValue = text.value.split(',').map((oneStr: string, oneIdx: number) => {
            let canRemove = true;
            if (isFunction(props.disabledDate)) {
              canRemove = !props.disabledDate(selectedValue.value[oneIdx]);
            }
            if (props.disabled) {
              canRemove = false;
            }
            return {
              id: oneIdx + 1,
              canRemove,
              name: oneStr,
            };
          });
          const theMoreSlot = () => {
            return multipleMaxTagCount ? `+${theTagGroupValue.length - multipleMaxTagCount}` : '';
          };
          let tagGroupNode: any;

          if (text.value) {
            tagGroupNode = (
              <TagGroup
                class={[
                  `${prefixCls}-multiple-taggroup`,
                  {
                    [`${prefixCls}-multiple-taggroup-disabled`]: props.disabled,
                  },
                ]}
                value={theTagGroupValue}
                maxTagCount={multipleMaxTagCount}
                maxTagTextLength={multipleMaxTagTextLength}
                color={'#f5f5f5'}
                closable={multipleClosable}
                overlayClassName={[
                  `${prefixCls}-multiple-popover`,
                  `${prefixCls}-multiple-popover-${picker}`,
                  {
                    [`${prefixCls}-multiple-popover-${picker}-scroll`]: theTagGroupValue.length > 6,
                  },
                  multipleTagGroupPopoverClass,
                ]}
                onChange={(name: string, eventeType: string) => mulitpleTagChange(name, eventeType)}
                v-slots={{
                  more: theMoreSlot,
                }}
              />
            );
          } else {
            tagGroupNode = placeholder;
          }

          return (
            <div class={`${prefixCls}-multiple`}>
              <div
                class={classNames(`${prefixCls}-input`, {
                  [`${prefixCls}-multiple-placeholder`]: !text.value,
                })}
                onClick={() => triggerOpen(true)}
              >
                {tagGroupNode}
              </div>
              {suffixNode}
              {clearNode}
            </div>
          );
        };

        // ============================ Body click ============================
        const onBodyClick = (): void => {
          if (isMultiple.value) {
            triggerOpen(false);
          }
        };

        // ============================ Warning ============================
        if (process.env.NODE_ENV !== 'production') {
          warning(
            !defaultOpenValue,
            '`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.',
          );
        }

        // ============================ Return =============================

        const popupPlacement = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
        return (
          <PickerTrigger
            visible={mergedOpen.value}
            popupStyle={popupStyle}
            prefixCls={prefixCls}
            dropdownClassName={dropdownClassName}
            dropdownAlign={dropdownAlign}
            getPopupContainer={getPopupContainer}
            transitionName={transitionName}
            popupPlacement={popupPlacement}
            direction={direction}
            type={type}
            onBodyClick={onBodyClick}
            v-slots={{
              popupElement: () => panel,
            }}
          >
            <div
              ref={containerRef}
              class={classNames(prefixCls, attrs.class, {
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-focused`]: focused.value,
                [`${prefixCls}-rtl`]: direction === 'rtl',
              })}
              style={attrs.style}
              onMousedown={onMousedown}
              onMouseup={onInternalMouseup}
              onMouseenter={onMouseenter}
              onMouseleave={onMouseleave}
              onContextmenu={onContextmenu}
              onClick={onClick}
            >
              {isMultiple.value ? (
                multipleTagNode()
              ) : (
                <div
                  class={classNames(`${prefixCls}-input`, {
                    [`${prefixCls}-input-placeholder`]: !!hoverValue.value,
                  })}
                  ref={inputDivRef}
                >
                  {inputNode}
                  {suffixNode}
                  {clearNode}
                </div>
              )}
              {getPortal('picker')}
            </div>
          </PickerTrigger>
        );
      };
    },
  });
}
export default Picker<any>();
