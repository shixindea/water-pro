<template>
  <a-pagination :total="500">
    <template #itemRender="{ page, type, originalElement }">
      <a v-if="type === 'prev'">Previous</a>
      <a v-else-if="type === 'next'">Next</a>
      <renderVNode v-else :vnode="originalElement"></renderVNode>
    </template>
  </a-pagination>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

function renderVNode(_, { attrs: { vnode } }) {
  return vnode;
}
export default defineComponent({
  components: {
    renderVNode: renderVNode as any,
  },
});
</script>
