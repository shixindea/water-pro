import type { ComponentRef, Recordable, Nullable } from '../../_util/type';
import type { TableActionType, SizeType } from './types/table';
import type { TableProProps } from './props';

import { defineComponent, ref, computed, unref, onMounted, nextTick } from 'vue';
import { omit, isFunction } from 'lodash-es';
import { isNull, isUndefined } from '@fe6/shared';

import Table from '../../table';
import { FormPro, useForm } from '../../form-pro';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { useSortable } from '../../_util/hooks/use-sortable';

import { usePagination } from './hooks/use-pagination';
import { useColumns } from './hooks/use-columns';
import { useDataSource } from './hooks/use-data-source';
import { useLoading } from './hooks/use-loading';
import { useRowSelection } from './hooks/use-row-selection';
import { useTableScroll } from './hooks/use-table-scroll';
import { useCustomRow } from './hooks/use-custom-row';
// import { useTableStyle } from './hooks/use-table-style';
import { useTableHeader } from './hooks/use-table-header';
import { createTableContext } from './hooks/use-table-context';
import { useTableFooter } from './hooks/use-table-footer';
import { useTableForm } from './hooks/use-table-form';
import { useExpose } from './hooks/use-expose';

import { tableProProps } from './props';
import Card from '../../card';

export default defineComponent({
  name: 'ATablePro',
  components: {
    Table,
    [FormPro.name]: FormPro,
  },
  props: tableProProps(),
  emits: [
    'fetch-success',
    'fetch-error',
    'fetch-finally',
    'selection-change',
    'register',
    'row-click',
    'row-dbClick',
    'row-contextmenu',
    'row-mouseenter',
    'row-mouseleave',
    'edit-end',
    'edit-cancel',
    'edit-row-end',
    'edit-change',
    'drag-end',
  ],
  setup(props, { attrs, emit, slots, expose }) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro', props);

    const tableElRef = ref<ComponentRef>(null);
    const tableData = ref<Recordable[]>([]);

    const wrapRef = ref<Nullable<HTMLDivElement>>(null);
    const innerPropsRef = ref<Partial<TableProProps>>();

    const [registerForm, formActions] = useForm();

    const getProps = computed(() => {
      return { ...props, ...unref(innerPropsRef) } as TableProProps;
    });

    const { getLoading, setLoading } = useLoading(getProps);
    const {
      getPaginationInfo,
      getPagination,
      setPagination,
      setShowPagination,
      getShowPagination,
    } = usePagination(getProps);

    const {
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys,
    } = useRowSelection(getProps, tableData, emit as any);

    const {
      handleTableChange,
      getDataSourceRef,
      getDataSource,
      setTableData,
      fetch,
      getRowKey,
      reload,
      getAutoCreateKey,
      updateTableData,
    } = useDataSource(
      getProps,
      {
        tableData,
        getPaginationInfo,
        setLoading,
        setPagination,
        getFieldsValue: formActions.getFieldsValue,
        clearSelectedRowKeys,
      },
      emit as any,
    );

    const {
      getViewColumns,
      getColumns,
      setCacheColumnsByField,
      setColumns,
      getColumnsRef,
      getCacheColumns,
    } = useColumns(getProps, getPaginationInfo);

    const { getScrollRef, redoHeight } = useTableScroll(
      getProps,
      tableElRef,
      getColumnsRef,
      getRowSelectionRef,
      getDataSourceRef,
    );

    const { customRow } = useCustomRow(getProps, {
      setSelectedRowKeys,
      getSelectRowKeys,
      clearSelectedRowKeys,
      getAutoCreateKey,
      emit: emit as any,
    });

    // FEAT 去掉隔行变色，黑色模式下固定的 tr 没有
    // const { getRowClassName } = useTableStyle(getProps, prefixClsNew.value);

    const { getHeaderProps } = useTableHeader(getProps, slots);

    const { getFooterProps } = useTableFooter(getProps, getScrollRef, tableElRef, getDataSourceRef);

    const { getFormProps, replaceFormSlotKey, getFormSlotKeys, handleSearchInfoChange } =
      useTableForm(getProps, slots, fetch);

    const getBindValues = computed(() => {
      let propsData: Recordable = {
        size: 'middle',
        ...attrs,
        customRow,
        ...unref(getProps),
        ...unref(getHeaderProps),
        scroll: unref(getScrollRef),
        loading: unref(getLoading),
        tableLayout: 'fixed',
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        columns: unref(getViewColumns),
        pagination: unref(getPaginationInfo),
        dataSource: unref(getDataSourceRef),
        footer: unref(getFooterProps),
      };
      if (slots.expandedRowRender) {
        propsData = omit(propsData, 'scroll');
      }

      propsData = omit(propsData, 'class');

      return propsData;
    });

    const getEmptyDataIsShowTable = computed(() => {
      const { emptyDataIsShowTable, useSearchForm } = unref(getProps);
      if (emptyDataIsShowTable || !useSearchForm) {
        return true;
      }
      return !!unref(getDataSourceRef).length;
    });

    const initDragTable = async () => {
      await nextTick();
      const columnListEl = unref(tableElRef).$el;
      if (!columnListEl) {
        return;
      }
      const { initSortable } = useSortable(columnListEl.querySelector('.ant-table-tbody') as any, {
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (
            (isUndefined(oldIndex) && isNull(oldIndex)) ||
            (isUndefined(newIndex) && isNull(newIndex)) ||
            oldIndex === newIndex
          ) {
            return;
          }
          // Sort column
          const oldIndexNumber = oldIndex as number;
          const newIndexNumber = newIndex as number;
          emit('drag-end', oldIndexNumber, newIndexNumber);
        },
      });
      initSortable();
    };

    function setProps(props: Partial<TableProProps>) {
      innerPropsRef.value = { ...unref(innerPropsRef), ...props };
      if (innerPropsRef.value.draggable) {
        initDragTable();
      }
    }

    const tableAction: TableActionType = {
      reload,
      getSelectRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setPagination,
      setTableData,
      redoHeight,
      setSelectedRowKeys: setSelectedRowKeys as any,
      setColumns,
      setLoading,
      getLoading: unref(getLoading),
      getDataSource,
      setProps,
      getRowSelection,
      getPaginationRef: getPagination,
      getColumns,
      getCacheColumns,
      emit: emit as any,
      updateTableData,
      setShowPagination,
      getShowPagination,
      setCacheColumnsByField,
      getSize: () => {
        return unref(getBindValues).size as SizeType;
      },
    };

    createTableContext({ ...tableAction, wrapRef, getBindValues });

    useExpose<TableActionType>(tableAction);

    emit('register', tableAction, formActions);

    onMounted(() => {
      if (props.draggable) {
        initDragTable();
      }
    });

    expose({
      initDragTable,
    });

    return {
      tableElRef,
      getBindValues,
      getLoading,
      registerForm,
      handleSearchInfoChange,
      getEmptyDataIsShowTable,
      handleTableChange,
      // getRowClassName,
      clearSelectedRowKeys,
      wrapRef,
      tableAction,
      redoHeight,
      getFormProps,
      replaceFormSlotKey,
      getFormSlotKeys,
      prefixClsNew,
      columns: getViewColumns,
    };
  },
  methods: {
    moreDisplayCancelSelect() {
      this.clearSelectedRowKeys();
    },
  },
  render() {
    let formNode = null;

    if (this.getBindValues.useSearchForm) {
      formNode = (
        <FormPro
          submit-on-reset
          submit-button-options={{ loading: this.getLoading }}
          reset-button-options={{ loading: this.getLoading }}
          table-action={this.tableAction}
          label-align={this.formLabelALigin}
          label-col={this.formLabelCol}
          wrapper-col={this.formWrapperCol}
          onRegister={this.registerForm}
          onSubmit={this.handleSearchInfoChange}
          onAdvancedChange={this.redoHeight}
          {...(this.getFormProps as any)}
          v-slots={this.$slots}
        />
      );
    }

    const tableSlots = {
      ...this.$slots,
      emptyText: this.getBindValues.locale.emptyText,
    };

    let tableNode = (
      <Table
        v-show={this.getEmptyDataIsShowTable}
        ref="tableElRef"
        {...this.getBindValues}
        // row-class-name={this.getRowClassName}
        onChange={this.handleTableChange}
        onMoreDisplayCancelSelect={this.moreDisplayCancelSelect}
        v-slots={tableSlots}
      ></Table>
    );

    if (this.cardable) {
      const slotsCard = omit(this.$slots, ['cardTitle']);
      const cardProps: any = {};

      if (this.cardTitle) {
        cardProps.title = this.cardTitle;
      }

      if (isFunction(this.$slots.cardTitle)) {
        slotsCard.title = this.$slots.cardTitle;
        delete cardProps.title;
      }

      tableNode = (
        <Card {...cardProps} v-slots={slotsCard}>
          {tableNode}
        </Card>
      );
    }

    return (
      <div
        ref="wrapRef"
        class={[
          this.prefixClsNew,
          this.$attrs.class,
          {
            [`${this.prefixClsNew}-cardable`]: this.cardable,
            [`${this.prefixClsNew}-form-container`]: this.getBindValues.useSearchForm,
            [`${this.prefixClsNew}--inset`]: this.getBindValues.inset,
            [`${this.prefixClsNew}--drag`]: this.getBindValues.draggable,
          },
        ]}
      >
        {formNode}
        {tableNode}
      </div>
    );
  },
});
