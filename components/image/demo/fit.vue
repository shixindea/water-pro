<docs>
---
order: 0
title:
  zh-CN: 图片展示
  en-US: Fit
---

## zh-CN

可通过fit确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)。

## en-US

Fit.

</docs>

<template>
  <a-row>
    <a-col :span="4">
      <a-space direction="vertical">
        <a-typography-title :level="6" resetable>普通</a-typography-title>
        <a-typography-text block code>fit=""</a-typography-text>
        <a-image
          :width="100"
          :src="`https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg?${random}`"
        />
      </a-space>
    </a-col>
    <a-col :span="4">
      <a-space direction="vertical">
        <a-typography-title :level="6" resetable>fill</a-typography-title>
        <a-typography-text block code>fit="fill"</a-typography-text>
        <a-image
          :width="100"
          fit="fill"
          :src="`https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg?${random}`"
        />
      </a-space>
    </a-col>
    <a-col :span="4">
      <a-space direction="vertical">
        <a-typography-title :level="6" resetable>contain</a-typography-title>
        <a-typography-text block code>fit="contain"</a-typography-text>
        <a-image
          :width="100"
          fit="contain"
          :src="`https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg?${random}`"
        />
      </a-space>
    </a-col>
    <a-col :span="4">
      <a-space direction="vertical">
        <a-typography-title :level="6" resetable>cover</a-typography-title>
        <a-typography-text block code>fit="cover"</a-typography-text>
        <a-image
          :width="100"
          fit="cover"
          :src="`https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg?${random}`"
        />
      </a-space>
    </a-col>
    <a-col :span="4">
      <a-space direction="vertical">
        <a-typography-title :level="6" resetable>none</a-typography-title>
        <a-typography-text block code>fit="none"</a-typography-text>
        <a-image
          :width="100"
          fit="none"
          :src="`https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg?${random}`"
        />
      </a-space>
    </a-col>
    <a-col :span="4">
      <a-space direction="vertical">
        <a-typography-title :level="6" resetable>scale-down</a-typography-title>
        <a-typography-text block code>fit="scale-down"</a-typography-text>
        <a-image
          :width="100"
          fit="scale-down"
          :src="`https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg?${random}`"
        />
      </a-space>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      random: ref(),
    };
  },
});
</script>
