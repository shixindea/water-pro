<template>
  <demo-sort>
    <Basic />
    <Size />
    <Predefine />
    <Empty />
    <Simple />
    <Slot />
    <Reset />
  </demo-sort>
</template>

<script>
import Basic from './basic.vue';
import Size from './size.vue';
import Predefine from './predefine.vue';
import Empty from './empty.vue';
import Simple from './simple.vue';
import Slot from './slot.vue';
import Reset from './reset.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';

export default {
  CN,
  US,
  components: {
    Basic,
    Size,
    Predefine,
    Empty,
    Simple,
    Slot,
    Reset,
  },
};
</script>
