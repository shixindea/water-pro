<template>
  <a-table-pro
    @register="customerCellTable"
  >
    <template #id="{ record }"> ID: {{ record.id }} </template>
    <template #no="{ record }">
      <a-tag color="green">
        {{ record.no }}
      </a-tag>
    </template>
    <template #img>
      <a-table-img
        :imgList="['https://www.evente.cn/_nuxt/img/2d0fa17.png', 'https://www.evente.cn/_nuxt/img/c45fac2.png','https://www.evente.cn/_nuxt/img/2d0fa17.png', 'https://www.evente.cn/_nuxt/img/c45fac2.png','https://www.evente.cn/_nuxt/img/2d0fa17.png', 'https://www.evente.cn/_nuxt/img/c45fac2.png','https://www.evente.cn/_nuxt/img/2d0fa17.png']"
      />
    </template>
    <template #category="{ record }">
      <a-tag color="green">
        {{ record.no }}
      </a-tag>
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable, BasicColumn, TableImg } from '@fe6/water-pro/es/table-pro';

const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      slots: { customRender: 'id' },
    },
    {
      title: '分类',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      defaultHidden: true,
      slots: { customRender: 'category' },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '头像',
      dataIndex: 'img',
      width: 120,
      slots: { customRender: 'img' },
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '编号',
      dataIndex: 'no',
      slots: { customRender: 'no' },
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
    },
  ];

export function demoListApi() {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      no: `${index + 10}`,
      age: `1${index}`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  return new Promise((selove) => {
    setTimeout(() => {
      selove(arr);
    }, 1000);
  });
}

export default defineComponent({
  components: {
    ATableImg: TableImg,
  },
  setup() {
    const [customerCellTable] = useTable({
      api: demoListApi,
      columns: columns,
    });

    return {
      customerCellTable,
    };
  },
});
</script>
