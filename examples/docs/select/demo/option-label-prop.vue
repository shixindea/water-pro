<template>
  <a-select
    v-model:value="value"
    mode="multiple"
    style="width: 100%"
    placeholder="select one country"
    option-label-prop="label"
  >
    <a-select-option value="china" label="China">
      <span role="img" aria-label="China">🇨🇳</span>
      China (中国)
    </a-select-option>
    <a-select-option value="usa" label="USA">
      <span role="img" aria-label="USA">🇺🇸</span>
      USA (美国)
    </a-select-option>
    <a-select-option value="japan" label="Japan">
      <span role="img" aria-label="Japan">🇯🇵</span>
      Japan (日本)
    </a-select-option>
    <a-select-option value="korea" label="Korea">
      <span role="img" aria-label="Korea">🇰🇷</span>
      Korea (韩国)
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(['china']);

    watch(value, val => {
      console.log(`selected:`, val);
    });

    return {
      value,
    };
  },
});
</script>
