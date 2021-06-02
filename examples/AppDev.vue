<template>
  <div>
    <!-- <demo /> -->
    demo
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import demo from '../v2-doc/src/docs/tooltip/demo/index.vue';
// import Affix from '../components/affix';

import { isSite } from './utils/env';

console.log(isSite(), 'isSite');

export default defineComponent({
});
</script>
