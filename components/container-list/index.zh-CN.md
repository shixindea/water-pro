---
category: Components
type: 通用
title: ContainerList
subtitle: 列表容器
cover: https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg
---

虚拟滚动的列表容器。 4.0 新增。

## 何时使用

大数据的时候.

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| data | 最大宽度 | any[] |  | - |
| height | 容器高度 | number | - |  |
| itemHeight | 每条数据高度 | number | - |  |
| fullHeight | 若不匹配虚拟滚动条件，则设置列表仍使用容器的高度。 | boolean | - |  |
| itemKey | key | String \| Number \| Function | - |  |
| component | 外层的组件 | String, Object | - |  |
| virtual | 是否使用虚拟滚动 | boolean | - |  |
| children | 每条数据的内容 | Function | - |  |
| onScroll | 滚动监听 | Function | - |  |
| onMousedown | onMousedown 监听 | Function | - |  |
| onMouseenter | onMouseenter 监听 | Function | - |  |
