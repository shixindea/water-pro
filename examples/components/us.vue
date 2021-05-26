<template>
  <div class="us" v-if="!isZhCN">
    <slot />
  </div>
</template>
<script>
import { isZhCN } from '../utils/util';

export default {
  name: 'Api',
  inject: {
    demoContext: { default: {} },
  },
  data() {
    return {
      isZhCN: isZhCN(this.demoContext.name),
    };
  },
};
</script>
