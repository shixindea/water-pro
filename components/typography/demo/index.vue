<template>
  <demo-sort :cols="1">
    <Basic />
    <Edit />
    <Ellipsis />
    <Text />
    <Suffix />
    <Titlt />
    <Block />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Block from './block.vue';
import Ellipsis from './ellipsis.vue';
import Edit from './edit.vue';
import Suffix from './suffix.vue';
import Text from './text.vue';
import Titlt from './title.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Edit,
    Ellipsis,
    Text,
    Suffix,
    Titlt,
    Block,
  },
  setup() {
    return {};
  },
});
</script>
