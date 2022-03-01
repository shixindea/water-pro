<template>
  <demo-sort>
    <Basic />
    <Multiple />
    <!-- <tree-data /> -->
    <Checkable />
    <Suffix />
    <Async />
    <Highlight />
    <TreeLineVue />
    <VirtualScrollVue />
    <CustomTagRenderVue />
    <ReplaceFieldsVue />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Multiple from './multiple.vue';
// import TreeData from './treeData.vue';
import Checkable from './checkable.vue';
import Suffix from './suffix.vue';
import Async from './async.vue';
import Highlight from './highlight.vue';
import TreeLineVue from './tree-line.vue';
import VirtualScrollVue from './virtual-scroll.vue';
import CustomTagRenderVue from './custom-tag-render.vue';
import ReplaceFieldsVue from './replaceFields.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Multiple,
    // TreeData,
    Checkable,
    Suffix,
    Async,
    Highlight,
    TreeLineVue,
    VirtualScrollVue,
    CustomTagRenderVue,
    ReplaceFieldsVue,
  },
  setup() {
    return {};
  },
});
</script>
