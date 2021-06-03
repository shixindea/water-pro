<template>
  <div style="padding: 200px;">
    <!-- <demo /> -->
    <WBasicTitle helpMessage="water pro1">Water Pro</WBasicTitle>
    <WBasicTitle helpMessage="water pro2">Water Pro1</WBasicTitle>
    <WBasicTitle helpMessage="water pro3" span>Water Pro3</WBasicTitle>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BasicTitle } from '@fe6/water-pro/es/basic-title';
import '@fe6/water-pro/es/basic-title/style'

export default defineComponent({
  components: {
    WBasicTitle: BasicTitle,
  },
  setup() {
    const value = ref('rgba(255, 69, 0, 0.68)');
    return {
      value
    }
  }
});
</script>
