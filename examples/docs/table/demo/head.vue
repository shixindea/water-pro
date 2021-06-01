<template>
  <a-table :columns="columns" :data-source="data" @change="onChange" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

type TableDataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};

type PaginationType = {
  current: number;
  pageSize: number;
};

type FilterType = {
  name: string;
  address: string;
};

type ColumnType = {
  title: string;
  dataIndex: string;
  filters?: {
    text: string;
    value: string;
    children?: {
      text: string;
      value: string;
    }[];
  }[];
  onFilter?: (value: string, record: TableDataType) => boolean;
  sorter?: (a: TableDataType, b: TableDataType) => number;
  sortDirections?: string[];
  defaultSortOrder?: string;
  filterMultiple?: string[] | boolean;
};

const columns: ColumnType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record: TableDataType) => record.name.indexOf(value) === 0,
    sorter: (a: TableDataType, b: TableDataType) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: TableDataType, b: TableDataType) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value: string, record: TableDataType) => record.address.indexOf(value) === 0,
    sorter: (a: TableDataType, b: TableDataType) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data: TableDataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
export default defineComponent({
  setup() {
    const onChange = (pagination: PaginationType, filters: FilterType[], sorter: ColumnType) => {
      console.log('params', pagination, filters, sorter);
    };
    return {
      data,
      columns,
      onChange,
    };
  },
});
</script>
