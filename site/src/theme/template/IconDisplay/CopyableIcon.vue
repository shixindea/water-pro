<template>
  <div
    class="anticons-list-item"
    v-clipboard:copy="text"
    v-clipboard:success="onCopied"
    :class="justCopied === type ? 'copied' : ''"
  >
    <!-- <component
      :is="waterMap[iconName]"
      :size="36"
      :theme="theme"
      :colors="['#333', '#2f88ff', '#fff', '#43ccf8']"
    ></component> -->
    <img :src="src" />
    <span class="anticon-class"> icon-{{ kebabCasedType }} </span>
  </div>
</template>
<script>
import { waterMap } from '@fe6/icon-vue';
import { unicodeToUtf8, base64encode } from '@fe6/icon-img';

import { camelize } from '@fe6/shared';
import { defineComponent } from 'vue';

const renderIcons = (svg) => {
  return `data:image/svg+xml;base64,${base64encode(unicodeToUtf8(svg))}`;
};

const kebabCase = function kebabCase(str) {
  return str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
};
const firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join('');

export default defineComponent({
  props: ['name', 'type', 'svg', 'theme', 'justCopied'],
  setup(props) {
    const iconName = firstUpperCase(camelize(props.name));
    const kebabCasedName = kebabCase(props.name);
    const kebabCasedType = kebabCase(props.type);
    return {
      waterMap,
      iconName: `Icon${iconName}`,
      text: `<icon-${kebabCasedName} />`,
      kebabCasedType,
      src: renderIcons(props.svg),
    };
  },
  methods: {
    onCopied() {
      this.$emit('copied', this.type, this.text);
    },
  },
});
</script>
