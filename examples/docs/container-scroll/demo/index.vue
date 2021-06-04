<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 滚动容器
           自定义滚动条的容器
         ## 何时使用
         - 统一不必要重复的样式
         - 多地方使用，统一封装
         ## 代码演示
        `,
  us: `# ContainerScroll
         TODO
         ## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '滚动容器',
  type: 'Layout',
  title: 'ContainerScroll',
  render() {
    return (
      <div>
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
