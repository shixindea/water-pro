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
    :ajaxParams="() => ({ phone: 13810902078 })"
    :buttonOptions="{
      danger: true,
    }"
  >
    <template #prefix>
      <IconBytedLogin />
    </template>
  </a-sms-code>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IconBytedLogin } from '@fe6/icon-vue';

const getSmsCodeApi = ({ success }) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  components: {
    IconBytedLogin,
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
