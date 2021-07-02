<template>
  <a-button type="primary" @click="openMessage">Open the message box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

const key = 'updatable';
export default defineComponent({
  setup() {
    const openMessage = () => {
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    };
    return {
      openMessage,
    };
  },
});
</script>
