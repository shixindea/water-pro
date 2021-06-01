<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Checkable from './checkable.vue';
import CheckableString from './checkable.md?raw';
import CheckableCodeString from './checkable.vue?raw';
import Colorful from './colorful.vue';
import ColorfulString from './colorful.md?raw';
import ColorfulCodeString from './colorful.vue?raw';
import Control from './control.vue';
import ControlString from './control.md?raw';
import ControlCodeString from './control.vue?raw';
import HotTags from './hot-tags.vue';
import HotTagsString from './hot-tags.md?raw';
import HotTagsCodeString from './hot-tags.vue?raw';
import Controlled from './controlled.vue';
import ControlledString from './controlled.md?raw';
import ControlledCodeString from './controlled.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 标签 Tag

    进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

    ## 代码演示`,
  us: `# Tag

    Tag for categorizing or markup.

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.
    ## Examples `,
};
export default {
  category: 'Components',
  subtitle: '标签',
  type: 'Data Display',
  title: 'Tag',
  render() {
    return (
      <div id="components-tag-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={CheckableString} code={CheckableCodeString}>
            <Checkable />
          </demo-container>
          <demo-container api={ColorfulString} code={ColorfulCodeString}>
            <Colorful />
          </demo-container>
          <demo-container api={ControlString} code={ControlCodeString}>
            <Control />
          </demo-container>
          <demo-container api={HotTagsString} code={HotTagsCodeString}>
            <HotTags />
          </demo-container>
          <demo-container api={ControlledString} code={ControlledCodeString}>
            <Controlled />
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
<style>
#components-tag-demo .ant-tag {
  margin-bottom: 8px;
}
</style>
