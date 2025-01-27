---
category: Components
type: Data Entry
title: ColorPicker
cover: https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg
---

Fork from [@simonwep/pickr](https://github.com/Simonwep/pickr)

## When To Use

- You need to select a color.
- Dissatisfied with the existing color, need to customize.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Used to set the currently selected value | string | - | - |
| disabled | Disabled | boolean | false | - |
| size | Size | `large` \| `default` \| `small` | `default` | - |
| alpha | Alpha | boolean | false | - |
| hue | Hue | boolean | true | - |
| format | Color format | `hsl` \| `hsv` \| `hex` \| `rgb` | false | - |
| predefine | Predefined colors | array | ['rgba(244, 67, 54, 1)','rgba(233, 30, 99, 0.95)','rgba(156, 39, 176, 0.9)','rgba(103, 58, 183, 0.85)','rgba(63, 81, 181, 0.8)','rgba(33, 150, 243, 0.75)','rgba(3, 169, 244, 0.7)','rgba(0, 188, 212, 0.7)','rgba(0, 150, 136, 0.75)','rgba(76, 175, 80, 0.8)','rgba(139, 195, 74, 0.85)','rgba(205, 220, 57, 0.9)','rgba(255, 235, 59, 0.95)','rgba(255, 193, 7, 1)'] | - |
| config | picker For the configuration of picker, refer to [@simonwep/pickr](https://www.npmjs.com/package/@simonwep/pickr) | object | - | - |
| colorRounded | Keep several decimal places for color values | number | - | - |
| padding | Modal padding | number | 16 | - |
| getPopupContainer | Specifies the render container | function | - | - |
| mode | mode | `simple` \| `default` | `default` | 4.0.0 |

## Event

| Event | Description | Arguments |
| --- | --- | --- |
| change | Callback of switch panel | function(key) |
| openChange | Triggered when the color currently displayed in the panel changes | function(status) |

## Slots

| Name        | Description | Arguments | Default | Version |
| ----------- | ----------- | --------- | ------- | ------- |
| placeholder | Placeholder | -         | -       | 4.0.0   |
