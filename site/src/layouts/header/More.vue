<template>
  <a-dropdown>
    <a-button size="small" class="header-button">
      {{ $t('app.header.menu.more') }}
      <IconBytedDown :size="16" />
    </a-button>
    <template #overlay>
      <Ecosystem />
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import type { GlobalConfig } from '../../App.vue';
import { computed, defineComponent, inject } from 'vue';
import IconBytedDown from '@fe6/icon-vue/lib/icons/byted-down';
import { GLOBAL_CONFIG } from '../../SymbolKey';
import { getLocalizedPathname } from '../../utils/util';
import Ecosystem from './Ecosystem.vue';

export default defineComponent({
  components: {
    IconBytedDown,
    Ecosystem,
  },
  props: {
    isRTL: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const downstyle = computed(() => (props.isRTL ? '-1px 2px 0 0' : '-1px 0 0 2px'));
    return {
      downstyle,
      isZhCN: inject<GlobalConfig>(GLOBAL_CONFIG).isZhCN.value,
      getLocalizedPathname,
    };
  },
});
</script>
