<template>
  <demo-sort :cols="1">
    <Base />
    <MinSize />
    <DefSize />
    <Ratio />
    <Download />
    <Modal />
    <UploadImage />
    <UploadCard />
  </demo-sort>
</template>

<script lang="ts">
import Base from './base.vue';
import MinSize from './min-size.vue';
import DefSize from './def-size.vue';
import Ratio from './ratio.vue';
import Download from './download.vue';
import Modal from './modal.vue';
import UploadImage from './upload-image.vue';
import UploadCard from './upload-card.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Base,
    MinSize,
    DefSize,
    Ratio,
    Download,
    Modal,
    UploadImage,
    UploadCard,
  },
  setup() {
    return {};
  },
});
</script>
