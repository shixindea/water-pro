<template>
  <div>
    <a-input-number :min="1" :max="10" :disabled="disabled" v-model:value="value" />
    <div style="margin-top: 20px">
      <a-button type="primary" @click="toggle">Toggle disabled</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(3);
    const disabled = ref<boolean>(true);

    const toggle = () => {
      disabled.value = !disabled.value;
    };

    return {
      value,
      disabled,
      toggle,
    };
  },
});
</script>
