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
  <a-scrollbar
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
  </a-scrollbar>
</template>

<script lang="ts" setup>
const changeScroll = (moveX: number, moveY: number) => {
  console.log(moveX, moveY, 'change');
};
</script>
