<template>
  <div class="components-input-demo-presuffix">
    <a-input placeholder="Basic usage" v-model:value="userName">
      <template #prefix>
        <user-outlined type="user" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>
    <br />
    <br />
    <a-input prefix="￥" suffix="RMB" />
  </div>
</template>
<script lang="ts">
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    InfoCircleOutlined,
  },

  setup() {
    const userName = ref<string>('');
    return {
      userName,
    };
  },
});
</script>
