<template>
  <div>
    <a-rate v-model:value="value1" />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <a-rate :allow-clear="false" v-model:value="value2" />
    <span class="ant-rate-text">allowClear: false</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(3);
    return {
      value1,
      value2,
    };
  },
});
</script>
