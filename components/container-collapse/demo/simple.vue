<docs>
---
order: 0
title:
  zh-CN: 简单模式
  en-US: Simple
---

## zh-CN

`mode="simple"`

## en-US

`mode="simple"`

</docs>

<template>
  <a-container-collapse mode="simple" title="water">
    <template #icon="{ status }">
      <div>
        <IconBytedUpOne v-if="status" />
        <IconBytedDownOne v-else />
      </div>
    </template>
    这里面是个内容
  </a-container-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconBytedUpOne, IconBytedDownOne } from '@fe6/icon-vue';

export default defineComponent({
  components: {
    IconBytedUpOne,
    IconBytedDownOne,
  },
});
</script>
