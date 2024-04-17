<docs>
---
order: 0
title:
  zh-CN: 设置默认尺寸
  en-US: Base
---

## zh-CN

设置默认尺寸。`:default-size="{ width: 700,height: 700, }"`

## en-US

设置默认尺寸.
</docs>

<template>
  <a-cropper
    ref="cropper"
    :default-size="{
      width: 700,
      height: 700,
    }"
    src="https://dz-cdn.test.fanzhi.cn/images/88/6f/39057702af25a0eb4dbc61114e02.jpg"
  />
</template>
