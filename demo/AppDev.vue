<template>
  <div style="padding: 200px;">
    <AUploadImage
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      resultKey=""
      disabled
      :value="'ddd'"
    />
    <AUploadImage
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      resultKey=""
    >
      <template #placeholder>
        <div>
          123
        </div>
      </template>
    </AUploadImage>
    <AUploadImage
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      resultKey=""
    ></AUploadImage>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import UploadImage from '@fe6/water-pro/es/upload-image';
import '@fe6/water-pro/es/upload-image/style'

export default defineComponent({
  components: {
    AUploadImage: UploadImage,
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
