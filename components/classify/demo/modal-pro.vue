<docs>
---
order: 0
title:
  zh-CN: 弹框中
  en-US: Modal Pro
---

## zh-CN

弹框中的分类

## en-US

Modal usage of classify

</docs>

<template>
  <div>
    <a-button @click="openTheModal">打开</a-button>
    <a-modal-pro
      @register="registerModal"
      title="water"
      :footer="null"
      :min-height="120"
      :body-style="{ height: '180px' }"
      :z-index="1001"
    >
      <a-form-pro @register="handlerForm" @submit="subTheModal">
        <template #category="{ model, field }">
          <a-classify
            v-model:value="model[field]"
            style="width: 200px"
            placeholder="请选择房价分类"
            allowClear
            mode="multiple"
            :api="getSelectForOptions"
            :createFormConfig="createFormConfig"
            :createApi="postCreateApi"
            :editApi="postEditApi"
            :removeApi="postRemoveApi"
            removeTip="确定要删除吗"
            :drawerTableApi="tableApi"
            :drawerTableColumns="columns"
            showSearch
            drawerTableDraggable
            :drawerTableDragApi="dragApi"
          />
        </template>
      </a-form-pro>
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import type { AjaxApi, FormProProps } from '@fe6/water-pro';
import { defineComponent } from 'vue';
import { useModal, useForm } from '@fe6/water-pro';

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

const theEditFormConf: FormProProps = {
  schemas: [
    {
      field: 'categoryIds',
      label: '卡券分类',
      component: 'Input',
      slot: 'category',
      rules: [
        {
          required: true,
          message: '请输入卡券分类',
          type: 'array',
        },
      ],
    },
  ],
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
  actionColOptions: {
    span: 24,
    push: 0,
  },
  showResetButton: false,
  actionAlgin: 'center',
  okText: '确定',
  submitButtonOptions: {
    loading: false,
  },
};

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    const [handlerForm, { setFieldsValue, getFieldsValue, setProps }] = useForm();

    const openTheModal = () => {
      modalMethods.openModal();
      setTimeout(async () => {
        setProps(theEditFormConf);

        setTimeout(async () => {
          setFieldsValue({
            categoryIds: [90],
          });
        }, 0);
      }, 0);
    };

    const subTheModal = () => {
      console.log(getFieldsValue(), '创建的数据');
      modalMethods.openModal(false);
    };

    return {
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

      handlerForm,

      registerModal,
      subTheModal,
      openTheModal,
    };
  },
});
</script>
