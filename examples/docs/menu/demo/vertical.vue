<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <a-menu-item key="1">
      <MailOutlined />
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <CalendarOutlined />
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <AppstoreOutlined />
          <span>Navigation Three</span>
        </span>
      </template>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>
        <span>
          <SettingOutlined />
          <span>Navigation Four</span>
        </span>
      </template>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, VNodeChild } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}
export default defineComponent({
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick = (e: MenuInfo) => {
      console.log('click ', e);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
</script>
