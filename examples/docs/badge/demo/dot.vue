<template>
  <div id="components-badge-demo-dot">
    <a-badge dot>
      <notification-outlined />
    </a-badge>
    <a-badge :count="0" dot>
      <notification-outlined />
    </a-badge>
    <a-badge dot>
      <a href="#">Link something</a>
    </a-badge>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { NotificationOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    NotificationOutlined,
  },
});
</script>
<style scoped>
#components-badge-demo-dot .anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
