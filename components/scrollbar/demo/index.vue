<template>
  <demo-sort>
    <Basic />
    <Modal />
    <ShowHorizontal />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Modal from './modal.vue';
import ShowHorizontal from './show-horizontal.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Modal,
    ShowHorizontal,
  },
});
</script>
