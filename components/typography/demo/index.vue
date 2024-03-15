<template>
  <demo-sort :cols="1">
    <Basic />
    <Edit />
    <Ellipsis />
    <Text />
    <Suffix />
    <Title />
    <TitleIcon />
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
import Title from './title.vue';
import TitleIcon from './title-icon.vue';
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
    Title,
    TitleIcon,
    Block,
  },
  setup() {
    return {};
  },
});
</script>
