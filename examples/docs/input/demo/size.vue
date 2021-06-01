<template>
  <div class="components-input-demo-size">
    <a-input v-model:value="value" size="large" placeholder="large size" />
    <a-input v-model:value="value" placeholder="default size" />
    <a-input v-model:value="value" size="small" placeholder="small size" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
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
