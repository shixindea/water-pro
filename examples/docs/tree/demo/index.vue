<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import CustomizedIcon from './customized-icon.vue';
import CustomizedIconString from './customized-icon.md?raw';
import CustomizedIconCodeString from './customized-icon.vue?raw';
import Draggable from './draggable.vue';
import DraggableString from './draggable.md?raw';
import DraggableCodeString from './draggable.vue?raw';
import Dynamic from './dynamic.vue';
import DynamicString from './dynamic.md?raw';
import DynamicCodeString from './dynamic.vue?raw';
import Line from './line.vue';
import LineString from './line.md?raw';
import LineCodeString from './line.vue?raw';
import Search from './search.vue';
import SearchString from './search.md?raw';
import SearchCodeString from './search.vue?raw';
import Directory from './directory.vue';
import DirectoryString from './directory.md?raw';
import DirectoryCodeString from './directory.vue?raw';
import ReplaceFields from './replace-fields.vue';
import ReplaceFieldsString from './replace-fields.md?raw';
import ReplaceFieldsCodeString from './replace-fields.vue?raw';
import SwitcherIcon from './switcher-icon.vue';
import SwitcherIconString from './switcher-icon.md?raw';
import SwitcherIconCodeString from './switcher-icon.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 树形控件
  ## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用\`树控件\`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

        ## 代码演示`,
  us: `# Tree
  ## When To Use

Almost anything can be represented in a tree structure.
Examples include directories, organization hierarchies, biological classifications, countries, etc. The \`Tree\` component is a way of representing the hierarchical relationship between these things. You can also  expand, collapse, and select a treeNode within a \`Tree\`.
## Examples
  `,
};
export default {
  category: 'Components',
  type: 'Data Display',
  title: 'Tree',
  subtitle: '树形控件',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ReplaceFieldsString} code={ReplaceFieldsCodeString}>
            <ReplaceFields />
          </demo-container>
          <demo-container api={CustomizedIconString} code={CustomizedIconCodeString}>
            <CustomizedIcon />
          </demo-container>
          <demo-container api={DraggableString} code={DraggableCodeString}>
            <Draggable />
          </demo-container>
          <demo-container api={DynamicString} code={DynamicCodeString}>
            <Dynamic />
          </demo-container>
          <demo-container api={LineString} code={LineCodeString}>
            <Line />
          </demo-container>
          <demo-container api={SearchString} code={SearchCodeString}>
            <Search />
          </demo-container>
          <demo-container api={DirectoryString} code={DirectoryCodeString}>
            <Directory />
          </demo-container>
          <demo-container api={SwitcherIconString} code={SwitcherIconCodeString}>
            <SwitcherIcon />
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
