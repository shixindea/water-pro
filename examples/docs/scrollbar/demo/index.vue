<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Modal from './modal.vue';
import ModalString from './modal.md?raw';
import ModalCodeString from './modal.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 自定义滚动条
  在任何时候滚动条样式统一。
  ## 何时使用
  内容很长，并且需要任何时候样式统一。

        ## 代码演示`,
  us: `# Scrollbar
  TODO
  ## When To Use
TODO.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '自定义滚动条',
  type: 'Data Display',
  title: 'Scrollbar',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ModalString} code={ModalCodeString}>
            <Modal />
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
