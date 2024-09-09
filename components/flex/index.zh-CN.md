---
category: Components
type: 布局
subtitle: 间距
title: Flex
cols: 1
cover: https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg
---

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - | 1.6.5 |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` | 1.6.5 |
| placement | 间距方向，优先读取这里的 | `row` \| `col` | - | 4.27.0 |
| size | 间距大小 | `small` \| `middle` \| `large` \| `number` | `small` | 1.6.5 |
| blockable | 撑满 100 % | Boolean | - | 4.13.0 |
| justifyContent | 垂直对齐 | 'start' \| 'end' \| 'flex-start' \| 'center' \| 'flex-end' \| 'left' \| 'right','space-between' \| 'space-around' \| 'space-evenly' \| 'stretch' \| 'unsafe' \| 'inherit' \| 'initial' \| 'unset' \| '' | - | 4.19.0 |
