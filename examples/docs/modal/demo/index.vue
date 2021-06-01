<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Async from './async.vue';
import AsyncString from './async.md?raw';
import AsyncCodeString from './async.vue?raw';
import ConfirmPromise from './confirm-promise.vue';
import ConfirmPromiseString from './confirm-promise.md?raw';
import ConfirmPromiseCodeString from './confirm-promise.vue?raw';
import Confirm from './confirm.vue';
import ConfirmString from './confirm.md?raw';
import ConfirmCodeString from './confirm.vue?raw';
import Footer from './footer.vue';
import FooterString from './footer.md?raw';
import FooterCodeString from './footer.vue?raw';
import Info from './info.vue';
import InfoString from './info.md?raw';
import InfoCodeString from './info.vue?raw';
import Locale from './locale.vue';
import LocaleString from './locale.md?raw';
import LocaleCodeString from './locale.vue?raw';
import Manual from './manual.vue';
import ManualString from './manual.md?raw';
import ManualCodeString from './manual.vue?raw';
import Position from './position.vue';
import PositionString from './position.md?raw';
import PositionCodeString from './position.vue?raw';
import ButtonProps from './button-props.vue';
import ButtonPropsString from './button-props.md?raw';
import ButtonPropsCodeString from './button-props.vue?raw';
import ConfirmRouter from './confirm-router.vue';
import ConfirmRouterString from './confirm-router.md?raw';
import ConfirmRouterCodeString from './confirm-router.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Modal 对话框
          模态对话框。
## 何时使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 \`Modal\` 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时，可以使用 \`Modal.confirm()\` 等语法糖方法。
          ## 代码演示`,
  us: `# Modal
          Modal dialogs.
## When To Use
When requiring users to interact with the application, but without jumping to a new page and interrupting
the user's workflow, you can use \`Modal\` to create a new floating layer over the current page to get user
feedback or display information.
Additionally, if you need show a simple confirmation dialog, you can use \`antd.Modal.confirm()\`,
and so on.
## Examples
`,
};
export default {
  type: 'Feedback',
  category: 'Components',
  subtitle: '对话框',
  title: 'Modal',
  render() {
    return (
      <div id="components-modal-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={AsyncString} code={AsyncCodeString}>
            <Async />
          </demo-container>
          <demo-container api={ConfirmPromiseString} code={ConfirmPromiseCodeString}>
            <ConfirmPromise />
          </demo-container>
          <demo-container api={ConfirmString} code={ConfirmCodeString}>
            <Confirm />
          </demo-container>
          <demo-container api={FooterString} code={FooterCodeString}>
            <Footer />
          </demo-container>
          <demo-container api={InfoString} code={InfoCodeString}>
            <Info />
          </demo-container>
          <demo-container api={LocaleString} code={LocaleCodeString}>
            <Locale />
          </demo-container>
          <demo-container api={ManualString} code={ManualCodeString}>
            <Manual />
          </demo-container>
          <demo-container api={PositionString} code={PositionCodeString}>
            <Position />
          </demo-container>
          <demo-container api={ButtonPropsString} code={ButtonPropsCodeString}>
            <ButtonProps />
          </demo-container>
          <demo-container api={ConfirmRouterString} code={ConfirmRouterCodeString}>
            <ConfirmRouter />
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
