<docs>
---
order: 0
title:
  zh-CN: 懒加载
  en-US: Lazy
---

## zh-CN

带骨架屏的加载

## en-US

Lazy.

</docs>

<template>
  <a-space direction="vertical" style="width: 100%">
    <a-button @click="expandHandle">{{ loading ? '加载中' : value ? '收起' : '展开' }}</a-button>
    <a-container-collapse
      text="water pro"
      v-model:value="value"
      lazy
      :loading="loading"
      title="expand"
      @expand="expandHandle"
    >
      这里面是个内容
    </a-container-collapse>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(true);
    const loading = ref(false);
    return {
      expandHandle: () => {
        if (!loading.value) {
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            value.value = !value.value;
          }, 1000);
        }
      },
      value,
      loading,
    };
  },
});
</script>
