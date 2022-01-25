<docs>
---
order: 0
title:
  zh-CN: 关联
  en-US: On
---

## zh-CN

重置即提交，提交即重置。

## en-US

On.
</docs>

<template>
  <a-form-pro @register="fieldMapToTimeForm" @reset="reset" @submit="fieldMapToTimeSubmit" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';
import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'date',
    component: 'DatePicker',
    label: '日期',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'month',
    component: 'MonthPicker',
    label: '月份',
    componentProps: {
      valueFormat: 'YYYY-MM',
    },
  },
  {
    field: 'year',
    component: 'YearPicker',
    label: '年份',
    componentProps: {
      valueFormat: 'YYYY',
    },
  },
  {
    field: 'week',
    component: 'WeekPicker',
    label: '周',
    componentProps: {
      valueFormat: 'YYYY-wo',
    },
  },
  {
    field: 'time',
    component: 'TimePicker',
    label: '时间',
    componentProps: {
      valueFormat: 'HH-mm-ss',
    },
  },
  {
    field: 'rangeDate',
    component: 'RangePicker',
    label: '日期区间',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'rangeDateTime',
    component: 'RangePicker',
    label: '日期时间区间',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    field: 'rangeGroupPicker',
    component: 'RangeGroupPicker',
    label: '日期区间快捷',
    componentProps: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      showTime: true,
      timeRounding: true,
      showTodayButton: true,
      showYesterdayButton: true,
      showSevenDaysButton: true,
      showThirtyDaysButton: true,
    },
  },
  {
    field: 'rangeTime',
    component: 'TimeRangePicker',
    label: '时间区间',
    componentProps: {
      valueFormat: 'HH:mm:ss',
    },
  },
];

export default defineComponent({
  setup() {
    const [fieldMapToTimeForm] = useForm({
      schemas,
      submitOnReset: true,
      resetOnSubmit: true,
      labelWidth: 140,
      fieldMapToTime: [
        ['rangeDate', ['startDate', 'endDate']],
        ['rangeTime', ['timeStartDate', 'timeEndDate']],
      ],
    });

    const fieldMapToTimeSubmit = async (ressss) => {
      console.log(ressss, 'submit');
    };
    const reset = () => {
      console.log('reset');
    };
    return {
      fieldMapToTimeForm,
      reset,
      fieldMapToTimeSubmit,
    };
  },
});
</script>
