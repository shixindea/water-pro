<template>
  <demo-sort :cols="1">
    <Modal />
    <Base />
    <MinSize />
    <Download />
  </demo-sort>
</template>

<script lang="ts">
import Base from './base.vue';
import MinSize from './min-size.vue';
import Download from './download.vue';
import Modal from './modal.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Base,
    MinSize,
    Download,
    Modal,
  },
  setup() {
    return {};
  },
});
</script>
