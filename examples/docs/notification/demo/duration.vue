<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
      });
    };

    return {
      openNotification,
    };
  },
});
</script>
