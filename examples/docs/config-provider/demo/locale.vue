<template>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
    </a-radio-group>
  </div>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        upload-card：<a-upload-card
          action="https://api.dev.mosh.cn/public/upload/image/binary"
          resultKey="data"
          v-model:value="uploadCardList"
          @changeUpload="uploadCardOnChangeUpload"
          draggable
        />
      </div>
      <div class="example">
        upload-image：<a-upload-image
          action="https://api.dev.mosh.cn/public/upload/image/binary"
          resultKey="data"
          allow-update
        />
      </div>
      <div class="example">
        upload-name(接口不好使)：<a-upload-name
          action="https://api.dev.mosh.cn/public/upload/image/binary"
          resultKey="data"
          accept='image/png,image/jpeg,image/gif'
          v-model:value="uploadNameValue"
        />
      </div>
      <div class="example">
        preview-image：<a-preview-image
          value="https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png"
        />
      </div>
      <div class="example">
        <a-sms-code
          :api="getSmsCodeApi"
          v-model:value="smsCodeValue"
          :ajaxParams="() => ({phone: 13810902078})"
          :buttonOptions="{
            type: 'danger'
          }"
        />
      </div>
      <div class="example">
        tag-modal-list: <a-tag-modal-list
          v-model:value="tags"
          createable
          :api="tagModalListApi"
          valueLabel="value"
          nameLabel="label"
        />
      </div>
      <div class="example">
        tag-group: <a-tag-group
        v-model:value="tagGroupCreateDatas"
        createable
        closable
        :create-loading="tagGroupCreateLoading"
        :remove-loading="tagGroupRemoveLoading"
        @change="tagGroupCreateChange"
      />
      </div>
      <a-table-pro
        @register="tableProRegister"
        :form-label-col="{
          span: 6
        }"
        :form-wrapper-col="{
          span: 18
        }"
      >
        <template #nameTitle>
          {{locale === 'en' ? 'Name' : '姓名'}}
        </template>
        <template #ageTitle>
          {{locale === 'en' ? 'Age' : '年龄'}}
        </template>
        <template #addressTitle>
          {{locale === 'en' ? 'Address' : '地址'}}
        </template>
      </a-table-pro>
      <div class="example">
        <a-button @click="classifyOpen">打开 classify</a-button>
        <a-modal-pro
          @register="classifyRegisterModal"
          title="water"
          :footer="null"
          :min-height="195"
          :body-style="{ height: '227px' }"
          :z-index="1001"
        >
          <a-form-pro
            @register="classifyHndlerForm"
            @submit="classifyOk"
          >
            <template #category="{ model, field }">
              <a-classify
                v-model:value="model[field]"
                style="width: 200px"
                placeholder="请选择房价分类"
                allow-clear
                mode="multiple"
                :api="classifyGetSelectForOptions"
                :create-form-config="classifyCreateFormConfig"
                :create-api="pclassifyPostCreateApi"
                :edit-api="classifyPostEditApi"
                :remove-api="classifyPostRemoveApi"
                remove-aip="确定要删除吗"
                :drawer-table-api="classifyTableApi"
                :drawerz-index="1001"
                :drawer-table-columns="classifyColumns"
                show-search
                drawer-table-draggable
                :drawer-table-drag-api="classifyDragApi"
              />
            </template>
          </a-form-pro>
        </a-modal-pro>
      </div>
      <div class="example">
        <a-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <a-button @click="openModalPro">打开 Modal Pro</a-button>
        <a-modal-pro @register="registerModalPro" title="water">
          这里面是简单的内容
        </a-modal-pro>
      </div>
      <div class="example">
        <a-modal-user
          :options="modalUserOptions"
          v-model:value="modalUserValue"
        />
      </div>
      <a-range-picker
        show-today-button
        show-testerday-button
        show-seven-days-button
        show-thirty-days-button
      ></a-range-picker>
      <div class="example">
        <a-color-picker />
      </div>
      <a-calendar />
      <div class="example">
        <a-select show-search style="width: 200px">
          <a-select-option value="jack">jack</a-select-option>
          <a-select-option value="lucy">lucy</a-select-option>
        </a-select>
        <a-date-picker />
        <a-time-picker />
        <a-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <a-button type="primary" @click="visible = true">Show Modal</a-button>
        <a-button @click="info">Show info</a-button>
        <a-button @click="confirm">Show confirm</a-button>
        <a-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </a-popconfirm>
      </div>
      <div class="example">
        <a-transfer :data-source="[]" show-search :target-keys="[]" :render="item => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <a-calendar :fullscreen="false" :value="moment()" />
      </div>
      <div class="example">
        <a-table :data-source="[]" :columns="tableColumns" />
      </div>
      <a-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </a-modal>
    </div>
  </a-config-provider>
</template>
<script>
import { Modal, useModal, useForm, useTable } from '@fe6/water-pro';
import enUS from '@fe6/water-pro/es/locale/en_US';
import zhCN from '@fe6/water-pro/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import { defineComponent, ref, watch } from 'vue';

moment.locale('en');

// classify start
const classifyGetSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90
      },
      {
        label: 'antd',
        value: 80
      }
    ]);
  }, 1000); 
};

const pclassifyPostCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const classifyPostEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const classifyPostRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const classifyColumns = [
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

const classifyTableApi = ({success}) => {
  const arr = [];
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
}
const classifyDragApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};
  const [
    classifyHndlerForm,
    {
      setFieldsValue: classSetFieldsValue,
      setProps: classifySetProps,
    }
  ] = useForm();
  const { register: classifyRegisterModal, methods: classifyModalMethods } = useModal();
// classify end

// table start
const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
// table end

// modal user start
const modalUserOptions = [
  {
    "id": 5,
    "name": "西三旗部",
    "users": [
      {
        "id": 51,
        "userId": "Cangjingkong",
        "name": "苍井空",
        "alias": "Irresistible teacher",
        departmentId: [1, 2, 3, 5,6, 7, 44],
        "position": "退休",
        "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
        "roleName": "超级管理员",
      },
      {
        "id": 151,
        "userId": "Cang",
        "name": "苍",
        departmentId: [1, 2, 3, 5],
        "alias": "Irresistible teacher",
        "position": "退休",
        "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
        "roleName": "超级管理员",
      }
    ],
    "children": []
  }
];
// modal user end

const tagGroupDatas = [
  {
    name: '这是很长的标签',
    id: 190
  },
  {
    name: 'water',
    id: 290
  }
];


const tableProColumns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: {title: 'nameTitle'}
  },
  {
    dataIndex: 'age',
    key: 'age',
    slots: {title: 'ageTitle'}
  },
  {
    dataIndex: 'address',
    key: 'address',
    slots: {title: 'addressTitle'}
  },
];

function tableProGetFormConfig(locale) {
  return {
    labelCol: {
      span: 4,
      md: {
        span: 6,
      },
    },
    wrapperCol: {
      span: 20,
      md: {
        span: 18,
      },
      style: 'padding-right: 16px'
    },
    actionColOptions: {
      span: 4,
      md: {
        span: 8,
      },
    },
    schemas: [
      {
        field: 'couponName',
        label: () => locale.value === 'en'?'couponName':'优惠券名称',
        component: 'Input',
        componentProps: () => ({
          placeholder: locale.value === 'en'? 'Enter' : '请输入',
        }),
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'status',
        component: 'Select',
        label: () => locale.value === 'en'?'couponStatus':'优惠券状态',
        componentProps: () => ({
          options: [{
            label: locale.value === 'en'?'In use':'使用中',
            value: 1,
          }, {
            label: locale.value === 'en'?'Expired':'已过期',
            value: 2,
          }, {
            label: locale.value === 'en'?'Invalid':'已失效',
            value: 3,
          }],
          placeholder: locale.value === 'en'?'select':'请选择优惠券状态',
        }),
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '组件库',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '官网',
        children: [
          {
            label: '金茂',
            value: 380,
          },
          {
            label: '票大大',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

const getSmsCodeApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
}

export default defineComponent({
  setup() {
    const { register: registerModalPro, methods: modalProMethods } = useModal();
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      moment.locale(val);
    });
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    const [
        tableProRegister,
      ] = useTable({
        useSearchForm: true,
        formConfig: tableProGetFormConfig(locale),
        columns: tableProColumns,
      });

    const tagGroupCreateLoading = ref(false);
    const tagGroupRemoveLoading = ref(false);
    const tagGroupCreateDatas = ref(tagGroupDatas.slice());

    const uploadCardList = ref([ "https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png", 'https://cdn.dev.mosh.cn/image/34/19/9e08f1618c9f8a4fd073290db3be.png' ]);
        
    return {
      tableProRegister,
      tableColumns,
      visible,
      locale,
      moment,
      enUS,
      zhCN,
      info,
      confirm,
      modalUserOptions,
      modalUserValue: ref(['Cangjingkong']),
      registerModalPro,
      openModalPro: () => {
        modalProMethods.openModal();
      },
      // classify start
      classifyGetSelectForOptions,
      pclassifyPostCreateApi,
      classifyPostEditApi,
      classifyPostRemoveApi,
      classifyCreateFormConfig: {
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
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '请输入所在楼层',
              type: 'string',
            }]
          },
        ],
      },
      classifyColumns,
      classifyTableApi,
      classifyDragApi,

      classifyHndlerForm,

      classifyRegisterModal,
      classifyOk: () => {
        classifyModalMethods.openModal(false);
      },
      classifyOpen: () => {
        classifyModalMethods.openModal();
        setTimeout(async() => {
          classifySetProps({
            schemas: [
              {
                field: 'categoryIds',
                label: '卡券分类',
                component: 'Input',
                slot: 'category',
                rules: [{
                  required: true,
                  message: '请输入卡券分类',
                  type: 'array'
                }],
              }
            ],
            labelCol: {
              span: 24
            },
            wrapperCol: {
              span: 24,
            },
            actionColOptions: {
              span: 24,
              push: 0
            },
            showResetButton: false,
            actionAlgin: 'center',
            okText: locale.value === 'en' ? 'ok' : '确定',
            submitButtonOptions: {
              loading: false,
            },
          });
          setTimeout(async() => {
            classSetFieldsValue({
              categoryIds: [90],
            });
          }, 0);
        }, 0);
      },
      // classify end
      tagGroupCreateLoading,
      tagGroupRemoveLoading,
      tagGroupCreateDatas,
      tagGroupCreateChange: (name, eventeType) => {
        if (eventeType === 'add') {
          tagGroupCreateLoading.value = true;
          setTimeout(() => {
            tagGroupCreateLoading.value = false;
            tagGroupCreateDatas.value.push({
              name,
              id: Number((Math.random() * 10).toFixed(0))
            });
          }, 1000);
        }
        if (eventeType === 'remove') {
          tagGroupRemoveLoading.value = true;
          setTimeout(() => {
            tagGroupRemoveLoading.value = false;
            const itemIdex = tagGroupCreateDatas.value.findIndex((item) => item.name === name);
            tagGroupCreateDatas.value.splice(itemIdex, 1);
          }, 1000);
        }
      },
      tags: ref([80, 380]),
      tagModalListApi,
      smsCodeValue: ref(''),
      getSmsCodeApi,
      uploadCardList,
      uploadCardOnChangeUpload(newList) {
        uploadCardList.value = newList;
      },
      uploadNameValue: ref(''),
    };
  },
});
</script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
