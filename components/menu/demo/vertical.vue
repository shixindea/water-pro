<docs>
---
order: 3
title:
  zh-CN: 垂直菜单
  en-US: Vertical menu
---

## zh-CN

子菜单是弹出的形式。

## en-US

Submenus open as pop-ups.

</docs>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <a-menu-item key="1">
      <template #icon>
        <IconBytedMail :colors="['currentColor']" />
      </template>
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <IconBytedCalendar :colors="['currentColor']" />
      </template>
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <IconBytedAppStore :colors="['currentColor']" />
      </template>
      <template #title>Navigation Three</template>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <IconBytedSetting :colors="['currentColor']" />
      </template>
      <template #title>Navigation Four</template>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import type { MenuProps } from '@fe6/water-pro';
import { defineComponent, reactive, toRefs } from 'vue';
import IconBytedMail from '@fe6/icon-vue/lib/icons/byted-mail';
import IconBytedCalendar from '@fe6/icon-vue/lib/icons/byted-calendar';
import IconBytedAppStore from '@fe6/icon-vue/lib/icons/byted-app-store';
import IconBytedSetting from '@fe6/icon-vue/lib/icons/byted-setting';

export default defineComponent({
  components: {
    IconBytedMail,
    IconBytedCalendar,
    IconBytedAppStore,
    IconBytedSetting,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick: MenuProps['onClick'] = (menuInfo) => {
      console.log('click ', menuInfo);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
