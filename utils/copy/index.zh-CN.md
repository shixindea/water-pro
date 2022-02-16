---
category: Utils
type: 工具
title: Copy
subtitle: 复制
cover: https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg
---

一个复制的工具方法

## 何时使用

- 复制一段内容。

## API

使用方法： `copy(content, [config])`

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| content | 复制的内容 | string | - |  |
| config | 一些配置参数，参照下面 | [CopyOptions](../../components/_util/copy-to-clipboard/interface.ts) | - |  |

`config` 对象属性如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| debug | 是否调试 | boolean | - |  |
| message | IE 中复试失败的提示 | string | Copy to clipboard: #{key}, Enter |  |
| format | MIME 类型，可选参数 `text/plain` \| `text/html` \| `default` | string | default |  |
| onCopy | 复制执行的函数 | Function | - |  |
