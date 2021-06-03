<template>
  <a-button @click="success">Display a loading indicator</a-button>
</template>
<script lang="ts">
import message from '@fe6/water-pro/es/message';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      const hide = message.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    };
    return {
      success,
    };
  },
});
</script>
