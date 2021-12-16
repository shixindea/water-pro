<template>
  <demo-sort>
    <Basic />
    <Group />
    <Search />
    <CustomDropdownMenu />
    <LabelInValue />
    <Multiple />
    <OptionLabelProp />
    <Responsive />
    <Size />
    <Icon />
    <Tags />
    <FieldNames />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Group from './group.vue';
import Search from './search.vue';
import CustomDropdownMenu from './custom-dropdown-menu.vue';
import LabelInValue from './label-in-value.vue';
import Multiple from './multiple.vue';
import OptionLabelProp from './option-label-prop.vue';
import Responsive from './responsive.vue';
import Size from './size.vue';
import Icon from './icon.vue';
import Tags from './tags.vue';
import FieldNames from './field-names.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Group,
    Search,
    CustomDropdownMenu,
    LabelInValue,
    Multiple,
    OptionLabelProp,
    Responsive,
    Size,
    Icon,
    Tags,
    FieldNames,
  },
  setup() {
    return {};
  },
});
</script>
