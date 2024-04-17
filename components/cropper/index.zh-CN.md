---
category: Components
type: 其他
title: Cropper
subtitle: 剪裁图片
cover: https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg
---

对图片进行裁切。 4.30.0 新增。

## 何时使用

- 当图片太大的时候可以剪裁图片某一部分

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| src | 图片地址 | string | - | - |
| default-size | 默认缩放大小 | object<{width: number, height: number}> | - | - |
| min-width | 缩放最小宽度 | number | - | - |
| min-height | 缩放最小高度 | number | - | - |
| ratio | 缩放比例 | number | - | - |

## 事件

| 事件名称 | 说明         | 回调参数                                       | 版本  |
| -------- | ------------ | ---------------------------------------------- | ----- |
| change   | 改变触发 | function(theArg) | - |
