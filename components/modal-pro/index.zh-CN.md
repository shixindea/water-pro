---
category: Components
type: 反馈
title: ModalPro
subtitle: 对话框
cover: https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg
---

模态对话框。通过 `useModal` 更快捷的使用。自带拖拽功能，更好用.

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

## API

| 参数              | 说明                                  | 类型           | 默认值 | 版本 |
| ----------------- | ------------------------------------- | -------------- | ------ | ---- |
| defaultFullscreen | 是否全屏                              | boolean        | -      |      |
| canFullscreen     | 是否全屏按钮                          | boolean        | -      |      |
| bodyStyle         | 内容的样式                            | object         | -      |      |
| minHeight         | 内容的最小高度                        | number         | -      |      |
| scrollStyle       | 滚动内容的样式                        | object         | -      |      |
| width             | 内容的宽度                            | number         | -      |      |
| title             | 弹框标题， 为 `null` 的时候就隐藏标题 | string \| null | -      |      |
| text              | 标题边上的帮助提示                    | string         | -      |      |
| loadingTip        | 内容区域加载的文案                    | string         | -      |      |
| loading           | 内容区域是否加载                      | boolean        | -      |      |

## Slots

| 方法名称 | 说明       |
| -------- | ---------- |
| header   | 头部自定义 |
| footer   | 底部自定义 |
| close    | 关闭自定义 |

## ModalMethods 中的方法

| 方法名称        | 说明                                                |
| --------------- | --------------------------------------------------- |
| setModalProps   | 设置 Modal Pro 属性                                 |
| getVisible      | 获取弹框显示状态                                    |
| redoModalHeight | 设置弹框整体的高度                                  |
| openModal       | 直接不传参数的调用是打开弹框，传 `false` 是关闭弹框 |
