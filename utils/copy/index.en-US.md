---
category: Utils
type: Utils
title: Copy
cover: https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg
---

A replication tool and method.

## When To Use

- Copy a paragraph.

## API

usage method： `copy(content, [config])`

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| content | Copied content | string | - |  |
| config | Refer to the following for some configuration parameters | [CopyOptions](../../components/_util/copy-to-clipboard/interface.ts) | - |  |

`config` the object properties are as follows:

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| debug | Debug or not | boolean | - |  |
| message | Prompt of retest failure in IE | string | Copy to clipboard: #{key}, Enter |  |
| format | MIME type, optional parameters: `text/plain` \| `text/html` \| `default` | string | default |  |
| onCopy | Copy executed functions | Function | - |  |
