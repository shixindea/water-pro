<docs>
---
order: 2
title:
  zh-CN: 缩起内嵌菜单
  en-US: Collapsed inline menu
---

## zh-CN

内嵌菜单可以被缩起/展开。

你可以在 [Layout](/components/layout-cn/#components-layout-demo-side) 里查看侧边布局结合的完整示例。

## en-US

Inline menu could be collapsed.

Here is [a complete demo](/components/layout/#components-layout-demo-side) with sider layout.

</docs>

<template>
  <div style="width: 256px">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <IconBytedMenuUnfold :colors="['currentColor']" v-if="collapsed" />
      <IconBytedMenuFold :colors="['currentColor']" v-else />
    </a-button>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <template #icon>
          <IconBytedDeskLamp :colors="['currentColor']" />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <IconBytedCalendar :colors="['currentColor']" />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <IconBytedBox :colors="['currentColor']" />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <IconBytedMail :colors="['currentColor']" />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <IconBytedAppStore :colors="['currentColor']" />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  IconBytedDeskLamp,
  IconBytedBox,
  IconBytedMail,
  IconBytedCalendar,
  IconBytedAppStore,
  IconBytedSetting,
  IconBytedMenuFold,
  IconBytedMenuUnfold,
} from '@fe6/icon-vue';
export default defineComponent({
  components: {
    IconBytedDeskLamp,
    IconBytedBox,
    IconBytedMail,
    IconBytedCalendar,
    IconBytedAppStore,
    IconBytedSetting,
    IconBytedMenuFold,
    IconBytedMenuUnfold,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
});
</script>
