<template>
  <demo-sort>
    <Basic />
    <CustomTrigger />
    <Hover />
    <DisabledOption />
    <ChangeOnSelect />
    <Size />
    <CustomRender />
    <Search />
    <Lazy />
    <FieldsName />
    <Suffix />
    <MultipleVue />
    <DisplayRender />
    <TagRender />
  </demo-sort>
</template>
<script>
import Basic from './basic.vue';
import ChangeOnSelect from './change-on-select.vue';
import CustomRender from './custom-render.vue';
import CustomTrigger from './custom-trigger.vue';
import DisabledOption from './disabled-option.vue';
import Hover from './hover.vue';
import Lazy from './lazy.vue';
import Search from './search.vue';
import Size from './size.vue';
import FieldsName from './fields-name.vue';
import Suffix from './suffix.vue';
import MultipleVue from './multiple.vue';
import TagRender from './tag-render.vue';
import DisplayRender from './display-render.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    ChangeOnSelect,
    CustomRender,
    CustomTrigger,
    DisabledOption,
    Hover,
    Lazy,
    Search,
    Size,
    FieldsName,
    Suffix,
    MultipleVue,
    TagRender,
    DisplayRender,
  },
});
</script>
<style>
#components-cascader-demo .ant-cascader-picker {
  width: 300px;
}
</style>
