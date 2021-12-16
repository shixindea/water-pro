<docs>
---
order: 0
title:
  zh-CN: 分组
  en-US: Group
---

## zh-CN

分组。

## en-US

Group

</docs>

<template>
  <a-select-api style="width: 200px" :options="group" v-model:value="selectApiValue" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

const defGroup = [
  {
    label: 'water',
    value: 90,
    options: [
      {
        label: 'select',
        disabled: true,
        value: 901,
      },
      {
        label: 'input',
        value: 902,
      },
    ],
  },
  {
    label: 'vant',
    value: 80,
    options: [
      {
        label: 'good',
        value: 801,
      },
      {
        label: 'best',
        value: 802,
      },
    ],
  },
  {
    label: 'antd',
    disabled: true,
    value: 80,
  },
];

export default defineComponent({
  setup() {
    const selectApiValue = ref('');
    const group = ref([]);

    onMounted(() => {
      group.value = defGroup;
    });
    return {
      group,
      selectApiValue,
    };
  },
});
</script>
