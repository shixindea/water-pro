## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value(v-model) | 选中的值 | string[] \| number[] | - | |
| replaceFields | 替换 treeNode 中 各种字段为 options 中对应的字段。具体参考`replaceFields` | | object | {children: 'children',title: 'name',key: 'id',value: 'userId',nodeId: 'departmentId',unionid: 'userId',alias: 'alias',position: 'position',avatar: 'avatar',roleName: 'roleName',users: 'users'} | |
| maxTagTextLength | 文字的长度，中文算2个长度，英文算一个长度 | number | 4 | |
| maxTagCount | 标签的个数，为 0 的时候显示所有 | number | 4 | |
| closable | 是否显示关闭按钮 | boolean | true | |
| api | 请求弹框可选项的接口 | Function | - | |
| apiParams | 接口附带的参数 | object | {} |
| titleRightRender | 自定义标题右边区域 | Function | - |  |
| modalTitle | 弹框标题 | string | 选择员工 | |
| modalRightTitle | 弹框中右侧标题 | string | 已选择员工 | |
| searchPlaceholder | 搜索输入框占位文案 | string | 请输入员工名称查询 |  |
| type | 控件类型，可选 `select` | string | select | |
| size | `type="select"` 的时候控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |  |
| placeholder | `type="select"` 的时候没有值的时候显示的内容 | string | 添加员工 | |
| options | 可选数据 | array | - |  |
| beforeOk | 确定选中之前的确认 | Function | - | |
| disabled | 禁用 | boolean | - | |
| showAlias | 是否显示别名 | boolean | true | |
| modalProps | modal 的属性 | object | - | |
| scrollName | 内容滚动的 classname | string | - | |


### ReplaceFields

| 字段 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| replaceFields.children | 子级集合 | string | children | |
| replaceFields.title | 姓名 | string | name | |
| replaceFields.key | 折叠节点的唯一标识 | string | id | |
| replaceFields.value | v-model:value的字段 | string | userId | |
| replaceFields.nodeId | 节点的唯一标识，用于回填数据的部门高亮选中 | string | departmentId | |
| replaceFields.unionid | 唯一标识，用于存储左侧筛选的用户数据唯一键 | string | userId | |
| replaceFields.alias | 显示在名称后面 | string | alias | |
| replaceFields.position | 职位 | string | position | |
| replaceFields.avatar | 头像 | string | avatar | |
| replaceFields.roleName | 角色名称 | string | roleName | |
| replaceFields.users | 用户集合 | string | users | |

### 事件

| 事件名称 | 说明         | 回调参数    |
| -------- | ------------ | ----------- |
| cancel | 点击弹框取消之后 | (value: any[]) => void |
| change | v-model：value 改变的时候 | (value: any[]) => void |
| ok | 点击弹框确定之后 | (value: any[]) => void |
