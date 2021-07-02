<template>
  <div style="padding: 200px;">
    <AButton @click="open">打开</AButton>
    <AModalPro @register="registerModal" title="water" text="这只是个小提示">
      这里面是简单的内容
    </AModalPro>
    <!-- 滚动的时候颜色选择器有问题 -->
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="tsx">
// TODO
// - 指令
// - use
import { defineComponent, ref } from 'vue';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';

import AModalPro, { useModal } from '@fe6/water-pro/es/modal-pro';
import '@fe6/water-pro/es/modal-pro/style';
import AButton from '@fe6/water-pro/es/button';
import '@fe6/water-pro/es/button/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

export default defineComponent({
  components: {
    AModalPro,
    AButton,
    // AColorPicker: ColorPicker,
  },
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
    }
  },
});
</script>
