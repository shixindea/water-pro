---
category: Components
type: Data Entry
title: TagGroup
cover: https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg
---

Quick encapsulation of labels.

## When To Use

- There are many labels to show
- There are many labels to hide
- Labels need to be created

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Can the label be closed | boolean | false |  |
| maxTagTextLength | For the length of text, Chinese is two lengths and English is one length | number | 4 |  |
| maxTagCount | The number of tags. When it is 0, all tags will be displayed | number | 4 |  |
| closable | Show close button | boolean | false |  |
| createable | Show create button | boolean | false |  |
| createInputable | Create directly from input box | boolean | true |  |
| createLoading | Is the creation loaded | boolean | false |  |
| removeLoading | Click Delete Icon to confirm whether it is loading | boolean | false |  |
| closeEmitAble | Input loses focus during creation or operation on input during carriage return | boolean | true |  |
| nameLabel | Field that displays the label name | string | name |  |
| createPlaceholder | Add label button text | string | 添加标签 |  |
| color | Tag color | string | blue |  |
| tagStyle | Tag style | CSSProperties | - |  |
| className | Outermost class name | array \| string | - |  |
| createIcon | Type is not a select mode, and + icon may not be displayed | boolean | true | 3.26.0 |
| createBordered | Type is not in select mode, and the margin inside the border can not be displayed | boolean | true | 3.26.0 |
| showSelected | Type is not in select mode. Display selected | boolean | true | 3.26.0 |
| disabled | Disabled | boolean | - | 3.27.0 |

## Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| close-click | Callback when closing | (e) => void |
| create-click | Click Add trigger | (e) => void |
| change | Press enter in the input box to trigger and return the input content. The eventtype is close | (inputValue, eventType) => void |
| change | Click the close button to trigger and return the currently closed value. The eventtype is remove | (name, eventType) => void |
