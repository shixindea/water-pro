<template>
  <demo-sort>
    <Basic />
    <Drag />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Drag from './drag.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Drag,
  },
});
</script>
