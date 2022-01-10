<template>
  <demo-sort>
    <Basic />
    <Headers />
    <Update />
    <Disabled />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Headers from './headers.vue';
import Update from './update.vue';
import Disabled from './disabled.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Headers,
    Update,
    Disabled,
  },
});
</script>
