---
category: Components
type: Other
title: Cropper
subtitle: 剪裁图片
cover: https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg
---

对图片进行裁切

## 何时使用

- 当图片太大的时候可以剪裁图片某一部分

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dashed | 是否虚线 | boolean | false |  |
| orientation | 分割线标题的位置 | `left` \| `right` \| `center` | `center` |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | string \| number | - | 4.13.0 |
| plain | 文字是否显示为普通正文样式 | boolean | false | 2.2.0 |
| type | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |  |
