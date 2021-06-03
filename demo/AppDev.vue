<template>
  <div style="padding: 200px;">
    <!-- <demo /> -->
    -{{value}}-
    <WColorPicker disabled v-model:value="value"></WColorPicker>
    <WColorPicker v-model:value="value" size="small"></WColorPicker>
    <WColorPicker v-model:value="value" size="large"></WColorPicker>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ColorPicker } from '@fe6/water-pro/es/color-picker';
import '@fe6/water-pro/es/color-picker/style'

export default defineComponent({
  components: {
    WColorPicker: ColorPicker,
  },
  setup() {
    const value = ref('rgba(255, 69, 0, 0.68)');
    return {
      value
    }
  }
});
</script>
