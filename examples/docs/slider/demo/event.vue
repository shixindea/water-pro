<template>
  <div class="code-box-demo">
    <a-slider v-model:value="value1" @afterChange="onAfterChange" />
    <a-slider range :step="10" v-model:value="value2" @afterChange="onAfterChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<number[]>([20, 50]);

    const onAfterChange = (value: number) => {
      console.log('afterChange: ', value);
    };

    return {
      value1,
      value2,
      onAfterChange,
    };
  },
});
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
