<template>
  <div id="components-slider-demo-mark">
    <h4>included=true</h4>
    <a-slider :marks="marks" v-model:value="value1" />
    <a-slider range :marks="marks" v-model:value="value2" />

    <h4>included=false</h4>
    <a-slider :marks="marks" :included="false" v-model:value="value3" />

    <h4>marks & step</h4>
    <a-slider :marks="marks" :step="10" v-model:value="value4" />

    <h4>step=null</h4>
    <a-slider :marks="marks" :step="null" v-model:value="value5" />
  </div>
</template>
<script lang="ts">
import { defineComponent, createVNode, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(37);
    const value2 = ref<number[]>([26, 37]);
    const value3 = ref<number>(37);
    const value4 = ref<number>(37);
    const value5 = ref<number>(37);
    const marks = ref<Record<number, any>>({
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50',
        },
        label: createVNode('strong', {}, '100°C'),
      },
    });

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      marks,
    };
  },
});
</script>
<style scoped>
#components-slider-demo-mark h4 {
  margin: 0 0 16px;
}
#components-slider-demo-mark .ant-slider-with-marks {
  margin-bottom: 44px;
}
</style>
