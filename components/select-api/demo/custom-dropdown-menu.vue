<docs>
---
order: 13
title:
  zh-CN: 扩展菜单
  en-US: Custom dropdown
---

## zh-CN

使用 `dropdownRender` 对下拉菜单进行自由扩展。

## en-US

Customize the dropdown menu via `dropdownRender`.

</docs>

<template>
  <a-select-api
    v-model:value="value"
    style="width: 120px"
    :options="items.map((item) => ({ value: item }))"
  >
    <template #dropdownRender="{ menuNode: menu }">
      <v-nodes :vnodes="menu" />
      <a-divider style="margin: 4px 0" />
      <div
        style="padding: 4px 8px; cursor: pointer"
        @mousedown="(e) => e.preventDefault()"
        @click="addItem"
      >
        <IconBytedPlus :colors="['currentColor']" />
        Add item
      </div>
    </template>
  </a-select-api>
</template>
<script lang="ts">
import { IconBytedPlus } from '@fe6/icon-vue';
import { defineComponent, ref } from 'vue';

let index = 0;
export default defineComponent({
  components: {
    IconBytedPlus,
    VNodes: (_, { attrs }) => {
      return attrs.vnodes;
    },
  },
  setup() {
    const items = ref(['jack', 'lucy']);
    const value = ref('lucy');

    const addItem = () => {
      console.log('addItem');
      items.value.push(`New item ${index++}`);
    };
    return {
      items,
      value,
      addItem,
    };
  },
});
</script>
