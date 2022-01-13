---
category: Components
type: 数据展示
title: Image
subtitle: 图片
cover: https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg
---

可预览的图片。

## 何时使用

- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - |  |
| fallback | 加载失败容错地址 | string | - |  |
| height | 图像高度 | string \| number | - |  |
| placeholder | 加载占位, 为 `true` 时使用默认占位 | boolean \| slot | - |  |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [previewType](#previewType) | true |  |
| src | 图片地址 | string | - |  |
| width | 图像宽度 | string \| number | - |  |
| bordered | 图像边框 | boolean | true | 3.31.0 |
| fit | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 。可选值: `fill` \| `contain` \| `cover` \| `none` \| `scale-down` | string | - | 4.0 |

### previewType

```js
{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer: string | HTMLElement | (() => HTMLElement);
}
```

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)
