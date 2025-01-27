---
category: Components
type: 通用
title: ScrollBar
subtitle: 自定义滚动条
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg
---

 在任何时候滚动条样式统一。

## 何时使用

内容很长，并且需要任何时候样式统一。

## API

| 属性           | 说明                | 类型            | 默认值 | 版本  |
| -------------- | ------------------- | --------------- | ------ | ----- |
| native         | 是否用原生滚动      | boolean         | false  |       |
| showHorizontal | 是否显示横向滚动条  | boolean         | false  |       |
| showVertical   | 是否显示纵向滚动条  | boolean         | true   | 4.8.0 |
| wrapStyle      | 滚动外框的样式      | string \| array | -      |       |
| viewStyle      | 滚动内容的样式      | string \| array | -      |       |
| wrapClass      | 滚动外框的 class 名 | string \| array | -      |       |
| viewClass      | 滚动内容的 class 名 | string \| array | -      |       |

## 事件

| 事件名称 | 说明         | 回调参数                                       | 版本  |
| -------- | ------------ | ---------------------------------------------- | ----- |
| change   | 滚条改变触发 | function(x:number,y:number, warpNode: Element) | 4.8.0 |
