<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.
</docs>

<template>
  <a-upload-image
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    result-key="data"
    accept="image/png,image/jpeg,image/gif"
    limitErrorText="222"
    :data="{ a: 1 }"
  />
</template>
