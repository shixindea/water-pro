<template>
  <demo-sort>
    <Basic />
    <Empty />
    <Size />
    <Loading />
    <Tip />
    <Diy />
    <Fullscreen />
  </demo-sort>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import Basic from './basic.vue';
import Empty from './empty.vue';
import Size from './size.vue';
import Loading from './loading.vue';
import Tip from './tip.vue';
import Diy from './diy.vue';
import Fullscreen from './fullscreen.vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Empty,
    Size,
    Loading,
    Tip,
    Diy,
    Fullscreen,
  },
});
</script>
