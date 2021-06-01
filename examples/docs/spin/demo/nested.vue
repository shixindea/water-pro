<template>
  <a-spin :spinning="spinning">
    <a-alert
      message="Alert message title"
      description="Further details about the context of this alert."
    ></a-alert>
  </a-spin>
  <div class="spin-state">
    Loading state：
    <a-switch v-model:checked="spinning" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const spinning = ref<boolean>(false);

    const changeSpinning = () => {
      spinning.value = !spinning.value;
    };

    return {
      spinning,
      changeSpinning,
    };
  },
});
</script>
<style scoped>
.spin-state {
  margin-top: 16px;
}
</style>
