<template>
  <div>
    <!-- <demo /> -->
    <WScrollbar style="height: 283px;border:1px solid">
      <div style="height: 100px;background:red;opacity:0.3;">123</div>
      <div style="height: 100px;background:green;opacity:0.3;">4565</div>
      <div style="height: 300px;background:yellow;opacity:0.3;">4565</div>
    </WScrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Scrollbar } from '@fe6/water-pro/es/scrollbar';
import '@fe6/water-pro/es/scrollbar/style'

import { isSite } from './utils/env';

console.log(isSite(), 'isSite');

export default defineComponent({
  components: {
    WScrollbar: Scrollbar,
  }
});
</script>
