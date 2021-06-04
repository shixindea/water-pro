<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Span from './span.vue';
import SpanString from './span.md?raw';
import SpanCodeString from './span.vue?raw';
import Tip from './tip.vue';
import TipString from './tip.md?raw';
import TipCodeString from './tip.vue?raw';
import Title from './title.vue';
import TitleString from './title.md?raw';
import TitleCodeString from './title.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 简单标题
           独有标题的封装
         ## 何时使用
         独立标题的展示
         ## 代码演示
        `,
  us: `# BasicTitle
         TODO
         ## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '独立标题',
  type: 'General',
  title: 'BasicTitle',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SpanString} code={SpanCodeString}>
            <Span />
          </demo-container>
          <demo-container api={TipString} code={TipCodeString}>
            <Tip />
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
