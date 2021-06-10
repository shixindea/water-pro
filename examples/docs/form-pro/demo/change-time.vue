<template>
  <a-form-pro @register="fieldMapToTimeForm" @submit="fieldMapToTimeSubmit" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro/es/form-pro/index';

const schemas: FormSchema[] =[
  {
    field: 'field1',
    component: 'RangePicker',
    label: '时间段',
    required: true,
  },
  {
    field: 'field2',
    component: 'RangePicker',
    label: '字段2',
    required: true,
  },
];

export default defineComponent({
  setup() {
    const [fieldMapToTimeForm] = useForm({
      schemas,
      fieldMapToTime: [
        [
          'field1',
          ['startDate', 'endDate'],
        ],
        [
          'field2',
          ['activityStartDate', 'activityEndDate'],
        ],
      ],
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
