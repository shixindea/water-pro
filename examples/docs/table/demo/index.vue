<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Ajax from './ajax.vue';
import AjaxString from './ajax.md?raw';
import AjaxCodeString from './ajax.vue?raw';
import Bordered from './bordered.vue';
import BorderedString from './bordered.md?raw';
import BorderedCodeString from './bordered.vue?raw';
import ColspanRowspan from './colspan-rowspan.vue';
import ColspanRowspanString from './colspan-rowspan.md?raw';
import ColspanRowspanCodeString from './colspan-rowspan.vue?raw';
import CustomFilterPanel from './custom-filter-panel.vue';
import CustomFilterPanelString from './custom-filter-panel.md?raw';
import CustomFilterPanelCodeString from './custom-filter-panel.vue?raw';
import EditCell from './edit-cell.vue';
import EditCellString from './edit-cell.md?raw';
import EditCellCodeString from './edit-cell.vue?raw';
import EditRow from './edit-row.vue';
import EditRowString from './edit-row.md?raw';
import EditRowCodeString from './edit-row.vue?raw';
import ExpandChildren from './expand-children.vue';
import ExpandChildrenString from './expand-children.md?raw';
import ExpandChildrenCodeString from './expand-children.vue?raw';
import Expand from './expand.vue';
import ExpandString from './expand.md?raw';
import ExpandCodeString from './expand.vue?raw';
import FixedColumnsHeader from './fixed-columns-header.vue';
import FixedColumnsHeaderString from './fixed-columns-header.md?raw';
import FixedColumnsHeaderCodeString from './fixed-columns-header.vue?raw';
import FixedColumns from './fixed-columns.vue';
import FixedColumnsString from './fixed-columns.md?raw';
import FixedColumnsCodeString from './fixed-columns.vue?raw';
import FixedHeader from './fixed-header.vue';
import FixedHeaderString from './fixed-header.md?raw';
import FixedHeaderCodeString from './fixed-header.vue?raw';
import GroupingColumns from './grouping-columns.vue';
import GroupingColumnsString from './grouping-columns.md?raw';
import GroupingColumnsCodeString from './grouping-columns.vue?raw';
import Head from './head.vue';
import HeadString from './head.md?raw';
import HeadCodeString from './head.vue?raw';
import NestedTable from './nested-table.vue';
import NestedTableString from './nested-table.md?raw';
import NestedTableCodeString from './nested-table.vue?raw';
import ResetFilter from './reset-filter.vue';
import ResetFilterString from './reset-filter.md?raw';
import ResetFilterCodeString from './reset-filter.vue?raw';
import RowSelectionAndOperation from './row-selection-and-operation.vue';
import RowSelectionAndOperationString from './row-selection-and-operation.md?raw';
import RowSelectionAndOperationCodeString from './row-selection-and-operation.vue?raw';
import RowSelectionCustom from './row-selection-custom.vue';
import RowSelectionCustomString from './row-selection-custom.md?raw';
import RowSelectionCustomCodeString from './row-selection-custom.vue?raw';
import RowSelection from './row-selection.vue';
import RowSelectionString from './row-selection.md?raw';
import RowSelectionCodeString from './row-selection.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Template from './template.vue';
import TemplateString from './template.md?raw';
import TemplateCodeString from './template.vue?raw';
import Ellipsis from './ellipsis.vue';
import EllipsisString from './ellipsis.md?raw';
import EllipsisCodeString from './ellipsis.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Table 表格

    展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

指定表格的数据源 \`dataSource\` 为一个数组。
    ## 代码演示`,
  us: `# Table

    A table displays rows of data.

## When To Use

- To display a collection of structured data.
- To sort, search, paginate, filter data.

## How To Use

Specify \`dataSource\` of Table as an array of data.
## Examples
`,
};
export default {
  category: 'Components',
  cols: 1,
  type: 'Data Display',
  title: 'Table',
  subtitle: '表格',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={EllipsisString} code={EllipsisCodeString}>
            <Ellipsis />
          </demo-container>
          <demo-container api={AjaxString} code={AjaxCodeString}>
            <Ajax />
          </demo-container>
          <demo-container api={BorderedString} code={BorderedCodeString}>
            <Bordered />
          </demo-container>
          <demo-container api={ColspanRowspanString} code={ColspanRowspanCodeString}>
            <ColspanRowspan />
          </demo-container>
          <demo-container api={CustomFilterPanelString} code={CustomFilterPanelCodeString}>
            <CustomFilterPanel />
          </demo-container>
          <demo-container api={EditCellString} code={EditCellCodeString}>
            <EditCell />
          </demo-container>
          <demo-container api={EditRowString} code={EditRowCodeString}>
            <EditRow />
          </demo-container>
          <demo-container api={ExpandChildrenString} code={ExpandChildrenCodeString}>
            <ExpandChildren />
          </demo-container>
          <demo-container api={ExpandString} code={ExpandCodeString}>
            <Expand />
          </demo-container>
          <demo-container api={FixedColumnsHeaderString} code={FixedColumnsHeaderCodeString}>
            <FixedColumnsHeader />
          </demo-container>
          <demo-container api={FixedColumnsString} code={FixedColumnsCodeString}>
            <FixedColumns />
          </demo-container>
          <demo-container api={FixedHeaderString} code={FixedHeaderCodeString}>
            <FixedHeader />
          </demo-container>
          <demo-container api={GroupingColumnsString} code={GroupingColumnsCodeString}>
            <GroupingColumns />
          </demo-container>
          <demo-container api={HeadString} code={HeadCodeString}>
            <Head />
          </demo-container>
          <demo-container api={NestedTableString} code={NestedTableCodeString}>
            <NestedTable />
          </demo-container>
          <demo-container api={ResetFilterString} code={ResetFilterCodeString}>
            <ResetFilter />
          </demo-container>
          <demo-container api={RowSelectionAndOperationString} code={RowSelectionAndOperationCodeString}>
            <RowSelectionAndOperation />
          </demo-container>
          <demo-container api={RowSelectionCustomString} code={RowSelectionCustomCodeString}>
            <RowSelectionCustom />
          </demo-container>
          <demo-container api={RowSelectionString} code={RowSelectionCodeString}>
            <RowSelection />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={TemplateString} code={TemplateCodeString}>
            <Template />
          </demo-container>
        </demo-sort>
        <api>
          <CN />
        </api>
      </div>
    );
  },
};
</script>
