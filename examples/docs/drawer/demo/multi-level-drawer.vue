<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Multi-level drawer"
    width="520"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <a-button type="primary" @click="showChildrenDrawer">Two-level drawer</a-button>
    <a-drawer
      title="Two-level Drawer"
      width="320"
      :closable="false"
      :visible="childrenDrawer"
      @close="onChildrenDrawerClose"
    >
      <a-button type="primary" @click="showChildrenDrawer">This is two-level drawer</a-button>
    </a-drawer>
    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </div>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const childrenDrawer = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    const showChildrenDrawer = () => {
      childrenDrawer.value = true;
    };
    const onChildrenDrawerClose = () => {
      childrenDrawer.value = false;
    };
    return {
      visible,
      childrenDrawer,
      showDrawer,
      onClose,
      showChildrenDrawer,
      onChildrenDrawerClose,
    };
  },
});
</script>
