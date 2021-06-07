<template>
  <div style="padding: 200px;">
    <AUploadName
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      resultKey=""
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import UploadName from '@fe6/water-pro/es/upload-name';
import '@fe6/water-pro/es/upload-name/style'

export default defineComponent({
  components: {
    AUploadName: UploadName,
  },
  setup() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    }
  }
});
</script>
