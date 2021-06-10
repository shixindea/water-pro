<template>
   <a-select-api
    style="width: 200px"
    :api="getSelectForOptions"
    v-model:value="selectApiValue"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getSelectForOptions = () => {
  return new Promise((selove) => {
    setTimeout(() => {
      selove([
        {
          label: 'water',
          value: 90
        },
        {
          label: 'antd',
          value: 80
        }
      ]);
    }, 1000);
  })
};

export default defineComponent({
  setup() {
    const selectApiValue = ref(80);
    return {
      focus,
        getSelectForOptions,
        selectApiValue,
    };
  },
});
</script>

