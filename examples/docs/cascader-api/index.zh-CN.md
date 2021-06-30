## API

> 暂时不支持 render 方法的定制。更多参数参考 [cascader](./cascader-cn)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| api | 接口请求 promise 配置 | `(...arg: any) => Promise<any>` | - |  |
| loopGetOptions | 是否循环请求 api ，获取下拉选项 | boolean | false | 
| value(v-model) | 指定当前选中的条目 | string\|string\[]\|number\|number\[] | - |
