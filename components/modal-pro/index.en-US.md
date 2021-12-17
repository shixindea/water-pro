---
category: Components
type: Feedback
title: ModalPro
cover: https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg
---

Modal dialogs.

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use `Modal` to create a new floating layer over the current page to get user feedback or display information.

## API

| Property          | Description                            | Type           | Default | Version |
| ----------------- | -------------------------------------- | -------------- | ------- | ------- |
| defaultFullscreen | Fullscreen                             | boolean        | -       |         |
| canFullscreen     | Show fullscreen button                 | boolean        | -       |         |
| bodyStyle         | Body style                             | object         | -       |         |
| minHeight         | Content min height                     | number         | -       |         |
| scrollStyle       | Scroll content style                   | object         | -       |         |
| width             | Content width                          | number         | -       |         |
| title             | Modal title 为 `null` 的时候就隐藏标题 | string \| null | -       |         |
| text              | title help message                     | string         | -       |         |
| loadingTip        | Loading tip                            | string         | -       |         |
| loading           | Loading                                | boolean        | -       |         |

## Slots

| Name   | Description          |
| ------ | -------------------- |
| header | Header customization |
| footer | Footer customization |
| close  | Close customization  |

## ModalMethods Events

| Name | Description |
| --- | --- |
| setModalProps | Set modal pro props |
| getVisible | Get modal status |
| redoModalHeight | Set modal height |
| openModal | Calling directly without passing parameters is to open the modal, and passing `false` is to close the pop-up box |
