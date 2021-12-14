<template>
  <demo-sort>
    <Basic />
    <Span />
    <Tip />
    <Title />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Span from './span.vue';
import Tip from './tip.vue';
import Title from './title.vue';
import CN from './../index.zh-CN.md';
import US from './../index.en_US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Span,
    Tip,
    Title,
  },
});
</script>
