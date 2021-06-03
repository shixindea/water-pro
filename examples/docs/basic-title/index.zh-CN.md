## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 vue-router 配置使用， 也可使用 slot="itemRender" 和 slot-scope="props" | ({route, params, routes, paths, h}) => vNode |  | - |
| params | 路由的参数 | object |  | - |
| routes | router 的路由栈信息 | [routes\[\]](#routes) |  | - |
| separator | 分隔符自定义 | string\|slot |  | '/' |
