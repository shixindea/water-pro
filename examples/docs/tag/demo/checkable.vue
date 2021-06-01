<template>
  <div>
    <a-checkable-tag v-model:checked="checked1" @change="handleChange">Tag1</a-checkable-tag>
    <a-checkable-tag v-model:checked="checked2" @change="handleChange">Tag2</a-checkable-tag>
    <a-checkable-tag v-model:checked="checked3" @change="handleChange">Tag3</a-checkable-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    // or use watch
    const handleChange = (checked: boolean) => {
      console.log(checked);
    };

    return {
      handleChange,
      checked1: ref(false),
      checked2: ref(false),
      checked3: ref(false),
    };
  },
});
</script>
