<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Search from './search.vue';
import SearchString from './search.md?raw';
import SearchCodeString from './search.vue?raw';
import Advanced from './advanced.vue';
import AdvancedString from './advanced.md?raw';
import AdvancedCodeString from './advanced.vue?raw';
import CustomItem from './custom-item.vue';
import CustomItemString from './custom-item.md?raw';
import CustomItemCodeString from './custom-item.vue?raw';
import TableTransfer from './table-transfer.vue';
import TableTransferString from './table-transfer.md?raw';
import TableTransferCodeString from './table-transfer.vue?raw';
import TreeTransfer from './tree-transfer.vue';
import TreeTransferString from './tree-transfer.md?raw';
import TreeTransferCodeString from './tree-transfer.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 穿梭框
  双栏穿梭选择框。
  ## 何时使用

- 需要在多个可选项中进行多选时。
- 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。

选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。
其中，左边一栏为 \`source\`，右边一栏为 \`target\`，API 的设计也反映了这两个概念。
        ## 代码演示`,
  us: `# Transfer
  Double column transfer choice box.

## When To Use

- It is a select control essentially which can be use for selecting multiple items.
- Transfer can display more information for items and take up more space.

Transfer the elements between two columns in an intuitive and efficient way.

One or more elements can be selected from either column, one click on the proper \`direction\` button, and the transfer is done. The left column is considered the \`source\` and the right column is considered the \`target\`. As you can see in the API description, these names are reflected in.

  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '穿梭框',
  type: 'Data Entry',
  title: 'Transfer',
  cols: '1',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SearchString} code={SearchCodeString}>
            <Search />
          </demo-container>
          <demo-container api={AdvancedString} code={AdvancedCodeString}>
            <Advanced />
          </demo-container>
          <demo-container api={CustomItemString} code={CustomItemCodeString}>
            <CustomItem />
          </demo-container>
          <demo-container api={TableTransferString} code={TableTransferCodeString}>
            <TableTransfer />
          </demo-container>
          <demo-container api={TreeTransferString} code={TreeTransferCodeString}>
            <TreeTransfer />
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
