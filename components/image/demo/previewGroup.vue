<docs>
---
order: 3
title:
  zh-CN: 多张图片预览
  en-US: Multiple image preview
---

## zh-CN

点击左右切换按钮可以预览多张图片。

## en-US

Click the left and right switch buttons to preview multiple images.

</docs>

<template>
  <a-image-preview-group>
    <a-row :gutter="32">
      <a-col :span="8">
        <a-image width="100%" src="https://aliyuncdn.antdv.com/vue.png" />
      </a-col>
      <a-col :span="8">
        <a-image width="100%" src="https://aliyuncdn.antdv.com/logo.png" />
      </a-col>
      <a-col :span="8">
        <a-image
          width="100%"
          src="https://cdn.dev.mosh.cn/image/2c/a0/5c89e3fbb70d37f61543f0743642.png?x-oss-process=image/resize,w_500,h_500,m_fill/quality,q_100"
          fit="contain"
        />
      </a-col>
    </a-row>
  </a-image-preview-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
