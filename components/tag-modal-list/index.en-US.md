---
category: Components
type: Data Entry
title: TagModalList
cover: https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg
---

Quick encapsulation of tag modal.

## When To Use

- There are many tag modal to show
- There are many tag modal to hide
- Labels need to be created

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Selected value | string[] \| number[] | - |  |
| maxTagTextLength | For the length of text, Chinese is two lengths and English is one length | number | 4 |  |
| maxTagCount | The number of tags. When it is 0, all tags will be displayed | number | 4 |  |
| maxCheckCount | In the ` type = "checkbox" mode, you can set the maximum number of options | number | - | 3.10.0 |
| closable | Show close button | boolean | true |  |
| createable | Whether to display the Create button when the 'type' is not set | boolean | false |  |
| nameLabel | Field that displays the label name | string | name |  |
| valueLabel | Fields for submitting data | string | name |  |
| childrenLabel | Field name of the grouping subset | string | children |  |
| api | Request pop-up optional interface | Function as PropType<(arg?: Recordable) => Promise<Recordable[]>> | - |  |
| apiParams | Parameters attached to the interface | object | {} |
| beforeClose | Uncheck the previous confirmation and return true to delete | Function as PropType<(arg?: Recordable) => Promise<Recordable[]>> | - |  |
| titleRightRender | Custom header right area | Function | - |  |
| modalTitle | modal title | string | 选择标签 |  |
| createPlaceholder | Create a copy of the button | string | 添加标签 |  |
| type | Control type, optional `select` | string | - |  |
| size | `Type = "select" `. Note: the size of the input box in the standard form is limited to 'large'. Optional `large` `default` ` small` | string | `default` |  |
| checkMode | Select the type, single or multiple. `radio` \| `checkbox` | `checkbox` |  |
| placeholder | Display content when `type="select"` | string | - |  |
| options | Optional data | array | - | 3.26.0 |
| showSelected | Type is not a select mode, and the selected options can not be displayed | boolean | true | 3.26.0 |
| createIcon | Type is not a select mode, and + icon may not be displayed | boolean | true | 3.26.0 |
| createBordered | Type is not in select mode, and the margin inside the border can not be displayed | boolean | true | 3.26.0 |
| beforeOk | Confirm to select the confirmation before and return true to delete | Function as PropType<(arg?: Recordable) => Promise<Recordable[]>> | - | 3.26.0 |
| disabled | Disabled | boolean | - | 3.27.0 |

## Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| close-click | Callback when closing | (e) => void |
| create-click | Click Add trigger | (e) => void |
| change | Click OK in the pop-up box to trigger and return to the input content. The eventtype is OK | (inputValue, eventType) => void |
| change | Click Cancel trigger in the pop-up box or click the upper right corner to close the trigger and return to the input content. The eventtype is cancel | (inputValue, eventType) => void |
| change | Press enter in the input box to trigger and return the input content. The eventtype is close | (inputValue, eventType) => void |
| change | Click the close button to trigger and return the currently closed value. The eventtype is remove | (name, eventType) => void |
