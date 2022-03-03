<docs>
---
order: 4
title:
  zh-CN: 主题
  en-US: Menu Themes
---

## zh-CN

内建了两套主题 `light` 和 `dark`，默认 `light`。

## en-US

There are two built-in themes: `light` and `dark`. The default value is `light`.

</docs>

<template>
  <div>
    <a-switch
      :checked="theme === 'dark'"
      checked-children="Dark"
      un-checked-children="Light"
      @change="changeTheme"
    />
    <br />
    <br />
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :theme="theme"
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
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import IconBytedMail from '@fe6/icon-vue/lib/icons/byted-mail';
import IconBytedCalendar from '@fe6/icon-vue/lib/icons/byted-calendar';
import IconBytedAppStore from '@fe6/icon-vue/lib/icons/byted-app-store';
import IconBytedSetting from '@fe6/icon-vue/lib/icons/byted-setting';
import type { MenuTheme } from '@fe6/water-pro';
export default defineComponent({
  components: {
    IconBytedMail,
    IconBytedCalendar,
    IconBytedAppStore,
    IconBytedSetting,
  },
  setup() {
    const state = reactive({
      theme: 'dark' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };

    return {
      ...toRefs(state),
      changeTheme,
    };
  },
});
</script>
