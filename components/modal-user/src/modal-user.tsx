import type { Recordable } from '../../_util/type';

import { defineComponent, computed, ref, nextTick, watchEffect } from 'vue';
import { hasOwn, isArray } from '@fe6/shared';
import xor from 'lodash-es/xor';

import { ModalPro, useModal } from '../../modal-pro';
import { BasicArrow } from '../../basic-arrow';
import Tree from '../../tree';
import { Row, Col } from '../../grid';
import Divider from '../../divider';
import Input from '../../input';
import ContainerScroll from '../../container-scroll';
import Space from '../../space';
import Typography from '../../typography';
import TagGroup from '../../tag-group';
import Tooltip from '../../tooltip';
import Spin from '../../spin';
import BasicClose from '../../basic-close';

import useConfigInject from '../../_util/hooks/useConfigInject';
import WTitleRender from '../../_util/render';
import useFetch from '../../_util/hooks/use-fetch';
import { getClassName } from '../../_util/classNames';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';
import { getSlot } from '../../_util/props-util';

import { defaultFields, rendetUser } from './utils';
import { modalUserProps } from './props';
import zhCn from '../locale/zh_CN';

export default defineComponent({
  name: 'AModalUser',
  props: modalUserProps(),
  emits: ['update:value', 'change', 'ok', 'cancel'],
  setup(props, { emit }) {
    const theFields = computed(() => ({ ...defaultFields, ...props.fieldNames }));
    const isCheckbox = computed(() => props.mode === 'checkbox');
    const { prefixCls: prefixClsNew } = useConfigInject('modal-user', props);
    const [contextLocale] = useLocaleReceiver('ModalUser', zhCn);
    const locale = { ...contextLocale.value, ...props.locale };
    const { register: registerModal, methods: modalMethods } = useModal();
    const { openModal, getVisible } = modalMethods;
    const treeRef = ref();
    const loading = ref(false);
    // 所有不重复的用户列表，用于搜索
    const userList = ref<any[]>([]);
    // 所有重复的用户列表，用于搜索
    const userAllList = ref<any[]>([]);
    // tree数据
    const treeData = ref<Recordable[]>([]);
    // 用于选中树形组件
    const keyList = ref<string[]>([]);
    // 取消时候的恢复
    const keyOldList = ref<string[]>([]);
    // 显示选择的标签
    const valueList = ref<string[]>([]);
    // 多选的时候显示 tag
    const fullValueList = ref<string[]>([]);
    // 原始数据供清空搜索恢复数据
    const originTreeData = ref<Recordable[]>([]);

    const copyCheckData = () => {
      keyOldList.value = keyList.value.slice();
    };
    const resetCheckData = () => {
      keyList.value = keyOldList.value.slice();
    };
    const emptyCheckData = () => {
      keyList.value = [];
    };

    // 获取 value 数据
    const getValueDatas = () => {
      fullValueList.value = [];
      valueList.value = [];
      if (keyList.value.length > 0) {
        keyList.value.forEach((kItem: string) => {
          const oneUser = (isCheckbox.value ? userList.value : userAllList.value).find(
            (uItem: Recordable) => uItem[theFields.value.key] === kItem,
          );
          if (oneUser) {
            const oneValue = valueList.value.find(
              (vItem: string) => vItem === oneUser[theFields.value.value],
            );
            if (!oneValue) {
              valueList.value.push(oneUser[theFields.value.value]);
              fullValueList.value.push(oneUser);
            }
          }
        });
      }
    };

    // 数据 emit
    const emitValue = () => {
      getValueDatas();
      const theValueList = valueList.value.slice();
      if (theValueList.length > 0) {
        const value = (isCheckbox.value ? userList.value : userAllList.value)
          .filter((uItem: any) => keyList.value.includes(uItem[theFields.value.key]))
          .map((uItem: any) => uItem[theFields.value.value]);
        emit('update:value', value);
        emit('change', value, {
          value,
          keys: keyList.value,
          fullValueList: fullValueList.value,
          eventType: 'change',
          datas: originTreeData.value,
          userList: userList.value,
          userAllList: userAllList.value,
        });
      }
    };

    // 显示弹框
    const showModal = async () => {
      if (!props.disabled) {
        await getTreeList();
      }
    };

    // 弹框取消
    const cancelModal = () => {
      resetCheckData();
      emit('cancel', {
        value: valueList.value,
        fullValueList: fullValueList.value,
        treeRef,
        eventType: 'modal-cancel',
        datas: originTreeData.value,
        userList: userList.value,
        userAllList: userAllList.value,
      });
      emitValue();
    };

    // 弹框确定
    const submitModal = () => {
      if (!loading.value) {
        loading.value = true;
        props.beforeOk({
          params: {
            keyList: keyList.value,
            ...props.beforeParams,
          },
          success: () => {
            loading.value = false;
            emitValue();
            emit('ok', {
              value: valueList.value,
              fullValueList: fullValueList.value,
              treeRef,
              eventType: 'modal-ok',
              datas: originTreeData.value,
              userList: userList.value,
              userAllList: userAllList.value,
            });
            openModal(false);
          },
          error: () => {
            resetCheckData();
            loading.value = false;
          },
        });
      }
    };

    // 获取一级数据，供搜索
    const getOneLevelUserList = (targetUsers: any[]) => {
      targetUsers.forEach((treeItem: any) => {
        if (
          hasOwn(treeItem, theFields.value.children) &&
          treeItem[theFields.value.children].length
        ) {
          treeItem[theFields.value.children].forEach((userItem: any) => {
            const uItem = userList.value.find(
              (uuItem: any) =>
                props.userLabel === uuItem[theFields.value.type] &&
                userItem[theFields.value.value] === uuItem[theFields.value.value],
            );
            if (!uItem) {
              userList.value.push(userItem);
            }

            if (props.userLabel === userItem[theFields.value.type]) {
              userAllList.value.push(userItem);
            }
          });
        }
        if (
          hasOwn(treeItem, theFields.value.children) &&
          treeItem[theFields.value.children].length
        ) {
          getOneLevelUserList(treeItem[theFields.value.children]);
        }
      });
    };

    const afterGetOptions = (newOptions: any, isInit?: boolean) => {
      treeData.value = newOptions.slice();
      originTreeData.value = newOptions.slice();
      getOneLevelUserList(treeData.value);
      loading.value = false;
      if (!isInit) {
        copyCheckData();
        openModal();
      }
    };

    const getTagDatas = async (isInit?: boolean, callback = () => {}) => {
      if (!loading.value) {
        loading.value = true;
        if (props.api) {
          const { fetch } = useFetch(props.api);
          fetch({
            success: (res: any) => {
              loading.value = false;
              afterGetOptions(res, isInit);
              callback();
            },
            error: () => {
              loading.value = false;
            },
            params: props.apiParams,
          });
        } else {
          afterGetOptions(props.options, isInit);
          callback();
        }
      }
    };

    const getTreeList = async (isInit?: boolean) => {
      if (!treeData.value.length) {
        await getTagDatas(isInit);
      } else {
        if (!isInit) {
          copyCheckData();
          openModal();
        }
      }
    };

    // 点击复选框
    const checkOne = (_: string[], oneEv: Recordable) => {
      const checked = oneEv?.node?.checked || false;
      const theKey = oneEv.node?.[theFields.value.key];
      const theType = oneEv.node?.[theFields.value.type];
      if (theKey) {
        if (isCheckbox.value) {
          if (theType === props.userLabel) {
            if (theType === props.userLabel) {
              const theCheckIndex = keyList.value.findIndex((kItem: string) => theKey === kItem);
              if (theCheckIndex > -1) {
                keyList.value.splice(theCheckIndex, 1);
              } else {
                keyList.value.push(theKey);
              }
            }
          } else {
            // 如果选中
            if (checked) {
              keyList.value = userAllList.value
                .filter((uItem: Recordable) => uItem[theFields.value.key].indexOf(theKey) === -1)
                .map((uItem: Recordable) => uItem[theFields.value.key]);
            } else {
              keyList.value = [
                ...new Set(
                  keyList.value.concat(
                    userAllList.value
                      .filter(
                        (uItem: Recordable) => uItem[theFields.value.key].indexOf(theKey) > -1,
                      )
                      .map((uItem: Recordable) => uItem[theFields.value.key]),
                  ),
                ),
              ];
            }
          }
          // 根据 fieldNames.value 字段判断，自动勾选重复的数据
          if (props.repeatableCheck) {
            const checkValue = userAllList.value.find(
              (uItem: Recordable) => uItem[theFields.value.key].indexOf(theKey) > -1,
            );
            if (checkValue) {
              const checkKeys = userAllList.value
                .filter(
                  (uItem: Recordable) =>
                    uItem[theFields.value.value] === checkValue[theFields.value.value] &&
                    uItem[theFields.value.key] !== theKey,
                )
                .map((uItem: Recordable) => uItem[theFields.value.key]);
              if (checked) {
                if (checkKeys.length > 0) {
                  keyList.value = xor(keyList.value, checkKeys);
                }
                const theCheckIndex = keyList.value.findIndex(
                  (kItem: string) => kItem.indexOf(theKey) > -1,
                );
                if (theCheckIndex > -1) {
                  keyList.value.splice(theCheckIndex, 1);
                }
              } else {
                keyList.value = [...new Set(keyList.value.concat(checkKeys))];
              }
            }
          }
        } else {
          keyList.value = [theKey];
        }
      }
    };

    // 搜索
    const searchValue = ref('');
    const searchChange = (ev: any) => {
      searchValue.value = ev.target.value;
      if (searchValue.value) {
        const theData = userList.value.filter((uItem: any) => {
          return uItem[theFields.value.type] === props.departmentLabel
            ? uItem[theFields.value.title].includes(searchValue.value)
            : uItem[theFields.value.title].includes(searchValue.value) ||
                uItem[theFields.value.alias].includes(searchValue.value);
        });
        treeData.value = theData.slice();
      } else {
        treeData.value = originTreeData.value.slice();
      }
    };

    // 动态加载
    const theLoadData = (treeNode: any) => {
      return new Promise((resolve: (value?: unknown) => void) => {
        if (!props?.loadApi) {
          resolve();
          return;
        }
        if (treeNode.dataRef?.children && treeNode.dataRef.children.length < 1) {
          const { fetch } = useFetch(props.loadApi);
          fetch({
            success: async (res: any) => {
              treeNode.dataRef.children = res.slice();
              treeData.value = [...treeData.value];
              afterGetOptions(treeData.value);
              if (props.virtual) {
                await nextTick();
                treeRef.value.treeRef.scrollTo({
                  key: res[res.length - 1][theFields.value.key],
                  align: 'bottom',
                });
              }
              resolve();
            },
            error: () => {
              resolve();
            },
            params: props.loadApiParams,
          });
        } else {
          resolve();
        }
      });
    };

    // 清空已选
    const emptyClick = () => {
      emptyCheckData();
    };

    // taggroup 点击叉子
    const tagGroupCreateChange = (uItem: any) => {
      checkOne([], {
        node: {
          [theFields.value.type]: uItem[theFields.value.type],
          [theFields.value.key]: uItem[theFields.value.key],
          checked: false,
        },
      });
      emitValue();
    };

    const theOldMode = ref(props.mode);
    // value 回选
    watchEffect(async () => {
      if (props.value && isArray(props.value) && props.value.length > 0 && !treeData.value.length) {
        await getTagDatas(true, () => {
          keyList.value = (isCheckbox.value ? userAllList.value : userList.value)
            .filter((uItem: Recordable) => {
              return props.value.find((vItem: string) => vItem === uItem[theFields.value.value]);
            })
            .map((uItem: Recordable) => uItem[theFields.value.key]);
          getValueDatas();
        });
      }

      // FIX 修复 table-pro 重置的时候
      if (!props.value) {
        keyList.value = [];
        fullValueList.value = [];
        valueList.value = [];
      }

      if (props.mode !== theOldMode.value) {
        theOldMode.value = props.mode;
        cancelModal();
      }
    });

    return {
      treeRef,
      isCheckbox,
      theFields,
      prefixClsNew,
      boxClass: getClassName(`${prefixClsNew.value}-select-box`, props.size),
      selectClass: getClassName(`${prefixClsNew.value}-select`, props.size),
      selectTagClass: getClassName(`${prefixClsNew.value}-select-tag`, props.size),
      registerModal,
      getVisible,
      treeData,
      userList,
      userAllList,
      keyList,
      valueList,
      fullValueList,
      showModal,
      loading,
      locale,
      checkOne,
      searchValue,
      searchChange,
      emptyClick,
      submitModal,
      cancelModal,
      theLoadData,
      tagGroupCreateChange,
    };
  },
  render() {
    let btnNode: any;
    const theLocal = this.locale || zhCn;
    let modalTitleNode: any = this.modalTitle || theLocal.select;

    const sTitileNode = (treeOneData: Recordable) => {
      return treeOneData[this.theFields.type] === this.userLabel
        ? rendetUser(
            this.showAlias,
            this.showRoleName,
            this.showAvatar,
            this.prefixClsNew,
            this.theFields,
            treeOneData,
          )
        : treeOneData[this.theFields.title];
    };

    const children = getSlot(this.$slots);
    if ((!children || children.length < 1) && this.type === 'select') {
      let btnInnerNode = (
        <Typography.Text
          blockable
          type="secondary"
          ellipsis
          content={this.placeholder || theLocal.add}
        ></Typography.Text>
      );

      if (this.fullValueList.length > 0) {
        if (this.isCheckbox) {
          const tagGroupEmits = {
            onCloseClick: this.tagGroupCreateChange,
          };
          btnInnerNode = (
            <div class={`${this.prefixClsNew}-select-tags`}>
              <TagGroup
                class-name={this.selectTagClass}
                value={this.fullValueList}
                value-label={this.theFields.value}
                name-label={this.theFields.title}
                max-tag-text-length={this.maxTagTextLength}
                max-tag-count={this.maxTagCount}
                createable={false}
                color=""
                closable={this.closable}
                create-inputable={false}
                create-loading={this.loading}
                v-slots={{
                  more: () => `+${this.fullValueList.length - this.maxTagCount}`,
                }}
                disabled={this.disabled}
                class={`${this.prefixClsNew}-tags`}
                {...tagGroupEmits}
              ></TagGroup>
            </div>
          );
        } else {
          const btnValue = this.fullValueList?.[0][this.theFields.title];
          btnInnerNode = (
            <Typography.Text
              blockable
              ellipsis={{
                tooltip: btnValue,
              }}
              content={btnValue}
              style={{
                width: '100%',
              }}
            ></Typography.Text>
          );
        }

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
      }

      let iconNode = null;

      if (this.loading) {
        iconNode = (
          <Spin
            size="small"
            class={`${this.prefixClsNew}-select-arrow`}
            color="rgba(0, 0, 0, 0.25)"
            style={{ marginTop: '-7px' }}
          />
        );
      } else {
        iconNode = (
          <BasicArrow
            class={`${this.prefixClsNew}-select-arrow`}
            expand={!this.getVisible}
            top={this.getVisible}
            colors={['currentColor']}
            size={20}
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

    if (children && children.length) {
      btnNode = <div onClick={this.showModal}>{children}</div>;
    }

    let checkedNodes = [];
    let checkedUserList = [];
    if (this.keyList.length > 0) {
      checkedUserList = (this.isCheckbox ? this.userList : this.userAllList).filter((uItem: any) =>
        this.keyList.includes(uItem[this.theFields.key]),
      );
      checkedNodes = checkedUserList.map((uItem: any) => {
        return (
          <div class={`${this.prefixClsNew}-user-box`}>
            {rendetUser(
              this.showAlias,
              this.showRoleName,
              this.showAvatar,
              this.prefixClsNew,
              this.theFields,
              uItem,
              () => {},
              () => {
                return (
                  <Tooltip title={theLocal.remove}>
                    <div
                      class={`${this.prefixClsNew}-user-close`}
                      onClick={() =>
                        this.checkOne([], {
                          node: {
                            [this.theFields.type]: uItem[this.theFields.type],
                            [this.theFields.key]: uItem[this.theFields.key],
                            checked: true,
                          },
                        })
                      }
                    >
                      <BasicClose
                        size={16}
                        class={`${this.prefixClsNew}-icon`}
                        hoverColors={['currentColor']}
                        colors={['currentColor']}
                      />
                    </div>
                  </Tooltip>
                );
              },
            )}
          </div>
        );
      });
    }

    return (
      <div class={this.type ? [`${this.prefixClsNew}-select-warp`] : ''}>
        {btnNode}
        <ModalPro
          width="1000px"
          onRegister={this.registerModal}
          onOk={this.submitModal}
          onCancel={this.cancelModal}
          ok-button-props={{
            loading: this.loading,
          }}
          scrollBarable={false}
          v-slots={{
            header: () => modalTitleNode,
          }}
          {...this.modalProps}
        >
          <Row class={`${this.prefixClsNew}-modal`}>
            <Col span={11}>
              <div>
                <Input.Search
                  value={this.searchValue}
                  style="margin-bottom: 16px"
                  allowClear
                  placeholder={this.searchPlaceholder || theLocal.pleaseholder}
                  onChange={this.searchChange}
                />
                <Tree
                  defaultExpandAll
                  multiple={this.isCheckbox}
                  checkable={this.isCheckbox}
                  height={this.height}
                  class={[`${this.prefixClsNew}-tree`, `${this.prefixClsNew}-tree-${this.mode}`]}
                  treeData={this.treeData}
                  fieldNames={this.theFields}
                  onCheck={this.checkOne}
                  onSelect={this.checkOne}
                  loadData={this.theLoadData}
                  virtual={this.virtual}
                  ref="treeRef"
                  checkedKeys={this.keyList}
                  selectedKeys={[]}
                  v-slots={{
                    title: sTitileNode,
                  }}
                />
              </div>
            </Col>
            <Col span={2}>
              <Divider
                class={`${this.prefixClsNew}-divider`}
                type="vertical"
                style={{ height: `${this.height + 46}px` }}
              />
            </Col>
            <Col span={11}>
              <div>
                <Space size={0} align="center" class={`${this.prefixClsNew}-empty`}>
                  <Typography.Text>{this.modalRightTitle || theLocal.selected}</Typography.Text>
                  <Typography.Link onClick={this.emptyClick}>{theLocal.clear}</Typography.Link>
                </Space>
                <ContainerScroll
                  class={this.scrollName}
                  showHorizontal={true}
                  style={{ height: `${this.height}px` }}
                >
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
