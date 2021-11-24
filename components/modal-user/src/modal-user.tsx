import { defineComponent, PropType, watch, watchEffect, unref, ref } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { clone, isUndefined } from '@fe6/shared';
import flatten from 'lodash-es/flatten';

import { ModalPro, useModal } from '../../modal-pro';
import { BasicArrow } from '../../basic-arrow';
import Tree from '../../tree';
import { Row, Col } from '../../grid';
import Divider from '../../divider';
import Input from '../../input';
import ContainerScroll from '../../container-scroll';
import Checkbox from '../../checkbox';

import PropTypes from '../../_util/vue-types';
import { useRuleFormItem } from '../../_util/hooks/use-form-item';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { tuple } from '../../_util/type';
import WTitleRender from '../../_util/render';
import useFetch from '../../_util/hooks/use-fetch';
import { getClassName } from '../../_util/classNames';

import { convertDataToTree, rendetUser, defaultFields } from './utils';

export default defineComponent({
  props: {
    value: Array as PropType<any[]>,
    /**
     * @default{title,key,children}
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: PropTypes.object.def(clone(defaultFields)),
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
    const userIdList = ref<string[]>([]); // 真实反到model:value的
    const keyList = ref<string[]>([]); // 用于选中树形组件
    const userList = ref<any[]>([]); // 所有不重复的用户列表，用于搜索
    // 原始数据
    const treeAllList = ref<Recordable[]>([]);

    const searchValue = ref('');
    const searchChange = (ev: any) => {
      searchValue.value = ev.target.value;
    };

    const copyCheckData = () => {};
    const resetCheckData = () => {};

    const getOneLevelUserList = (targetUsers: any[]) => {
      targetUsers.forEach((treeItem: any) => {
        if (treeItem[props.replaceFields.users].length) {
          treeItem[props.replaceFields.users].forEach((userItem: any) => {
            const uItem = userList.value.find(
              (uItem: any) =>
                userItem[props.replaceFields.unionid] === uItem[props.replaceFields.unionid],
            );
            if (!uItem) {
              userList.value.push(userItem);
            }
          });
        }
        if (treeItem[props.replaceFields.children].length) {
          getOneLevelUserList(treeItem[props.replaceFields.children]);
        }
      });
    };

    const getUserList = () => {
      getOneLevelUserList(treeAllList.value);
    };
    const afterGetOptions = (newOptions: any, isInit?: boolean) => {
      treeAllList.value = newOptions;
      getUserList();
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

    const getTreeList = async (isInit?: boolean) => {
      if (!treeAllList.value.length) {
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
        await getTreeList();
      }
    };

    const checkValue = async () => {
      if (userIdList.value.length) {
        await getTreeList(true);
      }
    };

    const emitChange = (emitType: string) => {
      emit('change', userIdList.value, emitType);
    };
    const emitValue = (newVal?: any) => {
      if (newVal) {
        userIdList.value = newVal.slice();
      }
      emit('update:value', userIdList.value);
    };

    const selectOne = (checkedKeys: any, oneEv: any) => {
      const { checkedNodes } = oneEv;
      const newUserIdList = checkedNodes.map(({ props: { userId } }) => userId);
      const theUserIdList = [...new Set(flatten(newUserIdList))];
      keyList.value = [].concat(checkedKeys, theUserIdList);
      emitValue(theUserIdList);
    };

    const cancelModal = () => {
      resetCheckData();
      emitChange('cancel');
      emitValue();
    };

    const submitModal = () => {};

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
        // keyList.value = userIdList.value.slice();
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
      treeAllList,
      userList,
      keyList,
      userIdList,
      searchValue,
      searchChange,
      cancelModal,
      submitModal,
      showModal,
      selectOne,
      loading,
    };
  },
  render() {
    let btnNode: any;
    const theFields = { ...defaultFields, ...this.replaceFields };

    if (this.type === 'select') {
      const btnInnerNode = (
        <div class={`${this.prefixClsNew}-select-placeholder`}>{this.placeholder}</div>
      );
      let iconNode = null;

      if (this.loading) {
        iconNode = <LoadingOutlined class={`${this.prefixClsNew}-select-arrow`} />;
      } else {
        iconNode = (
          <BasicArrow
            class={`${this.prefixClsNew}-select-arrow`}
            expand={!this.getVisible}
            top={this.getVisible}
          />
        );
      }

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
          {iconNode}
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

    let selectNodes = null;

    if (this.searchValue) {
      selectNodes = this.userList
        .filter((uItem: any) => uItem[theFields.title].indexOf(this.searchValue) > -1)
        .map((uItem: any) => {
          return (
            <div class={`${this.prefixClsNew}-user-box`}>
              {rendetUser(this.prefixClsNew, theFields, uItem, () => {
                return <Checkbox />;
              })()}
            </div>
          );
        });
    } else {
      selectNodes = (
        <Tree
          defaultExpandAll
          checkable
          checkedKeys={this.keyList}
          class={`${this.prefixClsNew}-tree`}
          onCheck={this.selectOne}
        >
          {convertDataToTree(this.treeAllList, theFields, this.prefixClsNew)}
        </Tree>
      );
    }

    return (
      <div class={this.type ? [`${this.prefixClsNew}-select-warp`] : ''}>
        {btnNode}
        <ModalPro
          {...this.modalProps}
          width="1000px"
          minHeight={490}
          body-style={{ padding: '0' }}
          scroll-style={{ padding: '8px 16px 0' }}
          replaceFields={theFields}
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
                <div>-{this.keyList.join(',')}-</div>
                <Input.Search
                  value={this.searchValue}
                  style="margin-bottom: 8px"
                  allowClear
                  placeholder="Search"
                  onChange={this.searchChange}
                />
                <ContainerScroll showHorizontal={true} style="height: 340px">
                  {selectNodes}
                </ContainerScroll>
              </div>
            </Col>
            <Col span={2}>
              <Divider style="height: 100%" type="vertical" />
            </Col>
            <Col span={11}></Col>
          </Row>
        </ModalPro>
      </div>
    );
  },
});
