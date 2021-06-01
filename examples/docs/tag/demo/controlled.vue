<template>
  <div>
    <a-tag v-model:visible="visible" closable>Movies</a-tag>
    <br />
    <a-button size="small" @click="visible = !visible">Toggle</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      visible: ref(false),
    };
  },
});
</script>
