<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import EditorString from './editor.md?raw';
import Editor from './editor.vue';
import EditorCodeString from './editor.vue?raw';
import ListString from './list.md?raw';
import List from './list.vue';
import ListCodeString from './list.vue?raw';
import NestedString from './nested.md?raw';
import Nested from './nested.vue';
import NestedCodeString from './nested.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Comment评论
对网站内容的反馈、评价和讨论。

## 何时使用

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。`,
  us: `# Comment
A comment displays user feedback and discussion to website content.

## When To Use

Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.`,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Comment',
  subtitle: '评论',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ListString} code={ListCodeString}>
            <List />
          </demo-container>
          <demo-container api={NestedString} code={NestedCodeString}>
            <Nested />
          </demo-container>
          <demo-container api={EditorString} code={EditorCodeString}>
            <Editor />
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
