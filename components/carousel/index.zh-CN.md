---
category: Components
type: 数据展示
title: Carousel
subtitle: 走马灯
cover: https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg
---

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterChange | 切换面板的回调 | function(current) | 无 |  |
| autoplay | 是否自动切换 | boolean | false |  |
| beforeChange | 切换面板的回调 | function(from, to) | 无 |  |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | bottom | 1.5.0 |
| dots | 是否显示面板指示点 | boolean | true |  |
| dotsClass | 面板指示点类名 | string | `slick-dots` |  |
| easing | 动画效果 | string | linear |  |
| effect | 动画效果函数，可取 scrollx, fade | string | scrollx |  |
| imgList | 图片的列表 | string[] | - | 3.38.0 |
| preivewPageable | 是否显示下面预览小图 | boolean | - | 3.38.0 |
| preivewable | 是否放大主图预览 | boolean | true | 3.38.0 |

## 方法

| 名称                           | 描述                                              | 版本 |
| ------------------------------ | ------------------------------------------------- | ---- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |      |
| next()                         | 切换到下一面板                                    |      |
| prev()                         | 切换到上一面板                                    |      |

更多参数可参考：[vc-slick props](https://github.com/vueComponent/ant-design-vue/blob/next/components/vc-slick/src/default-props.js#L3)