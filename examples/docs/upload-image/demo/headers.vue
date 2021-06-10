<template>
  <a-upload-image
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    resultKey=""
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    }
  }
});
</script>
