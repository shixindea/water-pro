<template>
  <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <a-button>
      <upload-outlined></upload-outlined>
      Upload Directory
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
</script>
