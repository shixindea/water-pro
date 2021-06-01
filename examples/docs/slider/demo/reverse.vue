<template>
  <div>
    <a-slider v-model:value="value1" :reverse="reverse" />
    <a-slider range v-model:value="value2" :reverse="reverse" />
    Reversed:
    <a-switch size="small" v-model:checked="reverse" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<number[]>([20, 50]);
    const reverse = ref<boolean>(true);

    return {
      value1,
      value2,
      reverse,
    };
  },
});
</script>
