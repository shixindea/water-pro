<template>
  <a-calendar v-model:value="value" v-bind:panelChange="onPanelChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';

export default defineComponent({
  setup() {
    const value = ref<Moment>();
    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
  },
});
</script>
