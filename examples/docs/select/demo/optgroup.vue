<template>
  <a-select v-model:value="value" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <template #label>
        <span>
          <user-outlined />
          Manager
        </span>
      </template>
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
    </a-select-opt-group>
    <a-select-opt-group label="Engineer">
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
      <a-select-option value="Yiminghe1">yiminghe1</a-select-option>
    </a-select-opt-group>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    return {
      value: ref(['lucy']),
      handleChange,
    };
  },
  components: {
    UserOutlined,
  },
});
</script>
