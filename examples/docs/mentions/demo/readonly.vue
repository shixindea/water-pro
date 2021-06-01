<template>
  <div>
    <div style="margin-bottom: 10px">
      <a-mentions v-model:value="value1" placeholder="this is disabled Mentions" disabled>
        <a-mentions-option v-for="value in options" :key="value" :value="value">
          {{ value }}
        </a-mentions-option>
      </a-mentions>
    </div>
    <a-mentions v-model:value="value2" placeholder="this is readOnly a-mentions" readonly>
      <a-mentions-option v-for="value in options" :key="value" :value="value">
        {{ value }}
      </a-mentions-option>
    </a-mentions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('');
    const value2 = ref<string>('');
    const options = ref<string[]>(['afc163', 'zombieJ', 'yesmeck']);
    return {
      value1,
      value2,
      options,
    };
  },
});
</script>
