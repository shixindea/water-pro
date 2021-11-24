import { defineComponent, PropType, watch, watchEffect, unref, ref } from "vue";
import {
  LoadingOutlined,
} from '@ant-design/icons-vue';
import { isUndefined } from '@fe6/shared';

import { ModalPro, useModal } from '../../modal-pro';
import { BasicArrow } from '../../basic-arrow';
import Tree from '../../tree';
import {Row, Col} from '../../grid';
import Divider from '../../divider';
import ContainerScroll from '../../container-scroll';

import PropTypes from '../../_util/vue-types';
import { useRuleFormItem } from '../../_util/hooks/use-form-item';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { tuple } from '../../_util/type';
import WTitleRender from '../../_util/render';
import useFetch from '../../_util/hooks/use-fetch';
import { getClassName } from '../../_util/classNames';

import { convertDataToTree } from './utils';

export default defineComponent({
  props: {
    value: Array as PropType<any[]>,
    /**
     * @default{title,key,children}
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: PropTypes.object.def({
      children: 'children',
      title: 'name',
      key: 'userid',
      alias: 'alias',
      position: 'position',
      avatar: 'avatar',
      roleName: 'roleName',
      roleCode: 'roleCode',
      users: 'users'
    }),
    maxTagTextLength: PropTypes.number.def(8), // 文字 4 个字
    maxTagCount: PropTypes.number.def(2), // 标签 4 个字
    createable: PropTypes.bool,
    closable: PropTypes.bool.def(true),
    size: PropTypes.oneOf(tuple('small', 'large', 'default')),
    placeholder: PropTypes.string.def('添加成员'),
    type: PropTypes.oneOf(['select', '']).def('select'),
    prefixCls: PropTypes.string,
    modalTitle: PropTypes.string.def('选择成员'),
    checkMode: PropTypes.oneOf(tuple('radio', 'checkbox')).def('checkbox'),
    maxCheckCount: PropTypes.number,
    titleRightRender: PropTypes.func,
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
    apiParams: PropTypes.object.def({}),
    beforeClose: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: () => {
        return new Promise(reslove => {
          reslove(true);
        });
      },
    },
    beforeOk: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: ({ success }: any) => {
        return new Promise(reslove => {
          success();
          reslove(true);
        });
      },
    },
    options: PropTypes.array.def([]),
    disabled: PropTypes.bool,
    modalProps: PropTypes.object.def({}),
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-user', props);
    const [state] = useRuleFormItem(props);
    const { register: registerModal, methods: modalMethods } = useModal();
    const { openModal, getVisible } = modalMethods;
    const loading = ref(false);
    const userIdList = ref<Recordable[]>([]);
    const userAllList = ref<Recordable[]>([])


    const copyCheckData = () => {
    };
    const resetCheckData = () => {
    };

    const afterGetOptions = (newOptions: any, isInit?: boolean) => {
      userAllList.value = newOptions;
      loading.value = false;
      if (!isInit) {
        copyCheckData();
        openModal();
      }
    };

    const getTagDatas = async (isInit?: boolean) => {
      if (!loading.value) {
        loading.value = true;
        if (props.api) {
          const { fetch } = useFetch(props.api);
          fetch({
            success: (res: any) => {
              loading.value = false;
              afterGetOptions(res, isInit);
            },
            error: () => {
              loading.value = false;
            },
            params: props.apiParams,
          });
        } else {
          afterGetOptions(props.options, isInit);
        }
      }
    };

    const getUserList = async (isInit?: boolean) => {
      if (!userAllList.value.length) {
        await getTagDatas(isInit);
      } else {
        if (!isInit) {
          copyCheckData();
          openModal();
        }
      }
    };

    const showModal = async () => {
      if (!props.disabled) {
        await getUserList();
      }
    };

    const checkValue = async () => {
      if (userIdList.value.length) {
        await getUserList(true);
      }
    };

    const emitChange = (emitType: string) => {
      emit('change', userIdList.value, emitType);
    };

    const cancelModal = () => {
      resetCheckData();
      emitChange('cancel');
      emit('update:value', userIdList.value);
    };

    const submitModal = () => {

    }

    watch(
      () => props.value,
      async newValue => {
        if (isUndefined(newValue)) {
          userIdList.value = [];
          await checkValue();
        }
      },
    );

    watchEffect(async () => {
      const myState = unref(state) as any[];
      if (myState) {
        userIdList.value = myState;
        // fix: 弹框中不按顺序选择，并不按顺序取消选择高亮问题
        userIdList.value = userIdList.value.sort((prev: any, next: any) => prev - next);
        await checkValue();
      }
    });

    return {
      prefixClsNew,
      boxClass: getClassName(`${prefixClsNew.value}-select-box`, props.size),
      selectClass: getClassName(`${prefixClsNew.value}-select`, props.size),
      selectTagClass: getClassName(`${prefixClsNew.value}-select-tag`, props.size),
      registerModal,
      getVisible,
      userAllList,
      cancelModal,
      submitModal,
      showModal,
      loading,
    };
  },
  render() {
    let btnNode: any;

    if (this.type === 'select') {
      const btnInnerNode = (
        <div class={`${this.prefixClsNew}-select-placeholder`}>{this.placeholder}</div>
      );
      btnNode = (
        <div
          class={[
            this.selectClass,
            {
              [`${this.prefixClsNew}-select-disabled`]: this.disabled,
            },
          ]}
          onClick={this.showModal}
        >
          <div class={this.boxClass}>{btnInnerNode}</div>
          <div>
            <LoadingOutlined
              v-show={this.loading}
              class={`${this.prefixClsNew}-select-arrow`}
            />
            <BasicArrow
              v-show={!this.loading}
              class={`${this.prefixClsNew}-select-arrow`}
              expand={!this.getVisible}
              top={this.getVisible}
            />
          </div>
        </div>
      );
    }

    let modalTitleNode: any = this.modalTitle;

    if (this.titleRightRender) {
      modalTitleNode = (
        <div class={`${this.prefixClsNew}-title`}>
          <span>{this.modalTitle}</span>
          <div>
            <WTitleRender render={this.titleRightRender} />
          </div>
        </div>
      );
    }

    return <div class={this.type ? [`${this.prefixClsNew}-select-warp`] : ''}>
      {btnNode}
      <ModalPro
        {...this.modalProps}
        width="1000px"
        minHeight={490}
        body-style={{ padding: '0' }}
        scroll-style={{ padding: '8px 16px 0' }}
        onRegister={this.registerModal}
        onOk={this.submitModal}
        ok-button-props={{
          loading: this.loading,
        }}
        onCancel={this.cancelModal}
        v-slots={{
          header: () => modalTitleNode,
        }}
      >
        <Row>
          <Col span={11}>
            <div>
              <a-input-search v-model:value="searchValue" style="margin-bottom: 8px" placeholder="Search" />
              <ContainerScroll showHorizontal={true} style="height: 480px">
                <Tree
                  defaultExpandAll
                  checkable
                  class={`${this.prefixClsNew}-tree`}
                >
                  {convertDataToTree(this.userAllList, this)}
                </Tree>
              </ContainerScroll>
            </div>
          </Col>
          <Col span={2}>
            <Divider style="height: 100%" type="vertical" />
          </Col>
          <Col span={11}>
          </Col>
        </Row>
      </ModalPro>
    </div>;
  },
});
