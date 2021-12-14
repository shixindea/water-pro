---
category: Components
type: General
title: ContainerCollapse
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg
---

When there are too many things

## When To Use

When you don't want to show it once

## API

For more parameters of **_Basic Help_**, see [basic help] (./basic-help).

| Property | Description | Type | Default |
| --- | --- | --- | --- | --- |
| value(v-model) | Show content | boolean | false | - |
| title | Title | string | - | - |
| text | help tip | string | - | - |
| expanable | Expandable content | boolean | true | - |
| triggerWindowResize | Whether to listen for window changes | boolean | - | - |
| loading | Loading | boolean | - | - |
| lazy | Lazy | boolean | - | - |
| titleLevel | Title font size | number | 5 | 3.24.0 |
| mode | 类型 | Set expansion display type, optional `simple` , `default` | default | 3.42.0 |

## Event

| Events Name | Description                                   | Arguments             |
| ----------- | --------------------------------------------- | --------------------- | --- |
| openChange  | Pop up and close the callback of the calendar | function(status)      |
| panelChange | Callback when the date panel changes          | function(value, mode) | -   |

## Slots

| Name   | Description    | Arguments                    | Default | Version |
| ------ | -------------- | ---------------------------- | ------- | ------- |
| action | Operating slot | {status: 'Is the status on'} | -       | 3.42.0  |
| icon   | Icon slot      | {status: 'Is the status on'} | -       | 3.42.0  |
