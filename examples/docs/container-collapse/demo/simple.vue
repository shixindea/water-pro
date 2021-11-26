<template>
  <a-container-collapse mode="simple" title="water">
    <template #icon="{status}">
      <div>
        <UpCircleOutlined v-if="status" />
        <DownCircleOutlined v-else />
      </div>
    </template>
      这里面是个内容
  </a-container-collapse>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    UpCircleOutlined,
    DownCircleOutlined,
  },
}); 
</script>
