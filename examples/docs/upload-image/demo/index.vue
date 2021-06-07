<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Headers from './headers.vue';
import HeadersString from './headers.md?raw';
import HeadersCodeString from './headers.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 上传图片
  上传组件的封装。
  ## 何时使用
  - 只需要显示图片
  - 单文件上传
        ## 代码演示`,
  us: `# UploadName
  TODO


## When To Use

  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '上传名字',
  type: 'Data Entry',
  title: 'UploadName',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={HeadersString} code={HeadersCodeString}>
            <Headers />
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
