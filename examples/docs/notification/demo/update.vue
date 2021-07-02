<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

const key = 'updatable';
export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        notification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    };
    return {
      openNotification,
    };
  },
});
</script>
