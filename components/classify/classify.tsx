import { defineComponent, ref, unref, onUpdated, onUnmounted, watchEffect, nextTick } from 'vue';
import { hasOwn, isUndefined } from '@fe6/shared';
import IconBytedEdit from '@fe6/icon-vue/lib/icons/byted-edit';
import IconBytedPlus from '@fe6/icon-vue/lib/icons/byted-plus';
import { isEmpty, isFunction, merge } from 'lodash-es';

import ASelect from '../select';
import { Option as SelectOption } from '../vc-select';
import ADivider from '../divider';
import AModal from '../modal';
import AButton from '../button';
import ADrawer from '../drawer';
import ATypography from '../typography';
import ASpin from '../spin';
import ASpace from '../space';
import { FormPro, useForm, FormProProps } from '../form-pro';
import { TablePro, TableAction, useTable } from '../table-pro';
import PRESENTED_IMAGE_SIMPLE from '../empty/simple';
import useConfigInject from '../_util/hooks/useConfigInject';
import useFetch from '../_util/hooks/use-fetch';
import { useRuleFormItem } from '../_util/hooks/use-form-item';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';

import zhCn from './locale/zh_CN';
import { classifyProps } from './props';

const VNodes = (_, { attrs }) => attrs.vnodes;

const createDefFormConfig: FormProProps = {
  schemas: [],
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
  },
  showResetButton: false,
  showSubmitButton: false,
};

export default defineComponent({
  name: 'AClassify',
  props: classifyProps,
  emits: ['on-edit', 'on-remove'],
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('classify', props);
    const [contextLocale] = useLocaleReceiver('Classify', zhCn);
    const locale = { ...contextLocale.value, ...props.locale };

    const [state] = useRuleFormItem(props);
    const { fetch } = useFetch(props.api);
    const tableProNode = ref();

    const [formRegister, formMethods] = useForm();

    const loading = ref(false);
    const options = ref<any[]>([]);

    const getOptionDatas = () => {
      if (!loading.value && isFunction(props.api)) {
        loading.value = true;
        try {
          fetch({
            success: (res: any) => {
              loading.value = false;
              options.value = res;
            },
            error: () => {
              loading.value = false;
            },
            params: props.apiParams,
          });
        } catch (err) {
          loading.value = false;
        }
      }
    };

    const getOptionsTime = ref(1);

    const dropdownVisibleChange = (dropDownIsOpen: boolean) => {
      if (
        dropDownIsOpen &&
        !unref(options).length &&
        getOptionsTime.value < 2 &&
        !props.loopGetOptions
      ) {
        getOptionsTime.value += props.loopGetOptions ? 0 : 1;
        getOptionDatas();
      }
    };

    const resetAjaxApi = () => {
      getOptionsTime.value = 1;
      options.value = [];
    };

    const isEdit = ref(-1);
    const createModalStatus = ref(false);
    const createLoading = ref(false);
    const { fetch: createFecth } = useFetch(props.createApi);
    const { fetch: editFecth } = useFetch(props.editApi);

    const removeLoadingId = ref('');
    const { fetch: removeFecth } = useFetch(props.removeApi);

    const [tableRegister, tableMethods] = useTable({
      draggable: props.drawerTableDraggable,
      canResize: true,
      pagination: false,
      dataSource: [],
      columns: [
        ...props.drawerTableColumns,
        {
          dataIndex: 'action',
          key: 'action',
          slots: { customRender: 'action', title: 'actionTitle' },
        },
      ],
    });

    const drawerStatus = ref(false);
    const drawerLoading = ref(false);
    const { fetch: drawerFecth } = useFetch(props.drawerTableApi);

    const { fetch: drawerDragFecth } = useFetch(props.drawerTableDragApi);

    const tableDatas = ref([]);
    const getTableDatas = () => {
      if (!drawerLoading.value) {
        drawerLoading.value = true;
        try {
          drawerFecth({
            success: (res: any) => {
              tableDatas.value = res;
              tableMethods.setTableData(res);
              drawerLoading.value = false;
              // Fix nextTick 不能完全渲染完， a-table-tbody 中容易没有内容，拖拽无法初始化
              if (props.drawerTableDraggable) {
                setTimeout(() => {
                  tableProNode.value.initDragTable();
                }, 300);
              }
            },
            error: () => {
              drawerLoading.value = false;
            },
            params: props.drawerTableApiParams,
          });
        } catch (err) {
          drawerLoading.value = false;
        }
      }
    };

    const tableDragDatas = (dragList: any) => {
      if (!drawerLoading.value) {
        drawerLoading.value = true;
        try {
          drawerDragFecth({
            success: () => {
              drawerLoading.value = false;
            },
            error: () => {
              drawerLoading.value = false;
            },
            params: dragList,
          });
        } catch (err) {
          drawerLoading.value = false;
        }
      }
    };

    const apiValue = ref('');
    watchEffect(() => {
      apiValue.value = (state as any).value || props.value;
      if (props.selectOptions) {
        options.value = props.selectOptions;
      }
      if (
        !isUndefined(apiValue.value) &&
        String(apiValue.value).length > 0 &&
        !loading.value &&
        !options.value.length
      ) {
        getOptionDatas();
      }
    });

    onUpdated(() => {
      if (!unref(options).length) {
        getOptionsTime.value = 0;
      }
    });

    onUnmounted(() => {
      getOptionsTime.value = 0;
    });

    return {
      tableProNode,
      prefixClsNew,
      dropdownVisibleChange,
      resetAjaxApi,
      loading,
      options,
      apiValue,
      createModalStatus,
      formRegister,
      formMethods,
      createFecth,
      isEdit,
      editFecth,
      removeFecth,
      removeLoadingId,
      createLoading,
      drawerStatus,
      drawerLoading,
      getTableDatas,
      tableDragDatas,
      tableDatas,
      tableRegister,
      tableMethods,
      getOptionDatas,
      locale,
    };
  },
  methods: {
    async handleCreateModalStatus() {
      this.createModalStatus = !this.createModalStatus;
      await nextTick();
      if (this.createModalStatus && !isEmpty(this.createFormConfig)) {
        this.formMethods.setProps(merge(createDefFormConfig, this.createFormConfig));
      }
    },
    async createOk() {
      if (!this.createLoading) {
        const myFormData = await this.formMethods.validateFields();
        if (myFormData) {
          this.createLoading = true;
          const params =
            this.isEdit > -1
              ? {
                  ...myFormData,
                  id: this.isEdit,
                  ...this.editApiParams,
                }
              : {
                  ...myFormData,
                  ...this.createApiParams,
                };
          this[this.isEdit > -1 ? 'editFecth' : 'createFecth']({
            success: async () => {
              this.createLoading = false;
              this.resetAjaxApi();
              if (this.drawerStatus) {
                this.getTableDatas();
              }
              await this.createCandel();
              this.getOptionDatas();
              this.$emit('on-edit');
            },
            error: () => {
              this.createLoading = false;
            },
            params,
          });
        }
      }
    },
    async createCandel() {
      await this.formMethods.resetFields();
      this.handleCreateModalStatus();
      this.isEdit = -1;
    },
    handleDrawerStatus() {
      this.drawerStatus = !this.drawerStatus;
      if (this.drawerStatus) {
        this.getTableDatas();
      }
    },
    handleDelete(removeData: any) {
      if (this.removeTip && !this.removeLoadingId) {
        this.removeLoadingId = removeData[this.removeKey];
        AModal.confirm({
          title: this.removeTip,
          okText: '确定',
          cancelText: '取消',
          onOk: () => {
            this.removeFecth({
              success: async () => {
                this.removeLoadingId = '';
                this.resetAjaxApi();
                this.getTableDatas();
                this.getOptionDatas();
                this.$emit('on-remove');
              },
              error: () => {
                this.removeLoadingId = '';
              },
              params: {
                [this.removeKey]: [this.removeLoadingId],
                ...this.removeApiParams,
              },
            });
          },
          onCancel: () => {
            this.removeLoadingId = '';
          },
        });
      }
    },
    async handleEdit(editData: any) {
      this.isEdit = editData.id;
      this.handleCreateModalStatus();
      await nextTick();
      await this.formMethods.setFieldsValue(editData);
      this.formMethods.clearValidate();
    },
    tableDragEnd(oldNum: number, newNum: number) {
      const dragList = this.tableDatas.map((tdItem: any) => tdItem[this.drawerTableDragKey]);
      if (oldNum > newNum) {
        dragList.splice(newNum, 0, dragList[oldNum]);
        dragList.splice(oldNum + 1, 1);
      } else {
        dragList.splice(newNum + 1, 0, dragList[oldNum]);
        dragList.splice(oldNum, 1);
      }
      this.tableDragDatas(dragList);
    },
  },
  render() {
    let notFoundNode = (
      <ASpace direction="vertical" class={`${this.prefixClsNew}-loading`}>
        {this.loading ? (
          <ASpin color="rgba(0, 0, 0, 0.25)" size="large" />
        ) : (
          <PRESENTED_IMAGE_SIMPLE />
        )}
        <ATypography.Text class={`${this.prefixClsNew}-loading-text`} type="secondary">
          {this.locale?.loading || '正在加载'}
        </ATypography.Text>
      </ASpace>
    );

    const selectSlot: any = {
      notFoundContent: () => notFoundNode,
    };

    const createIconNode = this.createLoading ? (
      <ASpin class={`${this.prefixClsNew}-icon`} size="small" />
    ) : (
      <IconBytedPlus class={`${this.prefixClsNew}-icon`} colors={['currentColor']} />
    );
    const drawerIconNode = this.drawerLoading ? (
      <ASpin class={`${this.prefixClsNew}-icon`} size="small" />
    ) : (
      <IconBytedEdit class={`${this.prefixClsNew}-icon`} colors={['currentColor']} />
    );

    const dropdownRender = ({ menuNode }: any) => {
      const btnProps: any = {
        size: 'small',
        type: 'link',
        disabled: this.loading,
      };
      let addNode: any;
      if (this.showDropdownAdd) {
        addNode = (
          <AButton {...btnProps} onClick={this.handleCreateModalStatus}>
            {createIconNode} {this.locale?.dropdownAdd || '添加'}
          </AButton>
        );
      }

      const theOptBtnSlot = this.$slots.optionButtonSlot
        ? this.$slots.optionButtonSlot?.({ loading: this.loading })
        : null;

      let mangeNode: any;
      if (this.showDropdownManger) {
        mangeNode = (
          <AButton size="small" type="link" onClick={this.handleDrawerStatus}>
            {drawerIconNode} {this.classifyLang?.dropdownHandle || '管理'}
          </AButton>
        );
      }

      return (
        <div>
          <VNodes vnodes={menuNode} />
          <ADivider style={{ margin: '4px 0' }} />
          <div class={`${this.prefixClsNew}-extend`} onMousedown={(e) => e.preventDefault()}>
            {addNode}
            {mangeNode}
            {theOptBtnSlot}
          </div>
        </div>
      );
    };

    selectSlot.dropdownRender = dropdownRender;

    const optNodes = [];
    const optChilds = this.options.filter(
      (oItem: any) => hasOwn(oItem, 'children') && oItem.children.length > 0,
    );

    if (optChilds.length) {
      optChilds.forEach((oItem: any, oIdx: number) => {
        const ocNode = [];
        oItem.children.forEach((ocItem: any, ocIdx: number) => {
          const childInner = ocItem[this.labelKey];
          ocNode.push(
            <ASelect.Option key={`${oIdx}-${ocIdx}-opts`} value={ocItem[this.valueKey]}>
              {childInner}
            </ASelect.Option>,
          );
        });
        optNodes.push(
          <ASelect.OptGroup
            label={oItem[this.labelKey]}
            key={oIdx}
            v-slots={{ default: () => ocNode }}
          ></ASelect.OptGroup>,
        );
      });
    } else {
      this.options.forEach((oItem: any, oIdx: number) => {
        const childInner = oItem[this.labelKey];
        optNodes.push(
          <SelectOption key={oIdx} value={oItem[this.valueKey]}>
            {childInner}
          </SelectOption>,
        );
      });
    }

    selectSlot.default = () => optNodes;

    const tableActionNode = ({ record }: any) => {
      return (
        <TableAction
          actions={[
            {
              label: this.locale?.editTitle || '编辑',
              disabled: this.drawerTableEditDisabled(record),
              onClick: () => this.handleEdit(record),
            },
            {
              label: this.locale?.remove || '删除',
              danger: true,
              disabled: this.drawerTableRemoveDisabled(record),
              loading: this.removeLoadingId === record[this.removeKey],
              onClick: () => this.handleDelete(record),
            },
          ]}
        />
      );
    };

    const tableTitleActionNode = () => {
      return this.locale?.action || '操作';
    };

    const tableProps = {
      draggable: this.drawerTableDraggable,
      onRegister: this.tableRegister,
      onDragEnd: this.tableDragEnd,
    };

    return (
      <>
        <ASelect
          {...this.$attrs}
          value={this.apiValue}
          loading={this.loading}
          virtual
          class={`${this.prefixClsNew}-select`}
          filter-option={this.filterOption}
          onDropdownVisibleChange={this.dropdownVisibleChange}
          v-slots={selectSlot}
        />
        <AModal
          visible={this.createModalStatus}
          centered
          cancel-text={this.locale?.cancelText || '取消'}
          ok-text={this.locale?.okText || '确定'}
          mask-closable={false}
          z-index={1002}
          title={
            this.isEdit > -1 ? this.locale?.editTitle || '编辑' : this.locale?.createTitle || '添加'
          }
          okButtonProps={{
            loading: this.createLoading,
          }}
          onOk={this.createOk}
          onCancel={this.createCandel}
        >
          <FormPro onRegister={this.formRegister} />
        </AModal>
        <ADrawer
          visible={this.drawerStatus}
          title={this.locale?.drawerTitle || '管理'}
          width={this.drawerWidth}
          onClose={this.handleDrawerStatus}
          placement="right"
          zIndex={this.drawerZIndex}
          class={`${this.prefixClsNew}-drawer${
            this.drawerTableDraggable ? ` ${this.prefixClsNew}-drawer-drag` : ''
          }`}
        >
          <AButton block={true} onClick={this.handleCreateModalStatus}>
            <IconBytedPlus />{' '}
            {this.drawerCreateButtonText || this.locale?.drawerCreateButtonText || '添加'}
          </AButton>
          <ASpin spinning={this.drawerLoading}>
            <TablePro
              {...tableProps}
              ref="tableProNode"
              v-slots={{
                action: tableActionNode,
                actionTitle: tableTitleActionNode,
              }}
            />
          </ASpin>
        </ADrawer>
      </>
    );
  },
});
