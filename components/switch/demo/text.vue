<docs>
---
order: 2
title:
  zh-CN: 文字和图标
  en-US: Text & icon
---

## zh-CN

带有文字和图标。

## en-US

With text and icon.

</docs>

<template>
  <div>
    <a-switch v-model:checked="checked1" checked-children="开" un-checked-children="关" />
    <br />
    <a-switch v-model:checked="checked2" checked-children="1" un-checked-children="0" />
    <br />
    <a-switch v-model:checked="checked3">
      <template #checkedChildren><IconBytedCheck :colors="['currentColor']" /></template>
      <template #unCheckedChildren><IconBytedClose :colors="['currentColor']" /></template>
    </a-switch>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { IconBytedCheck, IconBytedClose } from '@fe6/icon-vue';
export default defineComponent({
  components: {
    IconBytedCheck,
    IconBytedClose,
  },
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      checked3: false,
    });
    return { ...toRefs(state) };
  },
});
</script>
