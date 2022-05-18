<template>
  <demo-sort>
    <Basic />
    <Multiple />
    <TheModalPro />
    <Children />
    <Options />
    <Slot />
    <TableDisabled />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Multiple from './multiple.vue';
import TheModalPro from './modal-pro.vue';
import Children from './children.vue';
import Options from './options.vue';
import Slot from './slot.vue';
import TableDisabled from './table-disabled.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Multiple,
    TheModalPro,
    Children,
    Options,
    Slot,
    TableDisabled,
  },
  setup() {
    return {};
  },
});
</script>
