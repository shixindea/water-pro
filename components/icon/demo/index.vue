<template>
  <icon-display />
  <demo-sort style="margin-top: 32px">
    <Basic />
    <Theme />
    <Loading />
    <Colors />
    <CurrentColors />
  </demo-sort>
</template>

<script lang="ts">
import IconDisplay from '../../../site/src/theme/template/IconDisplay';
import Basic from './basic.vue';
import Theme from './theme.vue';
import Loading from './loading.vue';
import Colors from './colors.vue';
import CurrentColors from './current-colors.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    IconDisplay,
    Basic,
    Theme,
    Loading,
    Colors,
    CurrentColors,
  },
});
</script>
