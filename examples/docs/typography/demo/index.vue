<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Edit from './edit.vue';
import EditString from './edit.md?raw';
import EditCodeString from './edit.vue?raw';
import Ellipsis from './ellipsis.vue';
import EllipsisString from './ellipsis.md?raw';
import EllipsisCodeString from './ellipsis.vue?raw';
import Other from './other.vue';
import OtherString from './other.md?raw';
import OtherCodeString from './other.vue?raw';
import Suffix from './suffix.vue';
import SuffixString from './suffix.md?raw';
import SuffixCodeString from './suffix.vue?raw';
import Title from './title.vue';
import TitleString from './title.md?raw';
import TitleCodeString from './title.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 排版
  上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
  ## 何时使用
  - 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。
        ## 代码演示`,
  us: `# Upload
  Upload file by selecting or dragging.


## Typography

  TODO

  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '排版',
  type: 'General',
  title: 'Typography',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={EditString} code={EditCodeString}>
            <Edit />
          </demo-container>
          <demo-container api={EllipsisString} code={EllipsisCodeString}>
            <Ellipsis />
          </demo-container>
          <demo-container api={OtherString} code={OtherCodeString}>
            <Other />
          </demo-container>
          <demo-container api={SuffixString} code={SuffixCodeString}>
            <Suffix />
          </demo-container>
          <demo-container api={TitleString} code={TitleCodeString}>
            <Title />
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
