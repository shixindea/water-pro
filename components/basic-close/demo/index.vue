<template>
  <demo-sort>
    <Basic />
    <Color />
    <Size />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Color from './color.vue';
import Size from './size.vue';
import CN from './../index.zh-CN.md';
import US from './../index.en_US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Color,
    Size,
  },
});
</script>
