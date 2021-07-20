<template>
  <a-upload-image
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    resultKey=""
    :headers="headers"
  />
  -{{list}}-
  <a-upload-card
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    resultKey="data"
    v-model:value="list"
    :headers="headers"
  />
  <APreviewImage
    value="https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png"
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

import APreviewImage from '@fe6/water-pro/es/preview-image';
import '@fe6/water-pro/es/preview-image/style';
import AUploadImage from '@fe6/water-pro/es/upload-image';
import '@fe6/water-pro/es/upload-image/style';
import AUploadCard from '@fe6/water-pro/es/upload-card';
import '@fe6/water-pro/es/upload-card/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

export default defineComponent({
  components: {
    AUploadImage,
    AUploadCard,
    APreviewImage,
    // AColorPicker: ColorPicker,
  },
  setup() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
      list: ref([ "https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png" ]),
    }
  }
});
</script>
