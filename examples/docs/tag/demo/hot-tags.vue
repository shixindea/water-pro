<template>
  <div>
    <span :style="{ marginRight: '8px' }">Categories:</span>
    <template v-for="tag in tags" :key="tag">
      <a-checkable-tag
        :checked="selectedTags.indexOf(tag) > -1"
        @change="checked => handleChange(tag, checked)"
      >
        {{ tag }}
      </a-checkable-tag>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      tags: ['Movies', 'Books', 'Music', 'Sports'],
      selectedTags: [] as string[],
    });

    const handleChange = (tag: string, checked: boolean) => {
      const { selectedTags } = state;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      state.selectedTags = nextSelectedTags;
    };

    return {
      ...toRefs(state),
      handleChange,
    };
  },
});
</script>
