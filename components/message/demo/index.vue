<template>
  <demo-sort>
    <Info />
    <Duration />
    <Other />
    <Loading />
    <Thenable />
    <Update />
    <CustomStyleVue />
  </demo-sort>
</template>
<script lang="ts">
import Info from './info.vue';
import Other from './other.vue';
import Duration from './duration.vue';
import Loading from './loading.vue';
import Thenable from './thenable.vue';
import Update from './update.vue';
import CustomStyleVue from './custom-style.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Info,
    Other,
    Duration,
    Loading,
    Thenable,
    Update,
    CustomStyleVue,
  },
  setup() {
    return {};
  },
});
</script>
