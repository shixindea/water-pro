<template>
  <demo-sort>
    <Basic />
    <Field />
    <Radio />
    <Size />
    <Show />
    <RepeatableCheck />
  </demo-sort>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import Basic from './basic.vue';
import Field from './field.vue';
import Size from './size.vue';
import Radio from './radio.vue';
import Show from './show.vue';
import RepeatableCheck from './repeatable-check.vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Field,
    Size,
    Radio,
    RepeatableCheck,
    Show,
  },
});
</script>
