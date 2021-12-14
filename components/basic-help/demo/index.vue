<template>
  <demo-sort>
    <Basic />
    <List />
    <StyleDemo />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import List from './list.vue';
import StyleDemo from './style.vue';
import CN from './../index.zh-CN.md';
import US from './../index.en_US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    List,
    StyleDemo,
  },
});
</script>
