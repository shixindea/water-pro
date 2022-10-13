<docs>
---
order: 4
title:
  zh-CN: 全局化配置
  en-US: ConfigProvider
---

## zh-CN

自定义全局组件的 Empty 样式。

## en-US

Use ConfigProvider set global Empty style.

</docs>

<template>
  <!-- <a-switch
    v-model:checked="customize"
    un-checked-children="default"
    checked-children="customize"
  />
  <a-divider /> -->
  <a-config-provider>
    <template v-if="customize" #renderEmpty>
      <div style="text-align: center">
        <IconBytedSmilingFace :colors="['currentColor']" style="font-size: 20px" />
        <p>Data Not Found</p>
      </div>
    </template>
    <div class="config-provider">
      <h3>Table Pro</h3>
      <a-table-pro @register="basicRegister" />
      <h3>Select</h3>
      <a-select :style="style" :options="[]" />

      <h3>TreeSelect</h3>
      <a-tree-select :style="style" :tree-data="[]" />

      <h3>Cascader</h3>
      <a-cascader :style="style" :options="[]" :show-search="true" />

      <h3>Transfer</h3>
      <a-transfer :data-source="[]" />

      <h3>Table</h3>
      <a-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
      <h3>List</h3>
      <a-list :data-source="[]" />
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import IconBytedSmilingFace from '@fe6/icon-vue/lib/icons/byted-smiling-face';
import { useTable } from '@fe6/water-pro';
import { defineComponent, ref } from 'vue';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export function demoListApi({ success }: any) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: `${index}`,
      name: `${Math.random() + index}-water`,
      age: `1${index}`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
  setTimeout(() => {
    success([]);
  }, 1000);
}

export default defineComponent({
  components: {
    IconBytedSmilingFace,
  },
  setup() {
    const customize = ref<boolean>(true);

    const [basicRegister] = useTable({
      api: demoListApi,
      columns,
    });
    return {
      customize,
      style: { width: '200px' },
      columns: [{ title: 'Name' }, { title: 'Age' }],
      basicRegister,
    };
  },
});
</script>
<style scoped>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>
