<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me, Click menu item
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent, VNodeChild } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}

export default defineComponent({
  setup() {
    const onClick = ({ key }: MenuInfo) => {
      console.log(`Click on item ${key}`);
    };
    return {
      onClick,
    };
  },
  components: {
    DownOutlined,
  },
});
</script>
