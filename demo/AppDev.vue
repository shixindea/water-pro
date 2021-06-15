<template>
  <div style="padding: 200px;">
    <a-form-pro @register="fullFieldForm" @submit="fullFieldSubmit">
      <template #inputGroup="{ model, field }">
        <a-input-group compact>
          <a-select placeholder="卡类型" v-model:value="model['inputGroupSelect']" style="width: 20%">
            <a-select-option value="zfb"> 支付宝 </a-select-option>
            <a-select-option value="yl"> 银联 </a-select-option>
          </a-select>
          <a-input style="width: 80%" placeholder="卡号" v-model:value="model[field]" />
        </a-input-group>
      </template>
    </a-form-pro>
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="ts">
// TODO
// - 指令
// - use
import { defineComponent, h } from 'vue';
import { isArray } from '@fe6/shared';
import FormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro/index';
import '@fe6/water-pro/es/form-pro/style';
import Input from '@fe6/water-pro/es/input/index';
import '@fe6/water-pro/es/input/style';
import Select from '@fe6/water-pro/es/select/index';
import '@fe6/water-pro/es/select/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

const tagModalListApi = () => {
  return new Promise((sss) => {
    setTimeout(() => {
      sss([
        {
          name: '组件库',
          children: [
            {
              name: 'water',
              id: 80,
            },
            {
              name: 'antd',
              id: 180,
            },
          ],
        },
        {
          name: '官网',
          children: [
            {
              name: '金茂',
              id: 380,
            },
            {
              name: '票大大',
              id: 480,
            },
          ],
        },
      ]);
    }, 1000);
  })
}

const tagModalListConfig: FormSchema[] = [
  {
    field: 'tagModalListSelect',
    component: 'TagModalList',
    label: '标签弹框 select 模式',
    componentProps: {
      createable: true,
      showMoreButton: true,
      countMaxLength: 2,
      type: 'select',
      api: tagModalListApi,
    },
  },
  {
    field: 'tagModalListDefault',
    component: 'TagModalList',
    label: '标签弹框 默认 模式',
    componentProps: {
      createable: true,
      api: tagModalListApi,
    },
  },
];

const getSelectForOptions = () => {
  return new Promise((selove) => {
    setTimeout(() => {
      selove([
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
  })
};

const selectApiConf: FormSchema = {
  field: 'selectApi',
  component: 'SelectApi',
  label: '接口选择器',
  dynamicRules: (ruleParams) => {
    return [
      {
        required: true,
        validator: () => {
          const { selectApi } = ruleParams.value.values;
          if (!selectApi) {
            return Promise.reject('请选择 接口选择器');
          }
          return Promise.resolve();
        },
      },
    ];
  },
  componentProps: {
    api: getSelectForOptions,
  }
};

const schemas: FormSchema[] =[
    {
      field: 'input',
      component: 'Input',
      label: '输入框',
    },
    {
      field: 'inputCount',
      component: 'InputCount',
      label: '限制数字的输入框',
      componentProps: {
        maxLength: 10,
      }
    },
    {
      field: 'inputPassword',
      component: 'InputPassword',
      label: '密码',
    },
    {
      field: 'inputSearch',
      component: 'InputSearch',
      label: '搜索框',
    },
    {
      field: 'inputTextArea',
      component: 'InputTextArea',
      label: '文本域',
    },
    {
      field: 'autoComplete',
      component: 'AutoComplete',
      label: '自动完成',
      helpMessage: 'TODO: [fix] onSearch 等为什么在 vite 中会是 数组',
      componentProps: {
        onSearch: () => {
          console.log(222, '222');
        }
      },
    },
    {
      field: 'inputNumber',
      component: 'InputNumber',
      label: '数字输入框',
    },
    {
      field: 'inputGroup',
      component: 'InputGroup',
      label: '输入框组合',
      slot: 'inputGroup',
      helpMessage: 'NOTE: 在 form-pro 模板中对应 inputGroup 的 slot',
      dynamicRules: (ruleParams) => {
        return [
          {
            required: true,
            validator: () => {
              const { inputGroup, inputGroupSelect } = ruleParams.value.values;
              console.log(ruleParams.value.values.inputGroup, 'ruleParams.value.values');
              if (!inputGroupSelect) {
                return Promise.reject('请选择 卡类型');
              }
              if (!inputGroup) {
                return Promise.reject('请输入 卡号');
              }
              return Promise.resolve();
            },
          },
        ];
      },
    },
    {
      field: 'select',
      component: 'Select',
      label: '选择器',
      componentProps: {
        options: [
          {
            value: 1,
            label: 'lee',
          },
          {
            value: 2,
            label: 'water',
          }
        ],
      }
    },
    selectApiConf,
    {
      field: 'treeSelect',
      component: 'TreeSelect',
      label: '树形选择器',
      helpMessage: 'TODO: [feat] 暂未提供 api 自动拉去组件，后续按需求增加',
      componentProps: {
        treeData:  [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
              },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
                disabled: true,
              },
              {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1',
              },
            ],
          },
        ],
      }
    },
    {
      field: 'switch',
      component: 'Switch',
      label: '开关',
    },
    {
      field: 'radioGroup',
      component: 'RadioGroup',
      label: '单选组合',
      helpMessage: 'TODO: [feat] 暂未提供 api 自动拉去组件，后续按需求增加',
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'checkbox',
      component: 'Checkbox',
      label: '多选',
      renderComponentContent: ({ model }) => {
        return h('span', `${model.checkbox ? '已' : ''}阅读 Water 协议`);
      },
    },
    {
      field: 'checkboxGroup',
      component: 'CheckboxGroup',
      label: '多选组合',
      helpMessage: 'TODO: [feat] 暂未提供 api 自动拉去组件，后续按需求增加',
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'cascader',
      component: 'Cascader',
      label: '级联选择',
      helpMessage: 'TODO: [feat] 暂未提供 api 自动拉去组件，后续按需求增加',
      componentProps: {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      field: 'datePicker',
      component: 'DatePicker',
      label: '日期',
    },
    {
      field: 'monthPicker',
      component: 'MonthPicker',
      label: '月份',
    },
    {
      field: 'weekPicker',
      component: 'WeekPicker',
      label: '周选择',
    },
    {
      field: 'timePicker',
      component: 'TimePicker',
      label: '时间',
    },
    {
      field: 'rangePicker',
      component: 'RangePicker',
      label: '日期区间',
    },
    {
      field: 'colorPicker',
      component: 'ColorPicker',
      label: '颜色',
      helpMessage: 'TODO: [fix] 元素在可视区之外显示框位置有问题',
    },
    {
      field: 'rangePicker',
      component: 'RangePicker',
      label: '日期区间',
    },
    {
      field: 'tagGroup',
      component: 'TagGroup',
      label: '标签组合',
      helpMessage: 'TODO: [feat] componentProps 为方法的时候，随着 model 变化而执行，现在只执行一次',
      dynamicRules: () => {
        return [{ required: true, type: 'array', message: '请添加标签名称' }];
      },
      // NOTE 在这里真正控制数据格式
      valueLayout: (name, field, props, status) => {
        console.log(name, field, props, status, 'name, field, props, status');
        // 如果删除，编辑的时候添加 type = 'delete' 字段，创建的时候直接删除
        const fieldValue = (props.formModel as any)[field as string];
        if (status === 'remove' && isArray(fieldValue)) {
          const removeItem = fieldValue.find((tag: any) => tag.name === name);
          if (removeItem) {
            if (!removeItem.id) {
              return fieldValue.filter((tag: any) => tag.name !== name);
            } else {
              return fieldValue
                .map((tag: any) => {
                  if (tag.name === name) {
                    return tag.id !== ''
                      ? {
                          ...tag,
                          type: 'delete',
                        }
                      : tag; // 修复已有id的同名字的删除再新建
                  }
                  return tag;
                })
                .filter((tag: any) => !!tag);
            }
          }
        }
        const newValue = { name, id: name };
        return fieldValue && fieldValue.length
          ? [...fieldValue, newValue]
          : [newValue];
      },
      componentProps: {
        createable: true,
        closable: true,
      },
    },
    ...tagModalListConfig,
    {
      field: 'uploadImage',
      component: 'UploadImage',
      label: '上传图片',
      changeEvent: 'changeUpload',
      helpMessage: 'TODO: [fix] 上传的接口可能不好用',
      componentProps: {
        placeholder: 'UploadImage 自动上传',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      },
    },
    {
      field: 'uploadName',
      component: 'UploadName',
      changeEvent: 'changeUpload',
      label: '上传显示名字',
      helpMessage: 'TODO: [test] 上传之后需要调用上传文件接口测试一下',
      componentProps: () => {
        return {
          accept: '*',
          placeholder: 'UploadName 不是自动上传',
          autoUpload: false,
        };
      },
    },
  ];

export default defineComponent({
  components: {
    AFormPro: FormPro,
    [Select.name]: Select,
    ASelectOption: Select.Option,
    [Input.name]: Input,
    [Input.Group.name]: Input.Group,
    // AColorPicker: ColorPicker,
  },
  setup() {
    const [fullFieldForm] = useForm({
      schemas,
      labelWidth: 260,
    });

    const fullFieldSubmit = (ressss) => {
      console.log(JSON.stringify(ressss), 'fullFieldParams');
    };

    return {
      fullFieldForm,
      fullFieldSubmit,
    };
  },
});
</script>
