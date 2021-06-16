<template>
  <div style="padding: 200px;">
    <a-table-pro
      @register="registerTable"
    >
      <template #customTitle>
        <span>
          姓名1
        </span>
      </template>
    </a-table-pro>
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="ts">
// TODO
// - 指令
// - use
import { defineComponent} from 'vue';
import TablePro, { useTable, BasicColumn } from '@fe6/water-pro/es/table-pro';
import '@fe6/water-pro/es/table-pro/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 1120,
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: 1120,
      // customTitle: 'adsf'
      customCell: () => {
        return {
          title: 'sss'
        }
      },
    },
    {
      title: '地址',
      dataIndex: 'address',
      flag: 'INDEX', // 相当于行序号
      width: 1120,
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
      // format: (
      //   text: string,
      //   record: Recordable,
      //   index: number,
      // ) => text,
      filters: [
        {
          text: 'water',
          value: 'id'
        }
      ],
      width: 1120,
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      width: 1120,
    },
  ];

export function demoListApi() {
  const arr: any = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: `${index}`,
      name: 'water',
      age: `1${index}`,
      no: `${index + 10}`,
      address: '北京',
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
    ATablePro: TablePro,
    // AColorPicker: ColorPicker,
  },
  setup() {
    const [registerTable] = useTable({
      api: demoListApi,
      columns,
      // autoCreateKey: false,
      totalRender: () => {return '222';},
      // scroll: {x: 80,y:100},
      // showIndexColumn: true,
      // TODO
      // onChange: () => {
      //   console.log(222, '222');
      // },
    });

    return {
      registerTable,
    };
  },
});
</script>
