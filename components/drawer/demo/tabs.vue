<docs>
---
order: 0
title:
  zh-CN: tabs用法
  en-US: Tabs usage
---

## zh-CN

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭

## en-US

Tabs drawer.

</docs>

<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    style="color: red"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <template #title>
      <a-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
        <a-radio-button value="top">Horizontal</a-radio-button>
        <a-radio-button value="left">Vertical</a-radio-button>
      </a-radio-group>
    </template>
    <a-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</a-tab-pane>
    </a-tabs>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    // drawer start
    const visible = ref<boolean>(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    // drawer end

    // tabs start
    const mode = ref('top');
    const activeKey = ref('1');
    const callback = (val: string) => {
      console.log(val);
    };
    // tabs end

    return {
      // drawer start
      visible,
      afterVisibleChange,
      showDrawer,
      // drawer end

      // tabs start
      mode,
      callback,
      activeKey,
      // tabs end
    };
  },
});
</script>
