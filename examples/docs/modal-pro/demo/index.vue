<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Empty from './empty.vue';
import EmptyString from './empty.md?raw';
import EmptyCodeString from './empty.vue?raw';
import Size from './size.vue';
import SizeString from './basic.md?raw';
import SizeCodeString from './basic.vue?raw';
import Loading from './loading.vue';
import LoadingString from './loading.md?raw';
import LoadingCodeString from './loading.vue?raw';
import Tip from './tip.vue';
import TipString from './tip.md?raw';
import TipCodeString from './tip.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# ModalPro 对话框升级版
          通过 useModal 更快捷的使用。自带拖拽功能，更好用。
## 何时使用
所有弹框，建议全用这种。
          ## 代码演示`,
  us: `# Modal Pro
         TODD
## Examples
`,
};
export default {
  type: 'Feedback',
  category: 'Components',
  subtitle: '对话框升级版',
  title: 'ModalPro',
  render() {
    return (
      <div id="components-modal-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={EmptyString} code={EmptyCodeString}>
            <Empty />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={LoadingString} code={LoadingCodeString}>
            <Loading />
          </demo-container>
          <demo-container api={TipString} code={TipCodeString}>
            <Tip />
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
#components-modal-demo .ant-btn {
  margin-right: 8px;
}
</style>
