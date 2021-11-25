import { defineComponent, PropType, watch, watchEffect, unref, ref } from 'vue';
import { LoadingOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { clone, isNumber, isUndefined } from '@fe6/shared';
import flatten from 'lodash-es/flatten';
import uniq from 'lodash-es/uniq';

import { ModalPro, useModal } from '../../modal-pro';
import { BasicArrow } from '../../basic-arrow';
import Tree from '../../tree';
import { Row, Col } from '../../grid';
import Divider from '../../divider';
import Input from '../../input';
import ContainerScroll from '../../container-scroll';
import Checkbox from '../../checkbox';
import Space from '../../space';
import Typography from '../../typography';
import TagGroup from '../../tag-group';
import Tooltip from '../../tooltip';

import PropTypes from '../../_util/vue-types';
import { useRuleFormItem } from '../../_util/hooks/use-form-item';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { tuple } from '../../_util/type';
import WTitleRender from '../../_util/render';
import useFetch from '../../_util/hooks/use-fetch';
import { getClassName } from '../../_util/classNames';
import { convertTreeToEntities } from '../../vc-tree/src/util';

import { renderTreeNodes, rendetUser, defaultFields } from './utils';

export default defineComponent({
  name: 'AModalUser',
  props: {
    value: Array as PropType<any[]>,
    replaceFields: PropTypes.object.def(clone(defaultFields)),
    maxTagTextLength: PropTypes.number.def(8), // 文字 4 个字
    maxTagCount: PropTypes.number.def(2), // 标签 4 个字
    closable: PropTypes.bool.def(true),
    size: PropTypes.oneOf(tuple('small', 'large', 'default')),
    placeholder: PropTypes.string.def('添加员工'),
    searchPlaceholder: PropTypes.string.def('请输入员工名称查询'),
    type: PropTypes.oneOf(['select', '']).def('select'),
    prefixCls: PropTypes.string,
    modalTitle: PropTypes.string.def('选择员工'),
    modalRightTitle: PropTypes.string.def('已选择员工'),
    titleRightRender: PropTypes.func,
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
    apiParams: PropTypes.object.def({}),
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
    showAlias: PropTypes.bool.def(true),
  },
  emits: ['update:value', 'change', 'ok', 'cancel'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-user', props);
    const [state] = useRuleFormItem(props);
    const { register: registerModal, methods: modalMethods } = useModal();
    const { openModal, getVisible } = modalMethods;
    const loading = ref(false);
    // const userIdList = ref<string[]>([]); // 真实反到model:value的
    const keyList = ref<string[]>([]); // 用于选中树形组件
    const keyOldList = ref<string[]>([]); // 取消时候的恢复
    const userList = ref<any[]>([]); // 所有不重复的用户列表，用于搜索
    // 原始数据
    const treeAllList = ref<Recordable[]>([]);

    const emitValue = (newVal?: any) => {
      if (newVal) {
        keyList.value = newVal.slice();
      }
      emit('update:value', keyList.value);
      emit('change', keyList.value);
    };

    const searchValue = ref('');
    const searchChange = (ev: any) => {
      searchValue.value = ev.target.value;
    };
    const searchCheckboxChange = (checkItem: any) => {
      const uId = checkItem[props.replaceFields.value];
      const kIdx = keyList.value.findIndex((kItem: string) => kItem === uId);
      if (kIdx > -1) {
        keyList.value.splice(kIdx, 1);
      } else {
        keyList.value.push(uId);
      }
    };

    const closeTagGroupClick = (tagRemoveItem: any) => {
      searchCheckboxChange(tagRemoveItem);
      emitValue(keyList.value);
    };

    const copyCheckData = () => {
      keyOldList.value = keyList.value.slice();
    };
    const resetCheckData = () => {
      keyList.value = keyOldList.value.slice();
    };
    const emptyCheckData = () => {
      keyList.value = [];
    };

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

    const selectOne = ({ checked }: any) => {
      // console.log(checked, 'checked');
      const newUserIdList = checked.filter((key: any) => !isNumber(key));
      // console.log(oneEv, 'oneEv');
      // console.log(newUserIdList, 'newUserIdList');
      // const { checkedNodes } = oneEv;
      // const newUserIdList = checkedNodes.map(({ props: { userId } }) => userId);
      // const theUserIdList: any[] = [...new Set(flatten(newUserIdList))];
      keyList.value = newUserIdList.slice();
    };

    const cancelModal = () => {
      resetCheckData();
      emitValue();
      emit('cancel', keyList.value);
    };

    const submitModal = () => {
      if (!loading.value) {
        loading.value = true;
        props.beforeOk({
          params: {
            keyList: keyList.value,
          },
          success: () => {
            loading.value = false;
            emitValue(keyList.value);
            emit('ok', keyList.value);
            openModal(false);
          },
          error: () => {
            resetCheckData();
            loading.value = false;
          },
        });
      }
    };

    watch(
      () => props.value,
      async newValue => {
        if (isUndefined(newValue)) {
          keyList.value = [];
          emptyCheckData();
        }
      },
    );

    watchEffect(async () => {
      const myState = unref(state) as any[];
      // console.log(myState, 'myState');
      if (myState) {
        keyList.value = myState;
        // fix: 弹框中不按顺序选择，并不按顺序取消选择高亮问题
        keyList.value = keyList.value.sort((prev: any, next: any) => prev - next);
        if (keyList.value.length) {
          await getTreeList(true);
        }
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
      searchValue,
      searchChange,
      searchCheckboxChange,
      closeTagGroupClick,
      emptyCheckData,
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

    let checkedNodes = [];
    let checkedUserList = [];
    // 选中节点
    let checkNodeIdList = [];
    // 半选中的节点
    const checkHalfIdList = [];
    let treeValue = this.keyList.slice();

    const treeChildNode = renderTreeNodes(
      this.showAlias,
      this.treeAllList,
      theFields,
      this.prefixClsNew,
    );
    const { keyEntities } = convertTreeToEntities(treeChildNode);
    // console.log(keyEntities, posEntities, 12312);

    if (this.keyList.length) {
      checkedUserList = this.userList.filter(
        (uItem: any) => this.keyList.indexOf(uItem[theFields.value]) > -1,
      );
      checkedNodes = checkedUserList.map((uItem: any) => {
        return (
          <div class={`${this.prefixClsNew}-user-box`}>
            {rendetUser(
              this.showAlias,
              this.prefixClsNew,
              theFields,
              uItem,
              () => {},
              () => {
                return (
                  <Tooltip title="删除">
                    <div class={`${this.prefixClsNew}-user-close`}>
                      <CloseOutlined />
                    </div>
                  </Tooltip>
                );
              },
              () => {
                this.searchCheckboxChange(uItem);
              },
            )()}
          </div>
        );
      });

      // 选中节点
      checkNodeIdList = uniq(
        flatten(checkedUserList.map((uItem: any) => uItem[this.replaceFields.nodeId])),
      );

      // 半选中 checkHalfIdList
      // 通过节点匹配，找到里面没有匹配的，删掉添加到半匹配中
      keyEntities.forEach((value: any) => {
        const { userId, key } = value.node.props;
        if (userId) {
          const hasAllKey = userId.every((uItem: string) =>
            this.keyList.find((kItem: string) => kItem === uItem),
          );

          if (!hasAllKey) {
            const noIdx = checkNodeIdList.findIndex((nId: number) => nId === key);
            if (noIdx > -1) {
              checkNodeIdList.splice(noIdx, 1);
              checkHalfIdList.push(key);
            }
          }
        }
      });
      treeValue = [].concat(treeValue, checkNodeIdList);
      // console.log(checkNodeIdList, 'checkNodeIdList');
      // console.log(checkHalfIdList, 'checkHalfIdList');
    }

    if (this.type === 'select') {
      let btnInnerNode = (
        <div class={`${this.prefixClsNew}-select-placeholder`}>{this.placeholder}</div>
      );

      if (checkedUserList.length) {
        btnInnerNode = (
          <TagGroup
            class-name={this.selectTagClass}
            value={checkedUserList as any}
            value-label={this.replaceFields.value}
            name-label={this.replaceFields.title}
            max-tag-text-length={this.maxTagTextLength}
            max-tag-count={this.maxTagCount}
            createable={false}
            color=""
            closable={this.closable}
            create-inputable={false}
            create-loading={this.loading}
            onCloseClick={this.closeTagGroupClick}
            v-slots={{
              more: () => `+${this.keyList.length - this.maxTagCount}`,
            }}
            disabled={this.disabled}
          ></TagGroup>
        );
      }

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
              {rendetUser(
                this.showAlias,
                this.prefixClsNew,
                theFields,
                uItem,
                () => {
                  return (
                    <Checkbox
                      checked={this.keyList.indexOf(uItem[this.replaceFields.value]) > -1}
                    />
                  );
                },
                () => {},
                () => {
                  this.searchCheckboxChange(uItem);
                },
              )()}
            </div>
          );
        });
    } else {
      selectNodes = (
        <Tree
          defaultExpandAll
          checkable
          checkStrictly
          checkedKeys={
            {
              checked: treeValue,
              halfChecked: checkHalfIdList,
            } as any
          }
          class={`${this.prefixClsNew}-tree`}
          onCheck={this.selectOne}
        >
          {treeChildNode}
        </Tree>
      );
    }

    return (
      <div class={this.type ? [`${this.prefixClsNew}-select-warp`] : ''}>
        {btnNode}
        <ModalPro
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
          {...this.modalProps}
        >
          <Row class={`${this.prefixClsNew}-modal`}>
            <Col span={11}>
              <div>
                -{this.keyList.join(',')}-
                <Input.Search
                  value={this.searchValue}
                  style="margin-bottom: 8px"
                  allowClear
                  placeholder={this.searchPlaceholder}
                  onChange={this.searchChange}
                />
                <ContainerScroll showHorizontal={true} style="height: 440px">
                  {selectNodes}
                </ContainerScroll>
              </div>
            </Col>
            <Col span={2}>
              <Divider class={`${this.prefixClsNew}-divider`} type="vertical" />
            </Col>
            <Col span={11}>
              <div>
                <Space size={0} align="center" class={`${this.prefixClsNew}-empty`}>
                  <Typography.Text>{this.modalRightTitle}</Typography.Text>
                  <Typography.Link onClick={this.emptyCheckData}>清空已选择</Typography.Link>
                </Space>
                <ContainerScroll showHorizontal={true} style="height: 440px">
                  {checkedNodes}
                </ContainerScroll>
              </div>
            </Col>
          </Row>
        </ModalPro>
      </div>
    );
  },
});
