<template>
  <div class="components-input-demo-size">
    <a-space direction="vertical">
      <a-color-picker v-model:value="value" size="large" />
      <a-color-picker v-model:value="value" />
      <a-color-picker v-model:value="value" size="small" />
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#1996f9');
    return {
      value,
    };
  },
});
</script>
<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
