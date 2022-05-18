<docs>
---
order: 0
title:
  zh-CN: 按钮扩展
  en-US: Btn Slot
---

## zh-CN

按钮扩展

## en-US

Btn Slot usage

</docs>

<template>
  <div>
    <a-classify
      v-model:value="theClassifyValue"
      style="width: 200px"
      placeholder="请选择"
      :api="getSelectForOptions"
      :createFormConfig="createFormConfig"
      :createApi="postCreateApi"
      :editApi="postEditApi"
      :removeApi="postRemoveApi"
      removeTip="确定要删除吗"
      :drawerTableApi="tableApi"
      :drawerTableColumns="columns"
      drawerTableDraggable
      :drawerTableDragApi="dragApi"
      :max-tag-count="1"
    >
      <template #optionButtonSlot="{ loading }">
        <a-button type="link" style="padding: 0 16px 0 7px" @click="openModal" :disabled="loading">
          <IconBytedPlus :colors="['currentColor']" />
          扩展</a-button
        >
      </template>
    </a-classify>
    <a-modal-pro
      @register="registerModal"
      title="water"
      :min-height="30"
      :body-style="{ height: '70px' }"
    >
      <a-form-pro @register="simpleForm" />
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import type { AjaxApi } from '@fe6/water-pro';
import { useModal, useForm } from '@fe6/water-pro';
import IconBytedPlus from '@fe6/icon-vue/lib/icons/byted-plus';
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success(
      ['water', 'antd', 'eleUI', 'iview'].map((label: string, value: number) => ({
        label,
        value,
      })),
    );
  }, 1000);
};

const postCreateApi = ({ success }: AjaxApi) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({ success }: AjaxApi) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({ success }: AjaxApi) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '分类类型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分类名称',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({ success }: AjaxApi) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
};
const dragApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  // 扩展 start
  components: {
    IconBytedPlus,
  },
  // 扩展 end
  setup() {
    // 扩展 start
    const { register: registerModal, methods: modalMethods } = useModal();
    const [simpleForm, simpleFormMethods] = useForm({
      showActionButtonGroup: false,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 20,
      },
      schemas: [
        {
          field: 'name',
          component: 'RadioGroup',
          label: '房型特色',
          componentProps: {
            options: [
              {
                label: '横着',
                value: 1,
              },
              {
                label: '竖着',
                value: 2,
              },
            ],
          },
          itemProps: {
            labelAlign: 'left',
          },
        },
      ],
    });
    const openModal = () => {
      modalMethods.openModal();
    };
    // 扩展 end
    return {
      // 扩展 start
      registerModal,
      openModal,
      simpleForm,
      // 扩展 end
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '房型特色',
            componentProps: {
              placeholder: '请输入内容',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left',
            },
            rules: [
              {
                required: true,
                message: '请输入所在楼层',
                type: 'string',
              },
            ],
          },
        ],
      },
      columns,
      tableApi,
      dragApi,
      theClassifyValue: ref(),
    };
  },
});
</script>
