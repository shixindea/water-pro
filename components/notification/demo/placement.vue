<docs>
---
order: 6
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

可以设置通知从右上角、右下角、左下角、左上角弹出。

## en-US

A notification box can pop up from `topRight` or `bottomRight` or `bottomLeft` or `topLeft`.

</docs>

<template>
  <div>
    <a-button type="primary" @click="openNotification('topLeft')">
      <template #icon>
        <IconBytedCornerUpLeft :colors="['currentColor']" />
      </template>
      topLeft
    </a-button>
    <a-button type="primary" @click="openNotification('topRight')">
      <template #icon>
        <IconBytedCornerUpRight :colors="['currentColor']" />
      </template>
      topRight
    </a-button>
    <a-divider />
    <a-button type="primary" @click="openNotification('bottomLeft')">
      <template #icon>
        <IconBytedCornerLeftDown :colors="['currentColor']" />
      </template>
      bottomLeft
    </a-button>
    <a-button type="primary" @click="openNotification('bottomRight')">
      <template #icon>
        <IconBytedCornerRightDown :colors="['currentColor']" />
      </template>
      bottomRight
    </a-button>
  </div>
</template>
<script lang="ts">
import IconBytedCornerUpLeft from '@fe6/icon-vue/lib/icons/byted-corner-up-left';
import IconBytedCornerUpRight from '@fe6/icon-vue/lib/icons/byted-corner-up-right';
import IconBytedCornerLeftDown from '@fe6/icon-vue/lib/icons/byted-corner-left-down';
import IconBytedCornerRightDown from '@fe6/icon-vue/lib/icons/byted-corner-right-down';

import { notification } from '@fe6/water-pro';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconBytedCornerUpLeft,
    IconBytedCornerUpRight,
    IconBytedCornerLeftDown,
    IconBytedCornerRightDown,
  },
  setup() {
    const openNotification = (placement: string) => {
      notification.open({
        message: `Notification ${placement}`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    };
    return {
      openNotification,
    };
  },
});
</script>
