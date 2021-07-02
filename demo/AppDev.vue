<template>
  <a-upload-image
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    resultKey=""
    :headers="headers"
  />
    <!-- 滚动的时候颜色选择器有问题 -->
    <!-- <AColorPicker
    ></AColorPicker> -->
</template>
<script lang="tsx">
// TODO
// - 指令
// - use
import { defineComponent, ref } from 'vue';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';

import AUploadImage from '@fe6/water-pro/es/upload-image';
import '@fe6/water-pro/es/upload-image/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

export default defineComponent({
  components: {
    AUploadImage,
    // AColorPicker: ColorPicker,
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
