## API

### Props
 
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value(v-model) | 选中的值 | string[] \| number[] | - | |
| replaceFields | 替换 treeNode 中 各种字段为 options 中对应的字段。{children: '子级',title: '属性显示的文字',value: 'v-model:value的字段',unionid: 'userid',alias: 'alias',position: 'position',avatar: 'avatar',roleName: 'roleName',users: 'users'} | object | {children: 'children',title: 'name',key: 'userid',departmentId: 'wxDepartmentId',value: 'userid',unionid: '唯一标识，用于存储左侧筛选的用户数据唯一键',alias: '显示在名称后面',position: '部门',avatar: '头像',roleName: '角色名称',users: '用户数据读取字段'} | object | {children: 'children',title: 'name',value: 'userid',unionid: 'userid',alias: 'alias',position: 'position',avatar: 'avatar',roleName: 'roleName',users: 'users'} | |
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

### 事件

| 事件名称 | 说明         | 回调参数    |
| -------- | ------------ | ----------- |
| cancel | 点击弹框取消之后 | (value: any[]) => void |
| change | v-model：value 改变的时候 | (value: any[]) => void |
| ok | 点击弹框确定之后 | (value: any[]) => void |
