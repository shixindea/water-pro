/** @format */

import type { CSSProperties } from 'vue';
import type { Recordable } from '../../_util/type';

import { defineComponent, ref, reactive, toRefs, nextTick, watch, watchEffect, unref } from 'vue';
import { IconBytedPlus, IconBytedMore } from '@fe6/icon-vue';
import { getStrLength, hasOwn } from '@fe6/shared';

import ATag from '../../tag';
import APopover from '../../popover';
import AInput from '../../input';
import { TypographyText } from '../../typography';
import BasicClose from '../../basic-close';
import Spin from '../../spin';

import { useRuleFormItem } from '../../_util/hooks/use-form-item';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { getSlot } from '../../_util/props-util';

import zhCn from '../locale/zh_CN';
import { TagOptionItem } from './types';
import { tagGroupProps } from './props';

const colorDefs = {
  pink: '#eb2f96',
  red: '#f5222d',
  orange: '#fa8c16',
  green: '#52c41a',
  cyan: '#13c2c2',
  blue: '#1890ff',
  purple: '#722ed1',
};

const borderColorDefs = {
  pink: '#ffadd2',
  red: '#ffa39e',
  orange: '#ffd591',
  green: '#b7eb8f',
  cyan: '#87e8de',
  blue: '#91d5ff',
  purple: '#d3adf7',
};

export default defineComponent({
  name: 'ATagGroup',
  props: tagGroupProps,
  emits: ['change', 'create-click', 'close-click'],
  setup(props, { emit }) {
    const [contextLocale] = useLocaleReceiver('TagGroup', zhCn);
    const locale = { ...contextLocale.value, ...props.locale };
    const { prefixCls: prefixClsNew } = useConfigInject('tag-group', props);

    const [state] = useRuleFormItem(props);
    const options = ref(props.value);
    const inputRef = ref();
    const datas = reactive({
      inputVisible: false,
      inputValue: '',
    });
    const stateTruer = ref([]);
    const removeIdx = ref<number | string>(-1);

    const handleClose = (removedTag: TagOptionItem, id: string | number) => {
      if (!props.disabled) {
        removeIdx.value = id;
        if (props.closeEmitAble) {
          emit('change', removedTag.name, 'remove');
        }
        emit('close-click', removedTag);
      }
    };

    const showInput = (ev: MouseEvent) => {
      if (!props.disabled) {
        if (props.createInputable) {
          datas.inputVisible = true;
          nextTick(() => {
            inputRef.value.focus();
          });
        }
        emit('create-click', ev);
      }
    };

    const handleInputConfirm = () => {
      if (!props.disabled) {
        if (datas.inputValue) {
          emit('change', datas.inputValue, 'add');
          Object.assign(datas, {
            inputVisible: false,
            inputValue: '',
          });
        }
      }
    };

    const handleInputEnterConfirm = (ev: any) => {
      if (!props.disabled) {
        if (datas.inputValue && ev.keyCode === 13) {
          emit('change', datas.inputValue, 'add');
          Object.assign(datas, {
            inputVisible: false,
            inputValue: '',
          });
        }
      }
    };

    const handleInputChange = (ev: any) => {
      if (!props.disabled) {
        datas.inputValue = ev.target.value;
      }
    };

    watch(
      () => props.value,
      (newValue) => {
        options.value = newValue;
      },
    );

    // 修复 客户标签弹框删除不了标签
    watchEffect(() => {
      stateTruer.value = unref(state as any).filter((sItem: Recordable) => sItem.type !== 'delete');
      // fix: tag-modal-list 中 select type 的时候，点击叉子一直 loading 状态
      removeIdx.value = -1;
    });

    return {
      ...toRefs(datas),
      state,
      stateTruer,
      options,
      removeIdx,
      handleClose,
      showInput,
      handleInputConfirm,
      handleInputEnterConfirm,
      handleInputChange,
      inputRef,
      prefixClsNew,
      getStrLength,
      locale,
    };
  },
  render() {
    const tagList =
      this.maxTagCount > 0 && this.stateTruer.length > this.maxTagCount
        ? this.stateTruer.slice(0, this.maxTagCount)
        : this.stateTruer;
    const tagNode = [];
    const inTheClors = hasOwn(colorDefs, this.color);
    const theColors = inTheClors ? colorDefs[this.color] : this.color;

    const getTagInnerNode = (tagItem: any) => {
      let tagInnerNode = tagItem[this.nameLabel];

      if (this.maxTagTextLength > 0) {
        tagInnerNode = (
          <TypographyText
            style={{ color: this.disabled ? '#999' : 'inherit' }}
            content={tagItem[this.nameLabel]}
            ellipsis={{ tooltip: tagItem[this.nameLabel] }}
            blockable
          ></TypographyText>
        );
      }

      return tagInnerNode;
    };

    const getCloseIcon = (tagItem: any) => {
      let closeIconNode = <BasicClose size={10} />;
      if (this.removeIdx === tagItem.id) {
        closeIconNode = <Spin size="mini" style="margin-top: -3px" color={theColors} />;
      }
      return closeIconNode;
    };

    tagList.forEach((tagItem: any) => {
      tagNode.push(
        <ATag
          class={[
            `${this.prefixClsNew}-inner`,
            {
              [`${this.prefixClsNew}-inner-small`]: this.maxTagTextLength > 0,
              [`${this.prefixClsNew}-inner-big`]: this.closable && tagItem.id !== '0',
              [`${this.prefixClsNew}-inner-disabled`]: this.disabled,
            },
          ]}
          closable={this.closable && tagItem.id !== '0'}
          visible={true}
          color={this.disabled ? '#f0f0f0' : this.color}
          style={this.tagStyle}
          onClose={() => this.handleClose(tagItem, tagItem.id)}
          v-slots={{
            closeIcon: () => getCloseIcon(tagItem),
          }}
        >
          {getTagInnerNode(tagItem)}
        </ATag>,
      );
    });

    let createNode = null;
    if (this.createable) {
      if (this.inputVisible) {
        createNode = (
          <AInput
            ref="inputRef"
            value={this.inputValue}
            type="text"
            size="small"
            class={[`${this.prefixClsNew}-create-input`]}
            onBlur={this.handleInputConfirm}
            onChange={this.handleInputChange}
            onKeyup={this.handleInputEnterConfirm}
          />
        );
      } else {
        const theStyle: CSSProperties = {};

        if (!this.disabled && this.createBordered) {
          const theBorderColors = hasOwn(borderColorDefs, this.color)
            ? borderColorDefs[this.color]
            : this.color;
          theStyle.borderColor = theBorderColors;
        }

        if (!hasOwn(borderColorDefs, this.color)) {
          theStyle.color = this.color;
        }

        createNode = (
          <ATag
            color={this.color}
            class={[
              `${this.prefixClsNew}-create`,
              {
                [`${this.prefixClsNew}-create-border`]: this.createBordered,
                [`${this.prefixClsNew}-create-disabled`]: this.disabled,
                [`${this.prefixClsNew}-create-border-disabled`]:
                  this.disabled && this.createBordered,
              },
            ]}
            style={theStyle}
            onClick={this.showInput}
          >
            <Spin
              size="mini"
              style="margin-top: -7px;margin-right: 3px;"
              color={theColors}
              v-show={this.createLoading}
            />
            <IconBytedPlus
              v-show={this.createIcon && !this.createLoading}
              colors={this.disabled ? ['rgb(153, 153, 153)'] : [theColors]}
            />
            {this.createPlaceholder || this.locale?.createPlaceholder || '添加标签'}
          </ATag>
        );
      }
    }

    let popoverNode = null;

    if (this.maxTagCount > 0 && this.stateTruer.length > this.maxTagCount) {
      let popoverMoreNode = getSlot(this, 'more');

      if (!popoverMoreNode.length) {
        popoverMoreNode = [<IconBytedMore colors={inTheClors ? [theColors] : ['#fff']} />];
      }

      const popoverTagNodes = [];

      this.stateTruer.forEach((tagItem: any) => {
        let sPopoverInner = tagItem[this.nameLabel];
        if (this.maxTagTextLength > 0) {
          sPopoverInner = (
            <TypographyText
              style={{ color: 'inherit' }}
              content={tagItem[this.nameLabel]}
              ellipsis={{ tooltip: tagItem[this.nameLabel] }}
              blockable
            ></TypographyText>
          );
        }

        popoverTagNodes.push(
          <ATag
            class={{
              [`${this.prefixClsNew}-small`]: this.maxTagTextLength > 0,
              [`${this.prefixClsNew}-big`]: this.closable && tagItem.id !== '0',
              [`${this.prefixClsNew}-preive`]: true,
              [`${this.prefixClsNew}-disabled`]: this.disabled,
            }}
            closable={!this.disabled && this.closable && tagItem.id !== '0'}
            color={this.disabled ? '#f0f0f0' : this.color}
            onClose={() => this.handleClose(tagItem, tagItem.id)}
          >
            {sPopoverInner}
          </ATag>,
        );
      });

      const popoverInnerNode = <div class={`${this.prefixClsNew}-popover`}>{popoverTagNodes}</div>;

      popoverNode = (
        <APopover
          v-slots={{
            content: () => popoverInnerNode,
          }}
        >
          <ATag
            color={this.disabled ? '#f0f0f0' : this.color}
            class={[
              `${this.prefixClsNew}-more`,
              {
                [`${this.prefixClsNew}-more-disabled`]: this.disabled,
              },
            ]}
          >
            {popoverMoreNode}
          </ATag>
        </APopover>
      );
    }

    return (
      <div class={[this.prefixClsNew, this.className ? this.className : '']}>
        {this.showSelected && tagNode}
        {this.showSelected && popoverNode}
        {createNode}
      </div>
    );
  },
});
