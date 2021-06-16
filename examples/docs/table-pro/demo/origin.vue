<template>
  <a-table-pro
    title="原始使用"
    titleHelpMessage="不太推荐"
    :columns="columns"
    :dataSource="data"
    :canResize="canResize"
    :loading="loading"
    :bordered="border"
    showTableSetting
    :pagination="pagination"
  >
    <template #toolbar>
      <a-button type="primary" @click="toggleCanResize">
        {{ !canResize ? '自适应高度' : '取消自适应' }}
      </a-button>
      <a-button type="primary" @click="toggleBorder">
        {{ !border ? '显示边框' : '隐藏边框' }}
      </a-button>
      <a-button type="primary" @click="toggleLoading"> 开启loading </a-button>
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Button from '@fe6/water-pro/es/button/index';
import '@fe6/water-pro/es/button/style';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 200,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 150,
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '编号',
    dataIndex: 'no',
    width: 150,
    sorter: true,
    defaultHidden: true,
  },
  {
    title: '开始时间',
    width: 120,
    sorter: true,
    dataIndex: 'beginTime',
  },
  {
    title: '结束时间',
    width: 120,
    sorter: true,
    dataIndex: 'endTime',
  },
];

function getBasicData() {
  const data: any = (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown',
        age: `1${index}`,
        no: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
  return data;
}

export default defineComponent({
  components: {
    AButton: Button,
  },
  setup() {
    const canResize = ref(false);
    const loading = ref(false);
    const border = ref(true);
    const pagination = ref<any>(false);

    function toggleCanResize() {
      canResize.value = !canResize.value;
    }

    function toggleLoading() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        pagination.value = { pageSize: 20 };
      }, 3000);
    }

    function toggleBorder() {
      border.value = !border.value;
    }

    return {
      columns,
      data: getBasicData(),
      canResize,
      loading,
      border,
      toggleCanResize,
      toggleLoading,
      toggleBorder,
      pagination,
    };
  },
});
</script>
