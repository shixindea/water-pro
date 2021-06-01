<template>
  <div>
    <a-input-number
      v-model:value="value1"
      :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"
    />
    <a-input-number
      v-model:value="value2"
      :min="0"
      :max="100"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(1000);
    const value2 = ref<number>(100);

    return {
      value1,
      value2,
    };
  },
});
</script>
