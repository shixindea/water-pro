<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Checkable from './checkable.vue';
import CheckableString from './checkable.md?raw';
import CheckableCodeString from './checkable.vue?raw';
import Multiple from './multiple.vue';
import MultipleString from './multiple.md?raw';
import MultipleCodeString from './multiple.vue?raw';
import TreeData from './treeData.vue';
import TreeDataString from './treeData.md?raw';
import TreeDataCodeString from './treeData.vue?raw';
import Suffix from './suffix.vue';
import SuffixString from './suffix.md?raw';
import SuffixCodeString from './suffix.vue?raw';
import Async from './async.vue';
import AsyncString from './async.md?raw';
import AsyncCodeString from './async.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 树型选择控件
  ## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

        ## 代码演示`,
  us: `# TreeSelect
  ## When To Use

\`TreeSelect\` is similar to \`Select\`, but the values are provided in a tree like structure.
Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.
## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '树选择',
  type: 'Data Entry',
  title: 'TreeSelect',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={CheckableString} code={CheckableCodeString}>
            <Checkable />
          </demo-container>
          <demo-container api={MultipleString} code={MultipleCodeString}>
            <Multiple />
          </demo-container>
          <demo-container api={TreeDataString} code={TreeDataCodeString}>
            <TreeData />
          </demo-container>
          <demo-container api={SuffixString} code={SuffixCodeString}>
            <Suffix />
          </demo-container>
          <demo-container api={AsyncString} code={AsyncCodeString}>
            <Async />
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
