<template>
  <div>
    <WSite v-if="isSiteMode" />
    <WDemo v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import WDemo from './Demo.vue';
import WSite from './Site.vue';

import { isSite } from './utils/env';

export default defineComponent({
  components: {
    WDemo,
    WSite,
  },
  setup() {
    const isSiteMode = isSite();
    console.log(isSite(), 'isSite');
    return {
      isSiteMode,
    }
  }
});
</script>
