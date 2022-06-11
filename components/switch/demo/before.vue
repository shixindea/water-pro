<docs>
---
order: 4
title:
  zh-CN: 改变状态之前
  en-US: Before
---

## zh-CN

改变状态之前的操作

## en-US

Before.

</docs>
<template>
  <div>
    <a-switch v-model:checked="checked1" :loading="loading" :before="onBefore" />
    <br />
    <a-switch v-model:checked="checked2" size="small" :loading="loading" :before="onBefore" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      loading: false,
    });

    const onBefore = (fn: any) => {
      state.loading = true;
      setTimeout(() => {
        state.loading = false;
        fn();
      }, 3000);
    };
    return { ...toRefs(state), onBefore };
  },
});
</script>
