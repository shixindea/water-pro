<template>
  <div>
    <a-input-number size="large" :min="1" :max="100000" v-model:value="value1" />
    <a-input-number :min="1" :max="100000" v-model:value="value2" />
    <a-input-number size="small" :min="1" :max="100000" v-model:value="value3" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(3);
    const value3 = ref<number>(3);

    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>
