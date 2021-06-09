/** @format */

import { defineComponent, PropType, ref, unref, watchEffect } from 'vue';
import {
  PlusOutlined,
  DashOutlined,
  CloseOutlined,
  LoadingOutlined,
  DownOutlined,
} from '@ant-design/icons-vue';

import Tag from '../../tag';
import { TagGroup } from '../../tag-group';
import { BasicArrow } from '../../basic-arrow';
import { ModalPro, useModal } from '../../modal-pro';
import { tuple } from '../../_util/type';
import PropTypes from '../../_util/vue-types';
import { useRuleFormItem } from '../../_util/hooks/use-form-item';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { useAttrs } from '../../_util/hooks/use-attrs';
import classNames from '../../_util/classNames';

function getClassName(prefixCls: string, size: string) {
  return classNames(prefixCls, {
    [`${prefixCls}-sm`]: size === 'small',
    [`${prefixCls}-lg`]: size === 'large',
  });
}

export default defineComponent({
  name: 'ATagModalList',
  components: {
    PlusOutlined,
    DashOutlined,
    CloseOutlined,
    LoadingOutlined,
    DownOutlined,
    ATag: Tag,
    ATagGroup: TagGroup,
    AModalPro: ModalPro,
    ABasicArrow: BasicArrow,
  },
  props: {
    value: {
      type: Array as PropType<[]>,
      default: () => [],
    },
    maxTagTextLength: PropTypes.number.def(4), // 文字 4 个字
    maxTagCount: PropTypes.number.def(2), // 标签 4 个字
    createable: PropTypes.bool,
    closable: PropTypes.bool.def(true),
    size: PropTypes.oneOf(tuple('small', 'large', 'default')),
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['select', '']).def(''),
    prefixCls: PropTypes.string,
    modalTitle: PropTypes.string.def('选择标签'),
    createPlaceholder: PropTypes.string.def('添加标签'),
    nameLabel: PropTypes.string.def('name'),
    valueLabel: PropTypes.string.def('id'),
    childrenLabel: PropTypes.string.def('children'),
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('tag-modal-list', props);
    const [state] = useRuleFormItem(props);
    const attrs = useAttrs();
    const { register: registerModal, methods: modalMethods } = useModal();
    const { openModal, getVisible } = modalMethods;
    const createLoading = ref(false);
    const tagItems = ref<Recordable[]>([]);
    const tagValueItems = ref<Recordable>([]);
    const tagCheckList = ref<Recordable[]>([]);
    const tagCheckOldList = ref<Recordable[]>([]);
    const tagCheckAllList = ref<Recordable[]>([]);
    const tagCheckAllOldList = ref<Recordable[]>([]);

    `${prefixClsNew}-select`;

    const copyCheckData = () => {
      tagCheckAllOldList.value = tagCheckAllList.value.slice();
      tagCheckOldList.value = tagCheckList.value.slice();
    };
    const resetCheckData = () => {
      tagCheckAllList.value = tagCheckAllOldList.value.slice();
      tagCheckList.value = tagCheckOldList.value.slice();
    };

    const getTagList = async (isInit?: boolean) => {
      if (!tagItems.value.length) {
        try {
          createLoading.value = true;
          const tagListResult = await props.api();
          tagItems.value = tagListResult.slice();
          tagValueItems.value = tagItems.value.reduce((acc, tItem: Recordable) => {
            return acc.concat(tItem[props.childrenLabel]);
          }, []);
          createLoading.value = false;
          if (!isInit) {
            copyCheckData();
            openModal();
          }
        } catch (error) {
          createLoading.value = false;
        }
      } else {
        if (!isInit) {
          copyCheckData();
          openModal();
        }
      }
    };

    const createClick = async () => {
      await getTagList();
    };

    const emitChange = (emitType: string) => {
      emit('change', tagCheckList.value, emitType);
    };

    const closeClick = (item: Recordable) => {
      const indexInCheckList = tagCheckAllList.value.findIndex(
        (tagCheckItem: Recordable) => tagCheckItem[props.valueLabel] === item[props.valueLabel],
      );
      if (indexInCheckList > -1) {
        tagCheckList.value.splice(indexInCheckList, 1);
        tagCheckAllList.value.splice(indexInCheckList, 1);
        emitChange('remove');
      }
    };

    const tagClick = (item: Recordable) => {
      const indexInCheckList = tagCheckAllList.value.findIndex(
        (tagCheckItem: Recordable) => tagCheckItem[props.valueLabel] === item[props.valueLabel],
      );
      if (indexInCheckList > -1) {
        tagCheckList.value.splice(indexInCheckList, 1);
        tagCheckAllList.value.splice(indexInCheckList, 1);
      } else {
        tagCheckList.value.push(item[props.valueLabel]);
        tagCheckAllList.value.push(item);
      }
    };

    const submitModal = () => {
      emitChange('ok');
      openModal(false);
    };

    const cancelModal = () => {
      resetCheckData();
      emitChange('cancel');
      emit('update:value', tagCheckList.value);
    };

    const checkValue = async () => {
      if (tagCheckList.value.length) {
        await getTagList(true);
        tagCheckAllList.value = tagValueItems.value.filter((tItem: Recordable) => {
          return tagCheckList.value.find((cItem: any) => {
            return tItem[props.valueLabel] === cItem;
          });
        });
      }
    };

    watchEffect(async () => {
      tagCheckList.value = unref(state) as Recordable[];
      await checkValue();
    });

    return {
      attrs,
      state,
      createClick,
      registerModal,
      createLoading,
      tagItems,
      tagClick,
      tagCheckList,
      tagCheckAllList,
      submitModal,
      cancelModal,
      getVisible,
      closeClick,
      prefixClsNew,
      boxClass: getClassName(`${prefixClsNew.value}-select-box`, props.size),
      selectClass: getClassName(`${prefixClsNew.value}-select`, props.size),
      selectTagClass: getClassName(`${prefixClsNew.value}-select-tag`, props.size),
    };
  },
});
