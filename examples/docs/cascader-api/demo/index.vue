<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# CascaderAPI API 级联选择
          配置个 api 直接自动获取选项。
## 何时使用
- 选项通过后台获取
          ## 代码演示`,
  us: `# CascaderAPI
          TODO
## Examples
          `,
};
export default {
  category: 'Components',
  type: 'Data Entry',
  zhType: '数据录入',
  title: 'CascaderApi',
  subtitle: 'API 级联选择',
  render() {
    return (
      <div id="components-cascader-demo">
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
#components-cascader-demo .ant-cascader-picker {
  width: 300px;
}
</style>
