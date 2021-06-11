<template>
  <a-form-pro @register="fieldMapToTimeForm" @submit="fieldMapToTimeSubmit" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro/es/form-pro/index';

const schemas: FormSchema[] =[
  {
    field: 'ctfield1',
    component: 'RangePicker',
    label: '时间段',
    required: true,
  },
  {
    field: 'ctfield2',
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
          'ctfield1',
          ['startDate', 'endDate'],
        ],
        [
          'ctfield2',
          ['activityStartDate', 'activityEndDate'],
        ],
      ],
    });

    const fieldMapToTimeSubmit = async (ressss) => {
      console.log(JSON.stringify(ressss), 'ctfieldMapToTimeParams');
    };
    return {
      fieldMapToTimeForm,
      fieldMapToTimeSubmit,
    };
  },
});
</script>
