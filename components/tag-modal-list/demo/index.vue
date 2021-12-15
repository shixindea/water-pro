<template>
  <demo-sort>
    <Basic />
    <Data />
    <Radio />
    <RadioSelect />
    <Select />
    <Header />
    <BeforeClose />
    <MaxCheckCount />
    <Options />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Data from './data.vue';
import Radio from './radio.vue';
import RadioSelect from './radio-select.vue';
import Select from './select.vue';
import Header from './header.vue';
import BeforeClose from './before-close.vue';
import MaxCheckCount from './max-check-count.vue';
import Options from './options.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Data,
    Radio,
    RadioSelect,
    Select,
    Header,
    BeforeClose,
    MaxCheckCount,
    Options,
  },
});
</script>
