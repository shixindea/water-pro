## API

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value(v-model) | 选中的值 | string[] \| number[] | - | |
| maxTagTextLength | 文字的长度，中文算2个长度，英文算一个长度 | number | 4 | |
| maxTagCount | 标签的个数，为 0 的时候显示所有 | number | 4 | |
| closable | 是否显示关闭按钮 | boolean | true | |
| createable | 不设置 `type` 的时候，是否显示创建按钮 | boolean | false | |
| nameLabel | 显示标签名字的字段 | string | name | |
| valueLabel | 提交数据的字段 | string | name | |
| childrenLabel | 分组子集的字段名字 | string | children |  |
| api | 请求弹框可选项的接口 | Function | - | |
| modalTitle | 弹框标题 | string | 选择标签 | |
| createPlaceholder | 创建按钮的文案 | string | 添加标签 | |
| type | 控件类型，可选 `select` | string | - | |
| size | `type="select"` 的时候控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |  |
| placeholder | `type="select"` 的时候没有值的时候显示的内容 | string | - | |

### 事件

| 事件名称 | 说明         | 回调参数    |
| -------- | ------------ | ----------- |
| close-click | 关闭时的回调 | (e) => void |
| create-click | 点击添加触发 | (e) => void |
| change | 弹框点击确定触发，返回输入内容， eventType 为 ok | (inputValue, eventType) => void |
| change | 弹框点击取消触发或者点击右上角关闭触发，返回输入内容， eventType 为 cancel | (inputValue, eventType) => void |
| change | 输入框回车触发，返回输入内容， eventType 为 close | (inputValue, eventType) => void |
| change | 点击关闭按钮触发，返回当前关闭的值， eventType 为 remove | (name, eventType) => void |