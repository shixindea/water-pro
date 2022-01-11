<docs>
---
order: 5
title:
  zh-CN: 自定义箭头
  en-US: Custom Arrows
---

## zh-CN

自定义箭头展示。

## en-US

Custom arrows display

</docs>

<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; zindex: 1">
        <IconBytedArrowCircleLeft :colors="['#fff']" />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <IconBytedArrowCircleRight :colors="['#fff']" />
      </div>
    </template>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script lang="ts">
import { IconBytedArrowCircleLeft, IconBytedArrowCircleRight } from '@fe6/icon-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconBytedArrowCircleLeft,
    IconBytedArrowCircleRight,
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
