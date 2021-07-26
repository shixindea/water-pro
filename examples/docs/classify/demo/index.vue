<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Classify 分类选择器
          只为分类定制。
## 何时使用
- 只为设置分类
          ## 代码演示`,
  us: `# Classify
          TODO
## Examples
          `,
};
export default {
  category: 'Components',
  type: 'Data Entry',
  zhType: '数据录入',
  title: 'Classify',
  subtitle: '分类选择器',
  render() {
    return (
      <div id="components-classify-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
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
#components-classify-demo .ant-classify-picker {
  width: 300px;
}
</style>
