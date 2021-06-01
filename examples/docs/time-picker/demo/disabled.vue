<template>
  <a-time-picker :value="moment('12:08:23', 'HH:mm:ss')" disabled />
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      moment,
    };
  },
});
</script>
