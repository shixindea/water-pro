<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script>
import notification from '@water-pro/es/notification';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        style: {
          width: '600px',
          marginLeft: `${335 - 600}px`,
        },
      });
    };
    return {
      openNotification,
    };
  },
});
</script>
