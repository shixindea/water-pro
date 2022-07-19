<docs>
---
order: 0
title:
  zh-CN: 改变时间
  en-US: Change Time
---

## zh-CN

一个时间段的字段，改变成两个自定义字段的实践。

## en-US

Change Time.
</docs>

<template>
  <a-form-pro @register="fieldMapToTimeForm" @submit="fieldMapToTimeSubmit" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';
import { defineComponent, onMounted } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'mortdate',
    component: 'DatePicker',
    componentProps: {
      type: 'multiple',
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY年MM月DD日',
      multipleMaxTagTextLength: 15,
      multipleMaxTagCount: 4,
      multipleTagGroupPopoverClass: 'test1',
      disabledDate: (current: Dayjs) => {
        return current && current < dayjs().endOf('day');
      },
    },
    label: '多选日期',
  },
  {
    field: 'mortmonth',
    component: 'MonthPicker',
    componentProps: {
      type: 'multiple',
      multipleMaxTagCount: 2,
      valueFormat: 'YYYY-MM',
    },
    label: '多选月份',
  },
  {
    field: 'mortyear',
    component: 'YearPicker',
    componentProps: {
      type: 'multiple',
      valueFormat: 'YYYY',
    },
    label: '多选年份',
  },
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
    const [fieldMapToTimeForm, { setFieldsValue }] = useForm({
      schemas,
      labelWidth: 140,
      fieldMapToTime: [
        ['rangeDate', ['startDate', 'endDate']],
        ['rangeTime', ['timeStartDate', 'timeEndDate']],
      ],
    });

    const fieldMapToTimeSubmit = async (ressss) => {
      console.log(ressss, 'ctfieldMapToTimeParams');
    };

    onMounted(() => {
      setFieldsValue({
        mortdate: [
          dayjs().subtract(3, 'd').format('YYYY-MM-DD'),
          dayjs().add(3, 'd').format('YYYY-MM-DD'),
        ],
        mortmonth: [dayjs().subtract(3, 'd').format('YYYY-MM-DD')],
      });
    });

    return {
      fieldMapToTimeForm,
      fieldMapToTimeSubmit,
    };
  },
});
</script>
