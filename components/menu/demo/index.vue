<template>
  <demo-sort :cols="1">
    <horizontal />
    <inline />
    <inline-collapsed />
    <sider-current />
    <switch-mode />
    <theme />
    <vertical />
    <TemplateSingleFile />
    <Colors />
  </demo-sort>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import Horizontal from './horizontal.vue';
import InlineCollapsed from './inline-collapsed.vue';
import Inline from './inline.vue';
import SiderCurrent from './sider-current.vue';
import SwitchMode from './switch-mode.vue';
import Theme from './theme.vue';
import Vertical from './vertical.vue';
import TemplateSingleFile from './template.vue';
import Colors from './color.vue';

export default defineComponent({
  CN,
  US,
  components: {
    Horizontal,
    InlineCollapsed,
    Inline,
    SiderCurrent,
    SwitchMode,
    Theme,
    Vertical,
    TemplateSingleFile,
    Colors,
  },
});
</script>
