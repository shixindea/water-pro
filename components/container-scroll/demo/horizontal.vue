<docs>
---
order: 0
title:
  zh-CN: 横向滚动
  en-US: ShowHorizontal
---

## zh-CN

横向滚动，禁用竖向滚动

## en-US

ShowHorizontal

</docs>

<template>
  <div>
    <a-button type="primary" @click="go30px">到 30 px</a-button>
    <a-container-scroll
      ref="scrollNode"
      style="height: 300px; box-sizing: content-box; border: 1px solid"
      showHorizontal
      :showVertical="false"
      @change="changeScroll"
    >
      <div style="display: flex">
        <div style="width: 200px; height: 300px; flex-shrink: 0; background: #00a0e9">
          Water Pro is best.
        </div>
        <div style="width: 600px; line-height: 300px; text-align: center; flex-shrink: 0">
          Water Pro is best.
        </div>
        <div
          style="
            width: 600px;
            line-height: 300px;
            background: #00a0e9;
            color: #fff;
            text-align: center;
            flex-shrink: 0;
          "
        >
          Water Pro is best.
        </div>
      </div>
    </a-container-scroll>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const changeScroll = (moveX: number, moveY: number) => {
  console.log(moveX, moveY, 'change');
};

const scrollNode = ref(null);
const go30px = () => {
  scrollNode.value.scrollTo(30, 0, 'x');
};
</script>
