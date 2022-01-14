<docs>
---
order: 7
title:
  zh-CN: 预设状态的标签
  en-US: Status Tag
---

## zh-CN

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

## en-US

We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

</docs>

<template>
  <a-divider orientation="left">Without icon</a-divider>
  <div>
    <a-tag color="success">success</a-tag>
    <a-tag color="processing">processing</a-tag>
    <a-tag color="error">error</a-tag>
    <a-tag color="warning">warning</a-tag>
    <a-tag color="default">default</a-tag>
  </div>
  <a-divider orientation="left">With icon</a-divider>
  <div>
    <a-tag color="success">
      <template #icon>
        <IconBytedCheck :colors="['currentColor']" />
      </template>
      success
    </a-tag>
    <a-tag color="processing">
      <template #icon>
        <IconBytedSync :spin="true" :colors="['currentColor']" />
      </template>
      processing
    </a-tag>
    <a-tag color="error">
      <template #icon>
        <IconBytedClose :colors="['currentColor']" />
      </template>
      error
    </a-tag>
    <a-tag color="warning">
      <template #icon>
        <IconBytedExchangeTwo :colors="['currentColor']" />
      </template>
      warning
    </a-tag>
    <a-tag color="default">
      <template #icon>
        <IconBytedTime :colors="['currentColor']" />
      </template>
      waiting
    </a-tag>
    <a-tag color="default">
      <template #icon>
        <IconBytedMinus :colors="['currentColor']" />
      </template>
      stop
    </a-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  IconBytedCheck,
  IconBytedSync,
  IconBytedClose,
  IconBytedExchangeTwo,
  IconBytedTime,
  IconBytedMinus,
} from '@fe6/icon-vue';

export default defineComponent({
  components: {
    IconBytedCheck,
    IconBytedSync,
    IconBytedClose,
    IconBytedExchangeTwo,
    IconBytedTime,
    IconBytedMinus,
  },
});
</script>
