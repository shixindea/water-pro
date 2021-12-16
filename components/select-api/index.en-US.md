---
category: Components
type: Data Entry
title: SelectApi
cover: https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg
---

Select component to select value from options.

## When To Use

- Interface required.
- Form

## API

### Select props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Current selected option. | string\|number\|string\[]\|number\[] | - |  |
| allowClear | Show clear button. | boolean | false |  |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`. | boolean | true |  |
| autofocus | Get focus by default | boolean | false |  |
| bordered | Whether has border style | boolean | true |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| disabled | Whether disabled select | boolean | false |  |
| dropdownClassName | className of dropdown menu | string | - |  |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number | true |  |
| dropdownRender | Customize dropdown content | ({menuNode: VNode, props}) => VNode \| v-slot | - |  |
| dropdownStyle | style of dropdown menu | object | - |  |
| dropdownMenuStyle | additional style applied to dropdown menu | object | - |  |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |  |
| firstActiveValue | Value of action option by default | string\|string\[] | - |  |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. | function(triggerNode) | () => document.body |  |
| labelInValue | whether to embed label in value, turn the format of value from `string` to `{key: string, label: vNodes}` | boolean | false |  |
| maxTagCount | Max tag count to show | number | - |  |
| maxTagPlaceholder | Placeholder for not showing tags | slot/function(omittedValues) | - |  |
| maxTagTextLength | Max text length to show | number | - |  |
| mode | Set mode of Select | 'multiple' \| 'tags' | - |  |
| notFoundContent | Specify content to show when no result matches.. | string\|slot | 'Not Found' |  |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true | string | value |  |
| optionLabelProp | Which prop value of option will render as content of select. | string | `children` \| `label`(when use options) |  |
| placeholder | Placeholder of select | string\|slot | - |  |
| showSearch | Whether show search input in single mode. | boolean | false |  |
| showArrow | Whether to show the drop-down arrow | boolean | true |  |
| size | Size of Select input. `default` `large` `small` | string | default |  |
| suffixIcon | The custom suffix icon | VNode \| slot | - |  |
| removeIcon | The custom remove icon | VNode \| slot | - |  |
| clearIcon | The custom clear icon | VNode \| slot | - |  |
| menuItemSelectedIcon | The custom menuItemSelected icon | VNode \| slot | - |  |
| tokenSeparators | Separator used to tokenize on tag/multiple mode | string\[] |  |  |
| options | Data of the selectOption, manual construction work is no longer needed if this property has been set | array&lt;{value, label, [disabled, key, title]}> | \[] |  |
| option | custom render option by slot | v-slot:option="{value, label, [disabled, key, title]}" | - | 2.2.5 |
| defaultOpen | Initial open state of dropdown | boolean | - |  |
| open | Controlled open state of dropdown | boolean | - |  |
| loading | Indicate loading state | Boolean | false |  |
| api | Interface request. Async and promise are not supported. Only callback is supported | `(...arg: any) => Promise<any>` | - |  |
| apiParams | Parameters attached to the interface | object | {} |
| loopGetOptions | Whether to cycle the request API and get the drop-down options | boolean | false |
| loadingPlaceholder | Loading placeholder | string | - | 4.0.0 |
| fieldNames | Replace the label, value, key and options fields in options with the corresponding fields in options | {options:'options', label:'label', key:'key', value:'value' } | - | 4.0.0 |

> Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use `getPopupContainer={triggerNode => triggerNode.parentElement}` to fix the drop-down popup rendering node in the parent element of the trigger .

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| blur | Called when blur | function |
| change | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option/Array&lt;Option>) |
| deselect | Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only. | function(value, option:Option) |
| focus | Called when focus | function |
| inputKeyDown | Called when key pressed | function |
| mouseenter | Called when mouse enter | function |
| mouseleave | Called when mouse leave | function |
| popupScroll | Called when dropdown scrolls | function |
| search | Callback function that is fired when input changed. | function(value: string) |
| select | Called when a option is selected, the params are option's value (or key) and option instance. | function(value, option:Option) |
| dropdownVisibleChange | Call when dropdown open | function(open) |

### Select Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |

## FAQ

### The dropdown is closed when click `dropdownRender` area?

See the [dropdownRender example](/components/select/#components-select-demo-custom-dropdown).

### Why is `placeholder` not displayed?

`placeholder` will only be displayed when `value = undefined`, and other values such as null, 0,'', etc. are meaningful values for the JS language.

You can check [JS Language Specification](https://262.ecma-international.org/5.1/#sec-4.3.9) for further details.

You can also check [antd issue](https://github.com/ant-design/ant-design/issues/2367) to view the discussion.
