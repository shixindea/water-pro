<template>
  <a-pagination
    v-model:current="current"
    :page-size-options="pageSizeOptions"
    :total="total"
    show-size-changer
    :page-size="pageSize"
    @showSizeChange="onShowSizeChange"
  >
    <template #buildOptionText="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-else>全部</span>
    </template>
  </a-pagination>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50']);
    const current = ref(1);
    const pageSizeRef = ref(10);
    const total = ref(50);
    const onShowSizeChange = (current: number, pageSize: number) => {
      console.log(pageSize);
      pageSizeRef.value = pageSize;
    };

    return {
      pageSizeOptions,
      current,
      pageSize: pageSizeRef,
      total,
      onShowSizeChange,
    };
  },
});
</script>
