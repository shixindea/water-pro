<template>
  <div>
    <a-slider :tip-formatter="formatter" />
    <a-slider :tip-formatter="null" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const disabled = ref<boolean>(false);
    const formatter = (value: number) => {
      return `${value}%`;
    };

    return {
      disabled,
      formatter,
    };
  },
});
</script>
