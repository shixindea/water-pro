<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import notification from '@fe6/water-pro/es/notification';
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: h(SmileOutlined, { style: 'color: #108ee9' }),
      });
    };

    return {
      openNotification,
    };
  },
});
</script>
