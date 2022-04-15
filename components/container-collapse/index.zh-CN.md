---
category: Components
type: 通用
title: ContainerCollapse
subtitle: 展开容器
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg
---

有过多东西的时候

## 何时使用

不想一次展现的时候

## API

更多 **_帮助提示_** 的参数，参考 [basic-help](./basic-help-cn) 。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value(v-model) | 是否显示内容 | boolean | false | - |
| title | 标题 | string | - | - |
| text | 帮助提示。 | string | - | - |
| expanable | 是否可展开内容 | boolean | true | - |
| triggerWindowResize | 是否监听窗口改变 | boolean | - | - |
| loading | 是否加载中 | boolean | - | - |
| lazy | 是否延迟加载 | boolean | - | - |
| titleLevel | 标题字号 | number | 5 | 3.24.0 |
| mode | 类型 | 设置展开展示类型，可选 `simple` , `default` | default | 3.42.0 |

## 事件

| 事件名称 | 说明         | 回调参数         |
| -------- | ------------ | ---------------- |
| expand   | 展开收起触发 | function(status) |

## Slots

| 名称     | 说明         | 参数                     | 默认值 | 版本   |
| -------- | ------------ | ------------------------ | ------ | ------ |
| action   | 操作的插槽   | {status: '状态是否开启'} | -      | 3.42.0 |
| icon     | 图标的插槽   | {status: '状态是否开启'} | -      | 3.42.0 |
| title    | 标题的插槽   | {status: '状态是否开启'} | -      | 3.42.0 |
| skeleton | 骨架屏的插槽 | {status: '状态是否开启'} | -      | 3.42.0 |
