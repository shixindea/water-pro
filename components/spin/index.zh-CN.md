---
category: Components
type: 通用
title: Spin
subtitle: 加载中
cover: https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg
---

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |  |
| indicator | 加载指示符 | vNode \| slot | - |  |
| size | 组件大小，可选值为 `small` `default` `large` | string | 'default' |  |
| spinning | 是否为加载中状态 | boolean | true |  |
| tip | 当作为包裹元素时，可以自定义描述文案 | string \| slot | - | slot 4.13.0 |
| wrapperClassName | 包装器的类属性 | string | - |  |
| spinClassName | spin 的类属性 | string | - | 4.0 |
| color | 颜色 | string | - | 4.0 |

### 静态方法

- `Spin.setDefaultIndicator({indicator})` 同上 `indicator`，你可以自定义全局默认元素

  ```jsx
  import { h } from 'vue';
  Spin.setDefaultIndicator({
    indicator: h('i', { class: 'anticon anticon-loading anticon-spin ant-spin-dot' }),
  });
  ```
