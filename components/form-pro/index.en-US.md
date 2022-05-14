---
category: Components
type: Data Entry
cols: 1
title: Form
cover: https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg
---

High performance Form component with data scope management. Including data collection, verification, and styles.

## When to use

- When you need to create an instance or collect information.
- When you need to validate fields in certain rules.

## API

### Form

| Property | Description | Type | Default Value | Version |
| --- | --- | --- | --- | --- |
| model | Form data object | object |  |  |
| labelWidth | The width of the label's text | Number \| String |  |  |
| fieldMapToTime | Area field, converting one-dimensional field | [字段，[开始时间的字段名字，结束时间的字段名字]， 时间格式化][] |  |  |
| actionAlgin | The alignment of the bottom operation buttons, when 'space between', is flex layout, which is suitable for multiple buttons. | 'left' \| 'right' \| 'center' \| 'space-between' | left |  |
| actionAffix | Does the bottom action button hover to the bottom | boolean | - |  |
| actionTarget | Set the element that needs to listen for its rolling events when submitting affix. The value is a function that returns the corresponding DOM element | () => HTMLElement | - | 3.13.0 |
| actionOffsetBottom | The distance the bottom action button hovers to the bottom | Number | 0 |  |
| baseGutter | Horizontal inline spacing | number | 0 |  |
| autoSetPlaceHolder | Whether to set the placeholder text by yourself. Rangepicker is invalid | boolean | true |  |
| layout | form layout | 'horizontal'\|'vertical'\|'inline' | 'horizontal' |  |
| submitOnReset | Click submit to reset fields and verify | boolean | - |  |
| resetOnSubmit | Click reset to reset fields and verify | boolean | - | 4.0 |
| disabled | Disable form | boolean | - |  |
| showActionButtonGroup | Whether to display operation buttons | boolean | true |  |
| showResetButton | Is the reset button displayed | boolean | true |  |
| showSubmitButton | Whether to display the confirmation button | boolean | true |  |
| autoFocusFirstItem | Whether to focus on the first input box, which only works when the first form item is input | boolean | - |  |
| showAdvancedButton | Show stow expand button | boolean | - |  |
| emptySpan | Expand the span of the empty space | number \| [ColProps](../grid/col.tsx) | 0 |  |
| transformDateFunc | Conversion time method | Function | `(date: any) => hasOwn(date, 'format') ? date?.format('YYYY-MM-DD HH:mm:ss') : date` |  |
| hideRequiredMark | Whether to display the required identification (\*) of the label can only be set in the form Pro label | boolean | - |  |
| colon | 是否显示标签文字的冒号 | boolean | true |  |
| resetClearValidate | Click the reset button to clear the verification prompt | boolean | true |  |
| schemas | Field configuration | [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126) | [] |  |
| mergeDynamicData | Definition of redundant fields returned in separate dynamic validation methods (dynamic rules) | object | - |  |
| rulesMessageJoinLabel | Verify that the prompt is displayed in conjunction with the label text | boolean | true |  |
| actionColOptions | Col configuration of operation line | [ColProps](../grid/col.tsx) | - |  |
| labelCol | Configure field label area layout | [ColProps](../grid/col.tsx) | - |  |
| wrapperCol | Configure field content area layout | [ColProps](../grid/col.tsx) | - |  |
| resetButtonOptions | Reset [button configuration](./button) | object |  |  |
| submitButtonOptions | OK [button configuration](./button) | object |  |  |
| size | Size | `default` \| `small` | `default` |  |
| navAffix | Is the top navigation displayed | boolean | - | 3.17.0 |
| navTarget | Set the element that needs to listen for its rolling events when submitting affix. The value is a function that returns the corresponding DOM element | () => HTMLElement | - | 3.17.0 |
| navOffsetTop | The distance from the top operation button to the top | Number | 0 | 3.17.0 |
| advancedAll | expend all | boolean | - | 4.0.0 |
| inlineCol | Whem `layout="inline"` , config grid | [ColProps](../grid/col.tsx) | { span: 8 } | 4.0.0 |
| inlineActionCol | Whem `layout="inline"` , config button grid | [ColProps](../grid/col.tsx) | { span: 8 } | 4.0.0 |
| inlineRow | Whem `layout="inline"` , config grid | [ColProps](../grid/col.tsx) | { span: 8 } | 4.0.0 |

### Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| register | Callback using useform | Function([formActionType](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29)) |  |
| advanced-change | Collapsed callback | - |  |
| reset | Reset callback | function(formModel(Form data object)) |  |
| submit | Verify successful OK callback | function(formModel(Form data object)) |  |
| submit-error | Verify successful ERROR callback | function(error) |  |

### useForm Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| scrollToField | Scroll to validation failed | [NamePath](https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4), ScrollOptions) \| options |  |
| setProps | Set a property | - |  |
| resetAllModel | Reset all data | - |  |
| updateSchema | Update schema | [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126), replace |  |
| clearValidate | Clear validate | Field name, string \| string[] |  |
| resetFields | Reset Fields | - |  |
| removeSchemaByFiled | remvoe Fields | field(字段名，string \| string[]) |  |
| getFieldsValue | Get the values of all fields and pass it to true to filter the fields that are not displayed | filterHidden |  |
| getChildrenFieldsValue | Get the values of all fields, conform to the schema structure, and pass true to filter the fields that are not displayed | filterHidden | 3.19.0 |
| setFieldsValue | Set values for all fields | Set value (object) |  |
| appendSchemaByField | Add new field | schema(Rule, [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126))，the referenced field. Add it in front |  |
| submit | Submission method | - |  |
| validate | Validate some fields of the form | The name of the field([NamePath](https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4)) |  |
| validateFields | Really all form fields | The name of the field([NamePath](https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4)) |  |
