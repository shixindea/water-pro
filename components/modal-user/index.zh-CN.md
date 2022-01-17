---
category: Components
type: 反馈
title: ModalUser
subtitle: 用户弹框
cover: https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg
---

弹框里可以展示更多用户信息，如姓名，别名，部门，角色，职位等。本地搜索更快捷，一键全选更方便。

## 何时使用

表格筛选用户，提交数据需要选择用户的时候

## 注意

- 数据中用户数据重复被选中的时候  都选中，必须是 `props.repeatableCheck = true` 的时候
- 配置中的 fieldNames.key 是用作挂载节点 key 的唯一标识

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value(v-model) | 选中的值 | string[] \| number[] | - |  |
| fieldNames | 替换 treeNode 中 各种字段为 options 中对应的字段。具体参考`fieldNames` | object | 看下面 |  |
| maxTagTextLength | 文字的长度，中文算 2 个长度，英文算一个长度 | number | 4 |  |
| maxTagCount | 标签的个数，为 0 的时候显示所有 | number | 4 |  |
| closable | 是否显示关闭按钮 | boolean | true |  |
| api | 请求弹框可选项的接口 | Function | - |  |
| apiParams | 接口附带的参数 | object | {} |  |
| titleRightRender | 自定义标题右边区域 | Function | - |  |
| modalTitle | 弹框标题 | string | 选择员工 |  |
| modalRightTitle | 弹框中右侧标题 | string | 已选择员工 |  |
| searchPlaceholder | 搜索输入框占位文案 | string | 请输入员工名称查询 |  |
| type | 控件类型，可选 `select` | string | select |  |
| size | `type="select"` 的时候控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |  |
| placeholder | `type="select"` 的时候没有值的时候显示的内容 | string | 添加员工 |  |
| options | 可选数据 | array | - |  |
| beforeOk | 确定选中之前的确认 | Function | - |  |
| disabled | 禁用 | boolean | - |  |
| showAlias | 是否显示别名 | boolean | true |  |
| modalProps | modal 的属性 | object | - |  |
| scrollName | 内容滚动的 classname | string | - |  |
| mode | 控件类型，可选 `checkbox` `radio` | string | checkbox | 3.44.0 |
| beforeParams | 请求弹框可选项的接口 | Function | - | 4.0 |
| showRoleName | 是否显示标签 | boolean | true | 4.0 |
| showAvatar | 是否显示头像 | Function | - | 4.0 |
| userLabel | 数据的标识，用于区分节点还是数据 | Function | - | 4.0 |
| height | 弹框内容的高度 | Number | 370 | 4.0 |
| repeatableCheck | 重复数据的时候自动勾选 | boolean | true | 4.0 |
| loadApi | 动态按需加载节点 | Function | - | 4.0 |
| loadApiParams | 动态按需加载节点接口附带的参数 | object | {} | 4.0 |
| virtual | 是否使用虚拟滚动 | boolean | true | 4.0 |

### ReplaceFields

| 字段                | 说明                 | 类型   | 默认值   | 版本 |
| ------------------- | -------------------- | ------ | -------- | ---- |
| fieldNames.children | 子级集合             | string | children |      |
| fieldNames.title    | 姓名                 | string | name     |      |
| fieldNames.key      | 折叠节点的唯一标识   | string | key      |      |
| fieldNames.value    | v-model:value 的字段 | string | userId   |      |
| fieldNames.alias    | 显示在名称后面       | string | alias    |      |
| fieldNames.position | 职位                 | string | position |      |
| fieldNames.avatar   | 头像                 | string | avatar   |      |
| fieldNames.roleName | 角色名称             | string | roleName |      |
| fieldNames.type     | 数据类型             | string | type     | 4.0  |
| fieldNames.disabled | 禁用                 | string | disabled | 4.0  |

### 事件

| 事件名称 | 说明                      | 回调参数                             |
| -------- | ------------------------- | ------------------------------------ |
| cancel   | 点击弹框取消之后          | (value: any[], nodes: any[]) => void |
| change   | v-model：value 改变的时候 | (value: any[]) => void               |
| ok       | 点击弹框确定之后          | (value: any[], nodes: any[]) => void |
