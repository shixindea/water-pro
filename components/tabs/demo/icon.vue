<docs>
---
order: 2
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

有图标的标签。

## en-US

The Tab with Icon.

</docs>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <IconBytedApple :colors="['currentColor']" />
          Tab 1
        </span>
      </template>
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <IconBytedAndroid :colors="['currentColor']" />
          Tab 2
        </span>
      </template>
      Tab 2
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import IconBytedApple from '@fe6/icon-vue/lib/icons/byted-apple';
import IconBytedAndroid from '@fe6/icon-vue/lib/icons/byted-android';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    IconBytedApple,
    IconBytedAndroid,
  },
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>
