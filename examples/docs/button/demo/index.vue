<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import ButtonGroupString from './button-group.md?raw';
import ButtonGroup from './button-group.vue';
import ButtonGroupCodeString from './button-group.vue?raw';
import DisabledString from './disabled.md?raw';
import Disabled from './disabled.vue';
import DisabledCodeString from './disabled.vue?raw';
import GhostString from './ghost.md?raw';
import Ghost from './ghost.vue';
import GhostCodeString from './ghost.vue?raw';
import IconString from './icon.md?raw';
import Icon from './icon.vue';
import IconCodeString from './icon.vue?raw';
import LoadingString from './loading.md?raw';
import Loading from './loading.vue';
import LoadingCodeString from './loading.vue?raw';
import MultipleString from './multiple.md?raw';
import Multiple from './multiple.vue';
import MultipleCodeString from './multiple.vue?raw';
import SizeString from './size.md?raw';
import Size from './size.vue';
import SizeCodeString from './size.vue?raw';
import BlockString from './block.md?raw';
import Block from './block.vue';
import BlockCodeString from './block.vue?raw';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
const md = {
  cn: `# Button 按钮
          按钮用于开始一个即时操作。
          ## 何时使用
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
          ## 组件注册
          \`\`\`js
          import { Button } from 'ant-design-vue';
          Vue.use(Button);
          \`\`\`
          ## 代码演示`,
  us: `# Button
          To trigger an operation.
          ## When To Use
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
          ## Component Registration
          \`\`\`js
          import { Button } from 'ant-design-vue';
          Vue.use(Button);
          \`\`\`
          ## Examples
          `,
};
export default {
  category: 'Components',
  type: 'General',
  zhType: '通用',
  title: 'Button',
  subtitle: '按钮',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ButtonGroupString} code={ButtonGroupCodeString}>
            <ButtonGroup />
          </demo-container>
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={GhostString} code={GhostCodeString}>
            <Ghost />
          </demo-container>
          <demo-container api={IconString} code={IconCodeString}>
            <Icon />
          </demo-container>
          <demo-container api={LoadingString} code={LoadingCodeString}>
            <Loading />
          </demo-container>
          <demo-container api={MultipleString} code={MultipleCodeString}>
            <Multiple />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={BlockString} code={BlockCodeString}>
            <Block />
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
[id^='components-button-demo-'] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^='components-button-demo-'] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
