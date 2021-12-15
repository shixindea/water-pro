<docs>
---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
---

## zh-CN

禁用。

## en-US

Disabled.
</docs>

<template>
  <a-tag-group
    v-model:value="createDatas"
    createable
    closable
    :createLoading="createLoading"
    :removeLoading="removeLoading"
    @change="createChange"
    disabled
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TagOptionItem } from '@fe6/water-pro';

const tagDatas = [
  {
    name: '这是很长的标签',
    id: 190,
  },
  {
    name: 'water',
    id: 290,
  },
];

export default defineComponent({
  setup() {
    const createLoading = ref(false);
    const removeLoading = ref(false);
    const createDatas = ref(tagDatas.slice());
    return {
      createDatas,
      createLoading,
      removeLoading,
      createChange: (name: string, eventeType: string) => {
        if (eventeType === 'add') {
          createLoading.value = true;
          setTimeout(() => {
            createLoading.value = false;
            createDatas.value.push({
              name,
              id: Number((Math.random() * 10).toFixed(0)),
            });
          }, 1000);
        }
        if (eventeType === 'remove') {
          removeLoading.value = true;
          setTimeout(() => {
            removeLoading.value = false;
            const itemIdex = createDatas.value.findIndex(
              (item: TagOptionItem) => item.name === name,
            );
            createDatas.value.splice(itemIdex, 1);
          }, 1000);
        }
      },
    };
  },
});
</script>
