---
category: Components
cols: 1
type: Data Display
title: TablePro
cover: https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg
---

The ordinary form can only be written a little, and the enhanced form can be matched with it

## When to use

- When you want to be lazy
- When accelerating iterative projects

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| clickToRowSelect | Click selected | boolean | - |  |
| isTreeTable | Tree table | boolean | - |  |
| showIndexColumn | Show index column | boolean | - |  |
| inset | Cancel `padding` | boolean | - |  |
| autoCreateKey | Auto create row key | boolean | - |  |
| showTableSetting | Show table setting | boolean | - |  |
| showSummary | Show summary | boolean | - |  |
| immediate | Immediate | boolean | true |  |
| useSearchForm | Show search form | boolean | true |  |
| ellipsis | Ellipsis `...` | boolean | - |  |
| draggable | Drag | boolean | - | 3.17.0 |
| canResize | Auto resize | boolean | - |  |
| bordered | Border | boolean | - |  |
| pagination | Pagination config | [`PaginationProps`](./src/types/pagination.ts#15) \| boolean | - |  |
| clearSelectOnPageChange | option in page empty | boolean | - |  |
| loading | 是否加载 | boolean | - |  |
| emptyDataIsShowTable | Empty data is show table | boolean | true |  |
| resizeHeightOffset | Resize height offset | number | - |  |
| maxHeight | Max height | number | - |  |
| rowKey | Table key | `string` | `((record: Recordable) => string)` | - |  |
| titleHelpMessage | Table title tooltip | string \| `string[]` | - |  |
| title | Table title | string | - |  |
| size | Table size | [SizeType](./src/types/table.ts#L94) | default |  |
| tableSetting | Setting config | [TableSetting](./src/types/table.ts#L143) | - | - |
| sortFn | Sort function | Function | - |  |
| filterFn | Filter function | Function | - |  |
| summaryFunc | Summary function | Function | - |  |
| beforeFetch | Before fetch | Function | - |  |
| afterFetch | After fetch | Function | - |  |
| handleSearchInfoFn | Before search | Function | - |  |
| totalRender | Total render | `(total: number, range: [number, number]) => any` | - |  |
| fetchSetting | Fetch config | [FetchSetting](./src/types/table.ts#L132) | - |  |
| api | Ajax method | `(...arg: any) => void` | - |  |
| summaryData | Summary content | object[] | - |  |
| dataSource | Table data | object[] | - |  |
| searchInfo | Ajax options | object | - |  |
| scroll | Scroll config | `{ x?: number | true; y?: number }` | - |  |
| formConfig | Search form config | [`Partial<FormProProps>`](../form-pro/src/props.ts) | - |  |
| columns | Columns config | [BasicColumn](./src/types/table.ts#414) | - |  |
| indexColumnProps | Index config | [BasicColumn](./src/types/table.ts#414) | - |  |
| actionColumn | Action config | [BasicColumn](./src/types/table.ts#414) | - |  |
| rowClassName | Row's' class name | `(record: TableCustomRecord<T>) => string` | - |  |
| rowSelection | Row's selection config | [TableRowSelection](./src/types/table.ts#21) | - |  |
| emptyPlaceholderClassName | Empty data class name | () => string | () => '' | 3.39.0 |

> More [TableProProps](./src/types/table.ts#414)

### Events

| Events Name | Description | Arguments |
| --- | --- | --- | --- | --- |
| register | UseTable register callback | Function([formActionType](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29)) |  |
| fetch-success | Api success callback | Function({ items: result Data, total: total, params: arguments }) |  |
| fetch-error | Api error callback | Function(error: any) |  |
| fetch-finally | Api all callback | Function() |  |
| selection-change | RowSelection's change callback | `Function(keys： string[] | number[]，rows: any[])` |  |
| row-click | row-click callback | `Function(record: Recordable<any>, index: number, e: Event)` |  |
| row-dbClick | row-dbClick callback | `Function(record: Recordable<any>, index: number, e: Event)` |  |
| row-contextmenu | row-contextmenu callback | `Function(record: Recordable<any>, index: number, e: Event)` |  |
| row-mouseenter | row-mouseenter callback | `Function(record: Recordable<any>, index: number, e: Event)` |  |
| row-mouseleave | row-mouseleave callback | `Function(record: Recordable<any>, index: number, e: Event)` |  |

### useTable methods ( TableActionType )

> More [TableProProps](./src/types/table.ts#102)

| Events Name | Description | Arguments |
| --- | --- | --- |
| reload | Reload table | Function(opt?: [FetchParams](./src/types/table.ts#79)) |
| getSelectRows | Get select rows | - |
| clearSelectedRowKeys | Clear selected row | - |
| getSelectRowKeys | Get select row keys Key | - |
| deleteSelectRowByKey | Delete select row by key | Function(keys: string[]) |
| setPagination | Set pagination | - |
| setTableData | Set data | - |
| getColumns | Get table columns | - |
| setColumns | Set table columns | - |
| getDataSource | Get data | - |
| setLoading | Set loading status | - |
| getLoading | Get loading status | - |
| setProps | Set table props | - |
| setSelectedRowKeys | Set seleected row keys | Function(keys: string[]) |
| getPaginationRef | Get pagination | - |
| getSize | Get size | - |

### a-table-image API

| Property | Description | Type     | Default | Version |
| -------- | ----------- | -------- | ------- | ------- |
| imgList  | Image data  | string[] | -       |         |

### a-table-card API

| Property       | Description             | Type           | Default | Version |
| -------------- | ----------------------- | -------------- | ------- | ------- |
| imgSize        | Image size              | number         | 80      | 3.33.0  |
| imgUrl         | Image url               | string         | ''      | 3.33.0  |
| imgBorderd     | Image border            | boolean        | true    | 3.33.0  |
| imgPreview     | Image preview           | boolean        | false   | 3.33.0  |
| imgErrorImage  | Image error placeholder | string         | -       | 3.33.0  |
| title          | Title                   | string         | -       | 3.33.0  |
| titleMaxLength | Title max length        | number         | 14      | 3.33.0  |
| desc           | Description             | string         | -       | 3.33.0  |
| descMaxLength  | Description max length  | number         | 14      | 3.34.0  |
| cardable       | Card mode               | boolean        | false   | 3.35.0  |
| cardTitle      | Card title              | string \| slot | -       | 3.35.0  |

### a-table-card slots

| Name        | Description  | Arguments | Default | Version |
| ----------- | ------------ | --------- | ------- | ------- |
| titleSuffix | title suffix |           | -       | 3.33.0  |
