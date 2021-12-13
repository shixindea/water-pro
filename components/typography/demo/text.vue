<docs>
---
order: 2
title:
  zh-CN: 文本与超链接组件
  en-US: Text and Link Component
---

## zh-CN

内置不同样式的文本以及超链接组件。

## en-US

Provides multiple types of text and link.
</docs>
<template>
  <a-space direction="vertical">
    <a-radio-group v-model:value="size" button-style="solid" style="margin-bottom: 24px">
      <a-radio-button value="small">Small</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="large">Large</a-radio-button>
    </a-radio-group>
    <a-typography-text :size="size">Water Pro (default)</a-typography-text>
    <a-typography-text :size="size" type="secondary">Water Pro (secondary)</a-typography-text>
    <a-typography-text :size="size" type="success">Water Pro (success)</a-typography-text>
    <a-typography-text :size="size" type="warning">Water Pro (warning)</a-typography-text>
    <a-typography-text :size="size" type="danger">Water Pro (danger)</a-typography-text>
    <a-typography-text :size="size" disabled>Water Pro (disabled)</a-typography-text>
    <a-typography-text :size="size" mark>Water Pro (mark)</a-typography-text>
    <a-typography-text :size="size" code>Water Pro (code)</a-typography-text>
    <a-typography-text :size="size" keyboard>Water Pro (keyboard)</a-typography-text>
    <a-typography-text :size="size" underline>Water Pro (underline)</a-typography-text>
    <a-typography-text :size="size" delete>Water Pro (delete)</a-typography-text>
    <a-typography-text :size="size" strong>Water Pro (strong)</a-typography-text>
    <a-typography-link :size="size" href="http://water-v4.chjgo.com/" target="_blank">
      Water Pro (Link)
    </a-typography-link>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref('default'),
    };
  },
});
</script>
