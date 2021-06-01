<template>
  <a-checkbox-group v-model:value="value">
    <a-row>
      <a-col :span="8">
        <a-checkbox value="A">A</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="B">B</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="C">C</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="D">D</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="E">E</a-checkbox>
      </a-col>
    </a-row>
  </a-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value: ref([]),
    };
  },
});
</script>
