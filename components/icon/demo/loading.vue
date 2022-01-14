<docs>
---
order: 0
title:
  zh-CN: 加载中
  en-US: Loading
---

## zh-CN

通过 `:spin="true"` 设置加载中效果。

## en-US

`:spin="true"`.

</docs>

<template>
  <div class="icons-list">
    <IconBytedLoadingOne :spin="true" />
    <IconBytedLoadingTwo :spin="true" />
    <IconBytedLoadingThree :spin="true" />
    <IconBytedLoadingFour :spin="true" />
    <IconBytedLoading :spin="true" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  IconBytedLoading,
  IconBytedLoadingOne,
  IconBytedLoadingTwo,
  IconBytedLoadingThree,
  IconBytedLoadingFour,
} from '@fe6/icon-vue';
export default defineComponent({
  components: {
    IconBytedLoading,
    IconBytedLoadingOne,
    IconBytedLoadingTwo,
    IconBytedLoadingThree,
    IconBytedLoadingFour,
  },
});
</script>
<style scoped>
.icons-list :deep(.anticon),
.icons-list :deep(.cube-icon) {
  margin-right: 16px;
  font-size: 24px;
}
</style>
