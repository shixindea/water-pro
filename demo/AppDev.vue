<template>
  <div style="padding: 200px;">
    <a-select
      style="width: 200px;"
      :options="options"
      v-model:value="selectValue"
      @change="chja"
    ></a-select>
    <a-form-pro label-width="200px" :schemas="schemas" @submit="fieldMapToTimeSubmit" />
  </div>
</template>
<script lang="ts">
import { defineComponent, unref } from 'vue';
import FormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro/index';
import '@fe6/water-pro/es/form-pro/style';
import Select from '@fe6/water-pro/es/select/index';
import '@fe6/water-pro/es/select/style';

const options = [
  {
    value: 1,
    label: 'lee',
  },
  {
    value: 2,
    label: 'water',
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

const schemas: FormSchema[] =[
    {
      field: 'field1',
      component: 'Select',
      label: '字段1',
      dynamicRules: (aaa) => {
        return [
          {
            required: true,
            validator: () => {
              const { field1 } = aaa.value.values;
              if (!field1) {
                return Promise.reject('请选择 字段1');
              }
              return Promise.resolve();
            },
          },
        ];
      },
      componentProps: {
        options,
      }
    },
    {
      field: 'field2',
      component: 'SelectApi',
      label: '字段2',
      dynamicRules: (aaa) => {
        return [
          {
            required: true,
            validator: () => {
              const { field2 } = aaa.value.values;
              if (!field2) {
                return Promise.reject('请选择 字段2');
              }
              return Promise.resolve();
            },
          },
        ];
      },
      componentProps: {
        api: getSelectForOptions,
      }
    },
  ];

export default defineComponent({
  components: {
    AFormPro: FormPro,
    ASelect: Select,
  },
  setup() {
    // const [fieldMapToTimeForm] = useForm({
    //   schemas,
    // });

    const fieldMapToTimeSubmit = async (ressss) => {
      console.log(JSON.stringify(ressss), 'fieldMapToTimeParams');
    };
    return {
      // fieldMapToTimeForm,
      fieldMapToTimeSubmit,
      options,
      schemas,
      selectValue: '',
      chja: (aaa) => {
        console.log(aaa, 'aaa');
      }
    };
  },
});
</script>
