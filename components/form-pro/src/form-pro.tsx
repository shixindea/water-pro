import type { Ref } from 'vue';
import type { FormActionType, FormProSchema } from './types/form';
import type { AdvanceState } from './types/hooks';
import type { Recordable, Nullable } from '../../_util/type';
import type { FormProProps } from './props';

import {
  defineComponent,
  reactive,
  ref,
  computed,
  unref,
  onMounted,
  watch,
  toRefs,
  nextTick,
} from 'vue';
import { deepMerge, hasOwn, isBoolean, isFunction } from '@fe6/shared';
import isEmpty from 'lodash-es/isEmpty';

import ACard from '../../card';
import AAffix from '../../affix';
import Row from '../../row';
import Col from '../../col';
import Form from '../../form/Form';
import { useModalContext } from '../../modal-pro';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { getSlot, getSetupSlot } from '../../_util/props-util';

import FormItem from './components/form-item';
import FormAction from './components/form-action';

import { useFormValues } from './hooks/use-form-values';
import useAdvanced from './hooks/use-advanced';
import { useFormEvents } from './hooks/use-form-events';
import { createFormContext } from './hooks/use-form-context';
import { useAutoFocus } from './hooks/use-auto-focus';

import { formProProps } from './props';

export default defineComponent({
  name: 'AFormPro',
  components: { ACard, AAffix },
  props: formProProps(),
  emits: ['advanced-change', 'reset', 'submit', 'register'],
  setup(props, { emit, slots }) {
    const { prefixCls: prefixClsNew } = useConfigInject('form-pro', props);
    const formModel = reactive<Recordable>({});
    const modalFn = useModalContext();

    const advanceState = reactive<AdvanceState>({
      isAdvanced: true,
      hideAdvanceBtn: false,
      isLoad: false,
      actionSpan: 6,
    });

    const defaultValueRef = ref<Recordable>({});
    const isInitedDefaultRef = ref(false);
    const propsRef = ref<Partial<FormProProps>>({});
    const schemaRef = ref<Nullable<FormProSchema[]>>(null);
    const formElRef = ref<Nullable<FormActionType>>(null);

    // Get the basic configuration of the form
    const getProps = computed((): FormProProps => {
      const theProps = { ...props, ...unref(propsRef) } as FormProProps;
      advanceState.isAdvanced = !theProps.showAdvancedButton;
      if (theProps.advancedAll && theProps.showAdvancedButton) {
        advanceState.isAdvanced = true;
      }
      return theProps;
    });

    const getFormClass = computed(() => {
      return [
        prefixClsNew.value,
        {
          [`${prefixClsNew.value}-inline`]: getProps.value.layout === 'inline',
        },
      ];
    });

    // 由于有 children ，所以统一处理一下
    const getTrueSchema = (schemas: FormProSchema[]) => {
      const newSchema = [];

      schemas.forEach((sItem: FormProSchema) => {
        if (hasOwn(sItem, 'children') && sItem.children.length > 0) {
          sItem.children.forEach((cItem: FormProSchema) => {
            newSchema.push(cItem);
          });
        } else {
          newSchema.push(sItem);
        }
      });

      return newSchema;
    };

    const getOriginSchema = computed((): FormProSchema[] => {
      const schemas: FormProSchema[] = unref(schemaRef) || (unref(getProps).schemas as any);
      return schemas as FormProSchema[];
    });

    const getSchema = computed((): FormProSchema[] => {
      const schemas: FormProSchema[] = unref(schemaRef) || (unref(getProps).schemas as any);
      const trueSchemas: FormProSchema[] = getTrueSchema(schemas);

      return trueSchemas as FormProSchema[];
    });

    const { handleToggleAdvanced } = useAdvanced({
      advanceState,
      emit: emit as any,
      getProps,
      getSchema,
    });

    const { autoFocusFirstItem } = toRefs(props);

    const { handleFormValues, initDefault } = useFormValues({
      defaultValueRef,
      getSchema,
      formModel,
      getProps,
    });

    useAutoFocus({
      getSchema,
      autoFocusFirstItem,
      isInitedDefault: isInitedDefaultRef,
      formElRef: formElRef as Ref<FormActionType>,
    });

    const {
      handleSubmit,
      setFieldsValue,
      clearValidate,
      validate,
      validateFields,
      getFieldsValue,
      getChildrenFieldsValue,
      updateSchema,
      appendSchemaByField,
      removeSchemaByFiled,
      resetFields,
      scrollToField,
    } = useFormEvents({
      emit: emit as any,
      getProps,
      formModel,
      getSchema,
      defaultValueRef,
      formElRef: formElRef as Ref<FormActionType>,
      schemaRef: schemaRef as any, // Ref<FormProSchema[]>
      getOriginSchema: getOriginSchema as any, // Ref<FormProSchema[]>
      handleFormValues,
    });

    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit,
    });

    watch(
      () => unref(getProps).model,
      () => {
        const { model } = unref(getProps);
        if (!model || isEmpty(model)) {
          return;
        }
        setFieldsValue(model);
      },
      {
        immediate: true,
      },
    );

    watch(
      () => getSchema.value,
      (schema) => {
        nextTick(() => {
          //  Solve the problem of modal adaptive height calculation when the form is placed in the modal
          modalFn?.redoModalHeight?.();
        });
        if (unref(isInitedDefaultRef)) {
          return;
        }
        if (schema?.length) {
          initDefault();
          isInitedDefaultRef.value = true;
        }
      },
    );

    watch(
      () => getProps.value,
      async () => {
        await nextTick();
        if (!unref(getProps.value)) {
          return;
        }
        initDefault();
      },
    );

    async function setProps(formProps: FormProProps): Promise<void> {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
    }

    function setFormModel(key: string, value: any) {
      formModel[key] = value;
    }
    // 因为同一个表单 调用 updateSchema 的时候提交的数据还是之前的数据格式
    const resetAllModel = async () => {
      const resetSchemas = unref(getSchema);
      resetSchemas.forEach((sItem) => {
        if (sItem.defaultValue) {
          formModel[sItem.field] = sItem.defaultValue;
        }
      });
    };

    const formActionType: Partial<FormActionType> = {
      getFieldsValue,
      setFieldsValue,
      getChildrenFieldsValue,
      resetFields,
      resetAllModel,
      updateSchema,
      setProps,
      removeSchemaByFiled,
      appendSchemaByField,
      clearValidate,
      validateFields,
      validate,
      submit: handleSubmit,
      scrollToField,
    };
    const theSlots = {
      resetBefore: () => getSetupSlot(slots, 'resetBefore'),
      submitBefore: () => getSetupSlot(slots, 'submitBefore'),
      advanceBefore: () => getSetupSlot(slots, 'advanceBefore'),
      advanceAfter: () => getSetupSlot(slots, 'advanceAfter'),
    };

    onMounted(() => {
      initDefault();
      emit('register', formActionType);
    });

    return {
      handleToggleAdvanced,
      formModel,
      defaultValueRef,
      advanceState,
      getProps,
      formElRef,
      getSchema,
      getOriginSchema,
      formActionType,
      setFormModel,
      prefixClsNew,
      getFormClass,
      navActiveKey: ref(-1),
      theSlots,
      ...formActionType,
    };
  },
  methods: {
    getShow(schema: FormProSchema): { isIfShow: boolean } {
      const { ifShow } = schema;
      const { showAdvancedButton, mergeDynamicData } = this.getProps;

      const itemIsAdvanced = showAdvancedButton
        ? isBoolean(schema.isAdvanced)
          ? schema.isAdvanced
          : false
        : true;

      const getValues = ref({
        field: schema.field,
        model: this.formModel,
        values: {
          ...mergeDynamicData,
          ...(this.defaultValueRef as any),
          ...(this.formModel as any),
        } as Recordable,
        schema,
      });

      let isIfShow = true;

      if (isBoolean(ifShow)) {
        isIfShow = ifShow as boolean;
      }
      if (isFunction(ifShow)) {
        isIfShow = (ifShow as Function)(getValues);
      }

      isIfShow = (isIfShow && itemIsAdvanced) as boolean;

      return { isIfShow };
    },
    renderItems() {
      const isInline = this.getProps.layout === 'inline';
      const { $slots } = this;
      const schemaItems = [];
      this.getOriginSchema.forEach((schema: FormProSchema, sIdx: number) => {
        const { isIfShow } = this.getShow(schema);
        // FIX 4.0 开始用 isAdvanced=true 进行折叠判断
        if (isIfShow) {
          if (schema.children && schema.children.length > 0) {
            const childNodes = [];
            schema.children.forEach((schemaChildItem: FormProSchema) => {
              const inlineChildCol = hasOwn(schemaChildItem, 'inlineCol')
                ? schemaChildItem?.inlineCol
                : this.getProps.inlineCol;
              let childInnerFormItemNode = (
                <FormItem
                  table-action={this.getProps?.tableAction}
                  form-action-type={this.formActionType}
                  schema={schemaChildItem}
                  form-props={this.getProps}
                  all-default-values={this.defaultValueRef}
                  form-model={this.formModel}
                  set-form-model={this.setFormModel}
                  v-slots={$slots}
                />
              );
              if (isInline) {
                childInnerFormItemNode = <Col {...inlineChildCol}>{childInnerFormItemNode}</Col>;
              }
              childNodes.push(childInnerFormItemNode);
            });

            schemaItems.push(
              <a-card
                v-show={isIfShow}
                title={schema.label}
                class={`${this.prefixClsNew}-card ${this.prefixClsNew}-card-${schema.field}${
                  this.getProps.navAffix && sIdx === 0 ? ` ${this.prefixClsNew}-card-first` : ''
                }`}
                style="width: 100%"
              >
                {childNodes}
              </a-card>,
            );
          } else {
            const inlineCol = hasOwn(schema, 'inlineCol')
              ? schema?.inlineCol
              : this.getProps.inlineCol;
            let innerFormItem = (
              <FormItem
                table-action={this.getProps?.tableAction}
                form-action-type={this.formActionType}
                schema={schema}
                form-props={this.getProps}
                all-default-values={this.defaultValueRef}
                form-model={this.formModel}
                set-form-model={this.setFormModel}
                v-slots={$slots}
              />
            );
            if (isInline) {
              innerFormItem = <Col {...inlineCol}>{innerFormItem}</Col>;
            }
            schemaItems.push(innerFormItem);
          }
        }
      });

      // NOTE 搜索样式的处理
      if (isInline) {
        const actionsProps = {
          ...this.advanceState,
          // schemas: getSchema,
          onToggleAdvanced: this.handleToggleAdvanced,
        };
        schemaItems.push(
          <Col {...this.getProps.inlineActionCol}>
            <FormAction {...actionsProps} v-slots={this.theSlots} />
          </Col>,
        );
      }

      return isInline ? <Row {...this.getProps.inlineRow}>{schemaItems}</Row> : schemaItems;
    },
    async navClick(field: string, navScrollIdx: number) {
      await nextTick();
      const scrollNode = document.getElementsByClassName(`${this.prefixClsNew}-card-${field}`);

      if (scrollNode.length) {
        this.navActiveKey = navScrollIdx;
        scrollNode[0].scrollIntoView({
          // 滚动到指定节点
          // 值有start,center,end，nearest，当前显示在视图区域中间
          block: 'center',
          // 值有auto、instant,smooth，缓动动画（当前是慢速的）
          behavior: 'smooth',
        });
      }
    },
  },
  render() {
    const theFormProps: any = {
      ...this.$attrs,
      ...this.getProps,
      ref: 'formElRef',
      class: this.getFormClass,
      model: this.formModel,
    };

    const formHeaderNode = getSlot(this, 'formHeader');
    const formFooterNode = getSlot(this, 'formFooter');

    const actionsProps = {
      ...this.getProps,
      formProps: this.getProps,
      ...this.advanceState,
      schemas: this.getSchema,
      onToggleAdvanced: this.handleToggleAdvanced,
    };

    const actionInnerNode = <FormAction {...actionsProps} v-slots={this.theSlots} />;

    let actionNode = null;
    if (this.getProps.actionAffix) {
      actionNode = (
        <a-affix
          offset-bottom={this.getProps.actionOffsetBottom}
          target={this.getProps.actionTarget}
          style="width: 100%;"
          class={`${this.prefixClsNew}-footer-affix`}
        >
          {actionInnerNode}
        </a-affix>
      );
    } else {
      actionNode = actionInnerNode;
    }

    let navNode = null;
    const hasChilds =
      this.getOriginSchema.filter((schema: any) => schema.children && schema.children.length > 0)
        .length === this.getOriginSchema.length;
    if (this.getProps.navAffix && hasChilds) {
      const tabChild = [];

      this.getOriginSchema.forEach((schema: FormProSchema, sIdx: number) => {
        const { isIfShow } = this.getShow(schema);
        if (isIfShow) {
          tabChild.push(
            <span
              key={sIdx}
              class={`${this.prefixClsNew}-nav-item${
                this.navActiveKey === sIdx ? ` ${this.prefixClsNew}-nav-item-active` : ''
              }`}
              onClick={() => this.navClick(schema.field, sIdx)}
            >
              {schema.label}
            </span>,
          );
        }
      });

      navNode = (
        <a-affix
          offset-top={this.getProps.navOffsetTop}
          target={this.getProps.navTarget}
          style="width: 100%;"
          class={`${this.prefixClsNew}-nav-affix`}
        >
          <div class={`${this.prefixClsNew}-nav`}>{tabChild}</div>
        </a-affix>
      );
    }

    return (
      <Form {...theFormProps}>
        {navNode}
        {formHeaderNode}
        {this.renderItems()}
        {this.getProps?.layout !== 'inline' && actionNode}
        {formFooterNode}
      </Form>
    );
  },
});
