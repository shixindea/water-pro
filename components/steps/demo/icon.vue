<docs>
---
order: 2
title:
  zh-CN: 带图标的步骤条
  en-US: With icon
---

## zh-CN

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

## en-US

You can use your own custom icons by setting the property `icon` for `Steps.Step`.
</docs>
<template>
  <a-steps>
    <a-step status="finish" title="Login">
      <template #icon>
        <IconBytedUser :colors="['currentColor']" />
      </template>
    </a-step>
    <a-step status="finish" title="Verification">
      <template #icon>
        <IconBytedSteoller :colors="['currentColor']" />
      </template>
    </a-step>
    <a-step status="process" title="Pay">
      <template #icon>
        <a-spin />
      </template>
    </a-step>
    <a-step status="wait" title="Done">
      <template #icon>
        <IconBytedSmilingFace :colors="['currentColor']" />
      </template>
    </a-step>
  </a-steps>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IconBytedUser from '@fe6/icon-vue/lib/icons/byted-user';
import IconBytedSteoller from '@fe6/icon-vue/lib/icons/byted-steoller';
import IconBytedSmilingFace from '@fe6/icon-vue/lib/icons/byted-smiling-face';

export default defineComponent({
  components: {
    IconBytedUser,
    IconBytedSteoller,
    IconBytedSmilingFace,
  },
});
</script>
