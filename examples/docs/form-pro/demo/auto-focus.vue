<template>
  <a-form-pro
    autoFocusFirstItem
    :schemas="schemas"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema } from '@fe6/water-pro/es/form-pro/index';

const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
});
</script>
