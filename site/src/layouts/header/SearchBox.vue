<template>
  <div id="search-box" :class="{ 'narrow-mode': responsive, focused: !!focused }">
    <IconBytedSearch :colors="['#ced4d9']" />
    <a-input
      ref="inputRef"
      :placeholder="searchPlaceholder"
      @focus="triggerFocus(true)"
      @blue="triggerFocus(false)"
    ></a-input>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { IconBytedSearch } from '@fe6/icon-vue';

export default defineComponent({
  name: 'SearchBox',
  components: {
    IconBytedSearch,
  },
  props: ['isZhCN', 'responsive'],
  emits: ['triggerFocus'],
  setup(props, { emit }) {
    const inputRef = ref();
    const focused = ref(false);
    function triggerFocus(focus: boolean) {
      focused.value = focus;
      emit('triggerFocus', focus);
    }
    return {
      inputRef,
      focused,
      triggerFocus,
      searchPlaceholder: props.isZhCN ? '搜索文档' : 'Search Docs',
    };
  },
});
</script>
