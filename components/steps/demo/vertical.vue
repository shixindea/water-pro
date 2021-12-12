<docs>
---
order: 4
title:
  zh-CN: 竖直方向的步骤条
  en-US: Vertical
---

## zh-CN

简单的竖直方向的步骤条。`vertical-space="large"` 可设置间距。large 间距是 32px ， small 间距是 12px ， default 间距是 24px 。

## en-US

A simple step bar in the vertical direction.
</docs>

<template>
  <a-steps direction="vertical" :current="1" vertical-space="large">
    <a-step title="Finished" description="This is a description." />
    <a-step title="In Progress" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
