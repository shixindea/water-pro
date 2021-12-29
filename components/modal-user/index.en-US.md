---
category: Components
type: Feedback
title: ModalUser
cover: https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg
---

More user information can be displayed in the pop-up box, such as name, alias, Department, role, position, etc. Local search is faster and one click all selection is more convenient.

## When To Use

When users need to be selected to submit data through table filtering

## PS

- When duplicate user data in data is selected  All selected. It must be `props.repeatableCheck = true` time
- Fieldnames. In configuration Key is the unique identifier used as the mount node key

## API

### Props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| value(v-model) | Selected value | string[] \| number[] | - |  |
| fieldNames | Replace various fields in treenode with corresponding fields in options. Specific reference ` fieldnames` |  | object | {children: 'children',title: 'name',key: 'id',value: 'userId',nodeId: 'departmentId',unionid: 'userId',alias: 'alias',position: 'position',avatar: 'avatar',roleName: 'roleName',users: 'users'} |  |
| maxTagTextLength | For the length of text, Chinese is two lengths and English is one length | number | 4 |  |
| maxTagCount | The number of tags. When it is 0, all tags will be displayed | number | 4 |  |
| closable | Show close button | boolean | true |  |
| api | Request pop-up optional interface | Function | - |  |
| apiParams | Parameters attached to the interface | object | {} |
| titleRightRender | Custom title right area | Function | - |  |
| modalTitle | Pop up title | string | 选择员工 |  |
| modalRightTitle | Right title in pop-up box | string | 已选择员工 |  |
| searchPlaceholder | Search input box placeholder | string | 请输入员工名称查询 |  |
| type | Control type, optional `select` | string | select |  |
| size | Size | string | `default` |  |
| placeholder | content | string | 添加员工 |  |
| options | Options | array | - |  |
| beforeOk | Before ok | Function | - |  |
| disabled | Disabled | boolean | - |  |
| showAlias | Show alias | boolean | true |  |
| modalProps | Modal props | object | - |  |
| scrollName | Scoll classname | string | - |  |
| mode | Select type, optional `checkbox` `radio` | string | checkbox | 3.44.0 |
| beforeParams |  | Function | - | 4.0 |
| showRoleName | Request pop-up optional interface | boolean | true | 4.0 |
| showAvatar | Show avatar | Function | - | 4.0 |
| userLabel | Identification of data, used to distinguish between nodes and data | Function | - | 4.0 |
| height | The height of the contents of the bullet box | Number | 370 | 4.0 |
| repeatableCheck | Automatically check when repeating data | boolean | true | 4.0 |

### ReplaceFields

| Fields Property     | Description | Type   | Default  | Version |
| ------------------- | ----------- | ------ | -------- | ------- |
| fieldNames.children | Child set   | string | children |         |
| fieldNames.title    | Name        | string | name     |         |
| fieldNames.key      | Key         | string | key      |         |
| fieldNames.value    | value       | string | userId   |         |
| fieldNames.alias    | Alias       | string | alias    |         |
| fieldNames.position | Position    | string | position |         |
| fieldNames.avatar   | Avatar      | string | avatar   |         |
| fieldNames.roleName | Role name   | string | roleName |         |
| fieldNames.type     | Type        | string | type     | 4.0     |
| fieldNames.disabled | Disabled    | string | disabled | 4.0     |

### 事件

| Events Name | Description                    | Arguments                            |
| ----------- | ------------------------------ | ------------------------------------ |
| cancel      | Click the pop-up box to cancel | (value: any[], nodes: any[]) => void |
| change      | Change callback                | (value: any[]) => void               |
| ok          | Ok callback                    | (value: any[], nodes: any[]) => void |
