<template>
  <demo-sort>
    <Basic />
    <Add />
    <Disabled />
    <Slot />
    <Color />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Add from './add.vue';
import Disabled from './disabled.vue';
import Slot from './slot.vue';
import Color from './color.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Add,
    Disabled,
    Slot,
    Color,
  },
});
</script>
