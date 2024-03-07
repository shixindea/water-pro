<docs>
---
order: 2
title:
  zh-CN: 块级居中
  en-US: Block and center
---

## zh-CN

resetable , blockable 和 centerable

## en-US

Provides multiple types of text and link.
</docs>
<template>
  <a-space direction="vertical" blockable>
    <a-space direction="vertical" blockable>
      <a-space>
        <span>块级</span>
        <a-switch v-model:checked="blockable" />
      </a-space>
      <a-space>
        <span>重置样式</span>
        <a-switch v-model:checked="resetable" />
      </a-space>
      <a-space>
        <span>居中</span>
        <a-switch v-model:checked="centerable" />
      </a-space>
    </a-space>
    <a-typography-title :blockable="blockable" :resetable="resetable" :centerable="centerable"
      >h1. Water Pro</a-typography-title
    >
    <a-typography-title
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      :level="2"
      >h2. Water Pro</a-typography-title
    >
    <a-typography-title
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      :level="3"
      >h3. Water Pro</a-typography-title
    >
    <a-typography-title
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      :level="4"
      >h4. Water Pro</a-typography-title
    >
    <a-typography-title
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      :level="5"
      >h5. Water Pro</a-typography-title
    >
    <a-typography-title
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      :level="6"
      >h6. Water Pro</a-typography-title
    >
    <a-typography-text :blockable="blockable" :resetable="resetable" :centerable="centerable"
      >Water Pro (default)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      type="secondary"
      >Water Pro (secondary)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      type="success"
      >Water Pro (success)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      type="warning"
      >Water Pro (warning)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      type="danger"
      >Water Pro (danger)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      disabled
      >Water Pro (disabled)</a-typography-text
    >
    <a-typography-text :blockable="blockable" :resetable="resetable" :centerable="centerable" mark
      >Water Pro (mark)</a-typography-text
    >
    <a-typography-text :blockable="blockable" :resetable="resetable" :centerable="centerable" code
      >Water Pro (code)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      keyboard
      >Water Pro (keyboard)</a-typography-text
    >
    <a-typography-text
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      underline
      >Water Pro (underline)</a-typography-text
    >
    <a-typography-text :blockable="blockable" :resetable="resetable" :centerable="centerable" delete
      >Water Pro (delete)</a-typography-text
    >
    <a-typography-text :blockable="blockable" :resetable="resetable" :centerable="centerable" strong
      >Water Pro (strong)</a-typography-text
    >
    <a-typography-link
      :blockable="blockable"
      :resetable="resetable"
      :centerable="centerable"
      href="https://water-v4.chjgo.com/"
      target="_blank"
    >
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
      blockable: ref(false),
      resetable: ref(false),
      centerable: ref(false),
    };
  },
});
</script>
