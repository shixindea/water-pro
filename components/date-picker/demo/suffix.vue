<docs>
---
order: 13
title:
  zh-CN: 后缀图标
  en-US: Suffix
---

## zh-CN

通过 `suffixIcon` 自定义后缀图标

## en-US

Customize the suffix icon through `suffixIcon`

</docs>

<template>
  <a-space direction="vertical">
    <a-date-picker @change="onChange">
      <template #suffixIcon>
        <IconAntdSmile />
      </template>
    </a-date-picker>
    <a-date-picker placeholder="Select month" picker="month" @change="onChange">
      <template #suffixIcon>
        <IconAntdSmile />
      </template>
    </a-date-picker>
    <a-range-picker @change="onRangeChange">
      <template #suffixIcon>
        <IconAntdSmile />
      </template>
    </a-range-picker>
    <a-date-picker placeholder="Select week" picker="week" @change="onChange">
      <template #suffixIcon>
        <IconAntdSmile />
      </template>
    </a-date-picker>
    <a-date-picker suffix-icon="ab" @change="onChange" />
    <a-date-picker suffix-icon="ab" placeholder="Select month" picker="month" @change="onChange" />
    <a-range-picker suffix-icon="ab" @change="onRangeChange" />
    <a-date-picker suffix-icon="ab" placeholder="Select week" picker="week" @change="onChange" />
  </a-space>
</template>
<script lang="ts">
import { IconAntdSmile } from '@fe6/icon-vue';
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconAntdSmile,
  },
  setup() {
    const onChange = (date: Dayjs | string, dateString: string) => {
      console.log(date, dateString);
    };

    const onRangeChange = (date: [Dayjs, Dayjs], dateString: [string, string]) => {
      console.log(date, dateString);
    };
    return {
      onChange,
      onRangeChange,
    };
  },
});
</script>
