<template>
  <a-dropdown v-model:visible="visible">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">Clicking me will not close the menu.</a-menu-item>
        <a-menu-item key="2">Clicking me will not close the menu also.</a-menu-item>
        <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref, VNodeChild } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}
export default defineComponent({
  setup() {
    const visible = ref(false);
    const handleMenuClick = (e: MenuInfo) => {
      if (e.key === '3') {
        visible.value = false;
      }
    };
    return {
      visible,
      handleMenuClick,
    };
  },
  components: {
    DownOutlined,
  },
});
</script>
