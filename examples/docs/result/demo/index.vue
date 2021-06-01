<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Info from './info.vue';
import InfoString from './info.md?raw';
import InfoCodeString from './info.vue?raw';
import Warning from './warning.vue';
import WarningString from './warning.md?raw';
import WarningCodeString from './warning.vue?raw';
import Result403 from './403.vue';
import Result403String from './403.md?raw';
import Result403CodeString from './403.vue?raw';
import Result404 from './404.vue';
import Result404String from './404.md?raw';
import Result404CodeString from './404.vue?raw';
import Result500 from './500.vue';
import Result500String from './500.md?raw';
import Result500CodeString from './500.vue?raw';
import Error from './error.vue';
import ErrorString from './error.md?raw';
import ErrorCodeString from './error.vue?raw';
import CustomIcon from './customIcon.vue';
import CustomIconString from './customIcon.md?raw';
import CustomIconCodeString from './customIcon.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Result 结果

  用于反馈一系列操作任务的处理结果。

  ## 何时使用

  当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。
  ## 代码演示`,
  us: `# Result

  Used to feed back the results of a series of operational tasks.

  # When To Use

  Use when important operations need to inform the user to process the results and the feedback is more complicated.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '结果',
  type: 'Feedback',
  cols: 1,
  title: 'Result',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={InfoString} code={InfoCodeString}>
            <Info />
          </demo-container>
          <demo-container api={WarningString} code={WarningCodeString}>
            <Warning />
          </demo-container>
          <demo-container api={Result403String} code={Result403CodeString}>
            <Result403 />
          </demo-container>
          <demo-container api={Result404String} code={Result404CodeString}>
            <Result404 />
          </demo-container>
          <demo-container api={Result500String} code={Result500CodeString}>
            <Result500 />
          </demo-container>
          <demo-container api={ErrorString} code={ErrorCodeString}>
            <Error />
          </demo-container>
          <demo-container api={CustomIconString} code={CustomIconCodeString}>
            <CustomIcon />
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
