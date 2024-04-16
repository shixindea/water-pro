<docs>
---
order: 3
title:
  zh-CN: 灰色线
  en-US: Line
---

## zh-CN

可以没有灰色线， `:showLine="false"`。

## en-US

In order to fit in more tabs, they can slide left and right (or up and down).

</docs>

<template>
  <div>
    <a-tabs
      v-model:activeKey="activeKey"
      :style="{ height: '200px' }"
      @tabScroll="callback"
      :showLine="false"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeKey = ref(1);
    const callback = (val: string) => {
      console.log(val);
    };
    return {
      callback,
      activeKey,
    };
  },
});
</script>
