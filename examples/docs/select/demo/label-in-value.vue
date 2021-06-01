<template>
  <a-select label-in-value v-model:value="value" style="width: 120px" @change="handleChange">
    <a-select-option value="jack">Jack (100)</a-select-option>
    <a-select-option value="lucy">Lucy (101)</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Value {
  key?: string;
  label?: string;
}

export default defineComponent({
  setup() {
    const handleChange = (value: Value) => {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    };
    return {
      value: ref<Value>({ key: 'lucy' }),
      handleChange,
    };
  },
});
</script>
