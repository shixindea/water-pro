<template>
  <a-select v-model:value="value" style="width: 120px">
    <template #dropdownRender="{ menuNode: menu }">
      <v-nodes :vnodes="menu" />
      <a-divider style="margin: 4px 0" />
      <div
        style="padding: 4px 8px; cursor: pointer"
        @mousedown="e => e.preventDefault()"
        @click="addItem"
      >
        <plus-outlined />
        Add item
      </div>
    </template>
    <a-select-option v-for="item in items" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

let index = 0;
export default defineComponent({
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
  components: {
    PlusOutlined,
    VNodes: (_, { attrs }) => {
      return attrs.vnodes;
    },
  },
});
</script>
