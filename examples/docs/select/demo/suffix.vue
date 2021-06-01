<template>
  <a-select v-model:value="value1" style="width: 120px" @change="handleChange">
    <template #suffixIcon><smile-outlined /></template>
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="disabled" disabled>Disabled</a-select-option>
    <a-select-option value="Yiminghe">yiminghe</a-select-option>
  </a-select>
  <a-select v-model:value="value2" style="width: 120px" disabled>
    <template #suffixIcon><meh-outlined /></template>
    <a-select-option value="lucy">Lucy</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { SmileOutlined, MehOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    return {
      handleChange,
      value1: ref('lucy'),
      value2: ref('lucy'),
    };
  },
  components: {
    SmileOutlined,
    MehOutlined,
  },
});
</script>
