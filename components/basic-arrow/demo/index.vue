<template>
  <demo-sort>
    <Basic />
    <Expand />
    <TopDemo />
    <TipDemo />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Expand from './expand.vue';
import TopDemo from './top.vue';
import TipDemo from './tip.vue';
import CN from './../index.zh-CN.md';
import US from './../index.en_US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Expand,
    TipDemo,
    TopDemo,
  },
});
</script>
