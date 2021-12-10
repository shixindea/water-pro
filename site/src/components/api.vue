<template>
  <div class="markdown api-container">
    <slot v-if="isZhCN" name="cn" />
    <slot v-else />
  </div>
</template>
<script lang="ts">
import { inject } from 'vue';

import { isZhCN } from '../utils/util';

export default {
  name: 'Api',
  setup() {
    return {
      demoContext: inject('demoContext', {}),
    };
  },
  data() {
    return {
      isZhCN: isZhCN(this.demoContext.name),
    };
  },
};
</script>
