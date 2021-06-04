<template>
  <div style="padding: 200px;">
    <AButton @click="open">打开</AButton>
    <AModalPro
      @register="registerModal"
      title="water"
      @ok="okHandle"
      :loading="modalLoading"
      loadingTip="我们在努力的加载"
      :okButtonProps="{
        loading: modalLoading,
      }"
    >
      这里面是简单的内容
    </AModalPro>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import AButton from '@fe6/water-pro/es/button';
import '@fe6/water-pro/es/button/style'
import { ModalPro, useModal } from '@fe6/water-pro/es/modal-pro';
import '@fe6/water-pro/es/modal-pro/style'

export default defineComponent({
  components: {
    AModalPro: ModalPro,
    AButton,
  },
  setup(props) {
    const { register: registerModal, methods: modalMethods } = useModal();
    const modalLoading = ref(false);
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
      okHandle: () => {
        modalLoading.value = true;
        setTimeout(() => {
          modalMethods.openModal(false);
          modalLoading.value = false;
        }, 1500);
      },
      modalLoading,
    }
  }
});
</script>
