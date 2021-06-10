<template>
  <div style="padding: 200px;">
    <a-form-pro @register="injectFormPro" @submit="handleSubmit" />
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

const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
    helpMessage: '这是一个字段',
  },
];

export default defineComponent({
  components: {
    AFormPro: FormPro,
    // ASpace: Space,
    // AButton: Button,
  },
  setup() {
    const [
      injectFormPro,
    ] = useForm({
      schemas,
    });

    return {
      schemas,
      injectFormPro,
    };
  },
});
</script>
