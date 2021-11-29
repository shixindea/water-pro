<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { h, defineComponent } from 'vue';
import {Button} from '@fe6/water-pro';
import { notification } from '@fe6/water-pro';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default defineComponent({
  setup() {
    const openNotification = () => {
      const key = `open${Date.now()}`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h(
          Button,
          {
            type: 'primary',
            size: 'small',
            onClick: () => notification.close(key),
          },
          'Confirm',
        ),
        key,
        onClose: close,
      });
    };

    return {
      openNotification,
    };
  },
});
</script>
