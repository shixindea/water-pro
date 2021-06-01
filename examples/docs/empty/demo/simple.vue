<template>
  <a-empty :image="simpleImage" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Empty from '../../../../components/empty';
export default defineComponent({
  setup() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
    };
  },
});
</script>
