<cn>
#### 树形数据展示
表格支持树形数据的展示，当数据中有 `children` 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 `childrenColumnName` 进行配置。
可以通过设置 `indentSize` 以控制每一层的缩进宽度。
> 注：暂不支持父子数据递归关联选择。
</cn>

<us>
#### Tree data
Display tree structure data in Table when there is field key `children` in dataSource, try to customize `childrenColumnName` property to avoid tree table structure.
You can control the indent width by setting `indentSize`.
> Note, no support for recursive selection of tree structure data table yet.
</us>
