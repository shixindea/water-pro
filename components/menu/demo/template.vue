<docs>
---
order: 99
title:
  zh-CN: 单文件递归菜单
  en-US: Single file recursive menu
---

## zh-CN
使用单文件方式递归生成菜单。

## en-US
Use the single file method to recursively generate menus.

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
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <template #icon>
              <IconBytedChartPie :colors="['currentColor']" />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.key" :menu-info="item" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconBytedMail from '@fe6/icon-vue/lib/icons/byted-mail';
import IconBytedChartPie from '@fe6/icon-vue/lib/icons/byted-chart-pie';
import IconBytedMenuFold from '@fe6/icon-vue/lib/icons/byted-menu-fold';
import IconBytedMenuUnfold from '@fe6/icon-vue/lib/icons/byted-menu-unfold';

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
    <a-sub-menu :key="menuInfo.key">
      <template #icon><IconBytedMail /></template>
      <template #title>{{ menuInfo.title }}</template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <template #icon>
              <IconBytedChartPie />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {
    IconBytedChartPie,
    IconBytedMail,
  },
};
const list = [
  {
    key: '1',
    title: 'Option 1',
  },
  {
    key: '2',
    title: 'Navigation 2',
    children: [
      {
        key: '2.1',
        title: 'Navigation 3',
        children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
      },
    ],
  },
];
export default defineComponent({
  components: {
    'sub-menu': SubMenu,
    IconBytedMenuFold,
    IconBytedMenuUnfold,
    IconBytedChartPie,
  },
  setup() {
    const collapsed = ref<boolean>(false);

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      list,
      collapsed,
      toggleCollapsed,
      selectedKeys: ref(['1']),
      openKeys: ref(['2']),
    };
  },
});
</script>
