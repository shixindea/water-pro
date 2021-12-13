<docs>
---
order: 0
title:
  zh-CN: 短信验证码
  en-US: sms code
---

## zh-CN

短信验证码。

## en-US

sms code example.

</docs>

<template>
  <a-sms-code
    :api="getSmsCodeApi"
    v-model:value="value"
    :ajaxParams="() => ({phone: 13810902078})"
    :buttonOptions="{
      danger: true
    }"
  >
    <template #prefix>
      <LogoutOutlined />
    </template>
  </a-sms-code>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LogoutOutlined } from '@ant-design/icons-vue';

const getSmsCodeApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
}

export default defineComponent({
  components: {
    LogoutOutlined,
  },
  setup() {
    const value = ref<string>('');
    return {
      value,
      getSmsCodeApi,
    };
  },
});
</script>
