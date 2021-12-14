<template>
  <demo-sort>
    <Basic />
    <Action />
    <Slot />
    <Lazy />
    <Simple />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Action from './action.vue';
import Lazy from './lazy.vue';
import Slot from './slot.vue';
import Simple from './simple.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Action,
    Lazy,
    Slot,
    Simple,
  },
});
</script>
