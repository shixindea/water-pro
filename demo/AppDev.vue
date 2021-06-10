<template>
  <div style="padding: 200px;">
    <a-form-pro @register="fieldMapToTimeForm" @submit="fieldMapToTimeSubmit" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import { InfoCircleOutlined } from '@ant-design/icons-vue';
import FormPro, { useForm, FormSchema } from '@fe6/water-pro/es/form-pro/index';
import '@fe6/water-pro/es/form-pro/style';
// import Input from '@fe6/water-pro/es/input';
// import Tooltip from '@fe6/water-pro/es/tooltip';
// import Space from '@fe6/water-pro/es/space';
// import '@fe6/water-pro/es/space/style';
// import Button from '@fe6/water-pro/es/button';
// import '@fe6/water-pro/es/button/style';

const schemas: FormSchema[] =[
    // {
    //   field: 'field1',
    //   component: 'RangePicker',
    //   label: '字段1',
    //   required: true,
    // },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      helpMessage: 'ssss',
      required: true,
      componentProps: {
      // disabled: true,
        // placeholder: 'sss'
      }
    },
  ];

export default defineComponent({
  components: {
    AFormPro: FormPro,
    // ASpace: Space,
    // AButton: Button,
  },
  setup() {
    const [fieldMapToTimeForm] = useForm({
      schemas,
      colon: false,
      // autoSetPlaceHolder: false,
    });

    const fieldMapToTimeSubmit = async (ressss) => {
      console.log(JSON.stringify(ressss), 'fieldMapToTimeParams');
    };
    return {
      fieldMapToTimeForm,
      fieldMapToTimeSubmit,
    };
  },
});
</script>
