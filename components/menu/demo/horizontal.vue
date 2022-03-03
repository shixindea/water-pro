<docs>
---
order: 0
title:
  zh-CN: 顶部导航
  en-US: Top Navigation
---

## zh-CN

水平的顶部导航菜单。

## en-US

Horizontal top navigation menu.

</docs>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <template #icon>
        <IconBytedMail :colors="['currentColor']" />
      </template>
      Navigation One
    </a-menu-item>
    <a-menu-item key="app" disabled>
      <template #icon>
        <IconBytedAppStore :colors="['currentColor']" />
      </template>
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <IconBytedSetting :colors="['currentColor']" />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3">Option 3</a-menu-item>
        <a-menu-item key="setting:4">Option 4</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconBytedMail from '@fe6/icon-vue/lib/icons/byted-mail';
import IconBytedAppStore from '@fe6/icon-vue/lib/icons/byted-app-store';
import IconBytedSetting from '@fe6/icon-vue/lib/icons/byted-setting';
export default defineComponent({
  components: {
    IconBytedMail,
    IconBytedAppStore,
    IconBytedSetting,
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
});
</script>
