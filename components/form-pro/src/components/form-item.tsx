import { PropType, defineComponent, computed, unref, toRefs, CSSProperties } from 'vue';
import type { ValidationRule } from '../../../form/Form';
// import type { TableActionType } from '../../../table-pro';
import type { FormProProps } from '../props';
import type { FormActionType, FormSchema, RenderCallbackParams } from '../types/form';
import type { Recordable, Nullable } from '../../../_util/type';

import { upperFirst, cloneDeep, isPlainObject, isEmpty, isBoolean, isFunction } from 'lodash-es';

import Form from '../../../form/Form';
import BasicHelp from '../../../basic-help';

import { getSetupSlot } from '../../../_util/props-util';
import PropTypes from '../../../_util/vue-types';
import { useLocaleReceiver } from '../../../locale-provider/LocaleReceiver';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import { createPlaceholderMessage, setComponentRuleType } from '../helper';
import { componentMap } from '../component-map';
import { useItemLabelWidth } from '../hooks/use-label-width';
import { FormProLocale } from '../../interface';
import zhCn from '../../locale/zh_CN';

export default defineComponent({
  name: 'AFormProItem',
  inheritAttrs: false,
  props: {
    schema: {
      type: Object as PropType<FormSchema>,
      default: () => {},
    },
    formProps: {
      type: Object as PropType<FormProProps>,
      default: {} as FormProProps,
    },
    allDefaultValues: {
      type: Object as PropType<Recordable>,
      default: () => {},
    },
    formModel: {
      type: Object as PropType<Recordable>,
      default: () => {},
    },
    setFormModel: {
      type: Function as PropType<(key: string, value: any) => void>,
      default: null,
    },
    tableAction: {
      type: Object as PropType<any>,
    },
    formActionType: {
      type: Object as PropType<FormActionType>,
    },
    prefixCls: PropTypes.string,
    locale: { type: Object as PropType<FormProLocale> },
  },
  setup(props, { slots }) {
    const [contextLocale] = useLocaleReceiver('FormPro', zhCn);
    const locale = { ...contextLocale.value, ...props.locale };
    const { prefixCls: prefixClsNew } = useConfigInject('form-pro', props);

    const { schema, formProps } = toRefs(props) as any;

    const itemLabelWidthProp = useItemLabelWidth(schema, formProps);

    const getValues = computed((): RenderCallbackParams => {
      const { allDefaultValues, formModel, schema } = props;
      const { mergeDynamicData } = props.formProps;
      return {
        field: schema.field,
        model: formModel as any,
        values: {
          ...mergeDynamicData,
          ...(allDefaultValues as any),
          ...(formModel as any),
        } as Recordable,
        schema,
      };
    });

    const getComponentsProps = computed(() => {
      const { schema, tableAction, formModel, formActionType } = props;
      const { componentProps = {} } = schema;
      if (!isFunction(componentProps)) {
        return componentProps;
      }
      return (
        (componentProps as Function)({
          schema,
          tableAction,
          formModel,
          formActionType,
        }) ?? {}
      );
    });

    const getDisable = computed(() => {
      const { disabled: globDisabled } = props.formProps;
      const { dynamicDisabled } = props.schema;
      const { disabled: itemDisabled = false } = unref(getComponentsProps);
      let disabled = !!globDisabled || itemDisabled;
      if (isBoolean(dynamicDisabled)) {
        disabled = dynamicDisabled;
      }

      if (isFunction(dynamicDisabled)) {
        disabled = (dynamicDisabled as Function)(getValues);
      }
      return disabled;
    });

    function handleRules(): ValidationRule[] {
      const {
        rules: defRules = [],
        component,
        rulesMessageJoinLabel,
        label,
        dynamicRules,
        required,
      } = props.schema;

      // 因为 vite 中始终检测不到 select value 的变化
      if (isFunction(dynamicRules)) {
        return (dynamicRules as Function)(getValues) as ValidationRule[];
      }

      let rules: ValidationRule[] = cloneDeep(defRules) as ValidationRule[];

      if ((!rules || rules.length === 0) && required) {
        rules = [{ required, type: 'string' }];
      }

      const requiredRuleIndex: number = rules.findIndex(
        (rule) => Reflect.has(rule, 'required') && !Reflect.has(rule, 'validator'),
      );
      const { rulesMessageJoinLabel: globalRulesMessageJoinLabel } = props.formProps;

      if (requiredRuleIndex !== -1) {
        const rule = rules[requiredRuleIndex];
        if (rule.required && component) {
          if (!Reflect.has(rule, 'type')) {
            rule.type = 'string';
          }
          const joinLabel = Reflect.has(props.schema, 'rulesMessageJoinLabel')
            ? rulesMessageJoinLabel
            : globalRulesMessageJoinLabel;

          rule.message =
            rule.message ||
            `${createPlaceholderMessage(component, locale)}${joinLabel ? label : ''}`;

          if (component.includes('Input') || component.includes('Textarea')) {
            rule.whitespace = true;
          }

          setComponentRuleType(rule, component);
        }
      }

      // Maximum input length rule check
      //TODO 多语言
      const characterInx = rules.findIndex((val) => val.max);
      if (characterInx !== -1 && !rules[characterInx].validator) {
        rules[characterInx].message =
          rules[characterInx].message || `字符数应小于${rules[characterInx].max}位`;
      }
      return rules;
    }

    function renderComponent() {
      const {
        component,
        field,
        changeEvent = 'change',
        valueLayout = (attr: unknown) => attr,
        valueField,
        componentSlots,
      } = props.schema;

      const isCheck = component && ['Switch', 'Checkbox'].includes(component);

      const eventKey = `on${upperFirst(changeEvent)}`;

      const on = {
        [eventKey]: (e: Nullable<Recordable>, params: any) => {
          if (propsData[eventKey]) {
            propsData[eventKey](e);
          }

          const target = e ? e.target : null;

          const value = target ? (isCheck ? target.checked : target.value) : e;

          props.setFormModel(field, valueLayout(value, field, props, params));
        },
      };
      const Comp: any = componentMap.get(component) as typeof defineComponent;

      const { autoSetPlaceHolder, size } = props.formProps;
      const propsData: Recordable = {
        allowClear: true,
        getPopupContainer: (trigger: Element) => trigger.parentNode,
        size,
        ...unref(getComponentsProps),
        disabled: unref(getDisable),
      };

      const isCreatePlaceholder = !propsData.disabled && autoSetPlaceHolder;
      // Fixed 修复之前是空，问题是 RangPicker 的时候设置无效
      let placeholder = unref(getComponentsProps)?.placeholder;
      // RangePicker place is an array
      if (
        isCreatePlaceholder &&
        component !== 'RangePicker' &&
        component !== 'RangeGroupPicker' &&
        component !== 'TimeRangePicker' &&
        component
      ) {
        placeholder =
          unref(getComponentsProps)?.placeholder || createPlaceholderMessage(component, locale);
      }
      propsData.placeholder = placeholder;
      propsData.codeField = field;
      propsData.formValues = unref(getValues);

      const bindValue: Recordable = {
        [valueField || (isCheck ? 'checked' : 'value')]: props.formModel[field],
      };

      const compAttr: Recordable = {
        ...propsData,
        ...on,
        ...bindValue,
      };

      return <Comp {...compAttr} v-slots={componentSlots} />;
    }

    function renderLabelHelpMessage() {
      const { label, helpMessage, helpComponentProps, subLabel } = props.schema;
      let labelInnerTrue = '';
      if (isFunction(label)) {
        labelInnerTrue = (label as Function)(getValues);
      } else {
        labelInnerTrue = label as string;
      }
      const renderLabel = subLabel ? (
        <span>
          {labelInnerTrue} <span style="color:#00000073">{subLabel}</span>
        </span>
      ) : (
        labelInnerTrue
      );
      if (!helpMessage || (Array.isArray(helpMessage) && helpMessage.length === 0)) {
        return renderLabel;
      }
      return (
        <span>
          {renderLabel}
          <BasicHelp
            placement="right"
            class={`${prefixClsNew.value}-help`}
            text={helpMessage}
            {...helpComponentProps}
          />
        </span>
      );
    }

    function renderItem() {
      const {
        label,
        slot,
        render,
        field,
        suffix,
        component,
        end,
        wrapperWidth,
        suffixStyle,
        endStyle,
      } = props.schema;
      const { labelCol, wrapperCol } = unref(itemLabelWidthProp);

      const { colon } = props.formProps;

      const getContent = () => {
        return slot
          ? getSetupSlot(slots, slot, unref(getValues))
          : render
          ? (render as Function)(getValues)
          : renderComponent();
      };

      const showSuffix = !!suffix;

      const getSuffix = isFunction(suffix) ? (suffix as Function)(getValues) : suffix;

      const showEnd = !!end;

      const getEnd = isFunction(end) ? (end as Function)(getValues) : end;

      const isAddDiyClassName = () => {
        const whiteListOfAddName = ['InputSmsCode', 'ColorPicker', 'TagGroup'];
        return whiteListOfAddName.includes(component);
      };
      const isInlineCpt = () => {
        const inlineCpt = ['InputSmsCode', 'InputNumber'];
        return inlineCpt.includes(component);
      };

      const isTagModalListClassName = () => {
        const whiteListOfTagModalListName = [];
        return whiteListOfTagModalListName.includes(component);
      };

      let realWrapperCol = wrapperCol;
      // 如果没有 label
      if (!renderLabelHelpMessage()) {
        realWrapperCol = { span: 24 };
      }

      let contentNode = null;
      const contentInnerNode = wrapperWidth ? (
        <div style={{ width: wrapperWidth, display: 'inline-block' }}>{getContent()}</div>
      ) : (
        getContent()
      );

      if (showEnd) {
        let eStyle: CSSProperties = {};
        if (isPlainObject(endStyle) && !isEmpty(endStyle)) {
          eStyle = { ...endStyle };
        }
        if (isFunction(endStyle)) {
          eStyle = { ...endStyle(getValues) };
        }
        contentNode = (
          <>
            {contentInnerNode}
            <div class={`${prefixClsNew.value}-end`} style={eStyle}>
              {getEnd}
            </div>
          </>
        );
      } else {
        let sStyle: CSSProperties = {
          display: 'flex',
          'align-items': 'center',
        };
        if (isPlainObject(suffixStyle) && !isEmpty(suffixStyle)) {
          sStyle = { ...suffixStyle };
        }
        if (isFunction(suffixStyle)) {
          sStyle = { ...suffixStyle(getValues) };
        }
        contentNode = (
          <div style={sStyle}>
            {contentInnerNode}
            {showSuffix && <span class={`${prefixClsNew.value}-suffix`}>{getSuffix}</span>}
          </div>
        );
      }

      let labelTrue = '';

      if (isFunction(label)) {
        labelTrue = (label as Function)(getValues);
      } else {
        labelTrue = label as string;
      }

      return (
        <Form.Item
          name={field}
          colon={labelTrue && labelTrue.trim() === '' ? false : colon}
          class={{
            [`${prefixClsNew.value}-item-suffix`]: showSuffix,
            [`${prefixClsNew.value}-item-diy`]: isAddDiyClassName(),
            [`${prefixClsNew.value}-item-special`]: isTagModalListClassName(),
            [`${prefixClsNew.value}-item-smscode`]: isInlineCpt(),
          }}
          label={renderLabelHelpMessage()}
          rules={handleRules()}
          labelCol={labelCol}
          wrapperCol={realWrapperCol}
        >
          {contentNode}
        </Form.Item>
      );
    }
    return () => {
      const { colSlot, renderColContent, component } = props.schema;
      if (!componentMap.has(component)) {
        return null;
      }

      const values = unref(getValues);
      const getContent = () => {
        return colSlot
          ? getSetupSlot(slots, colSlot, values)
          : renderColContent
          ? (renderColContent as Function)(getValues)
          : renderItem();
      };

      return getContent();
    };
  },
});
