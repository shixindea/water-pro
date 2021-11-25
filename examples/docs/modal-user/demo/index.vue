<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Field from './field.vue';
import FieldString from './field.md?raw';
import FieldCodeString from './field.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 用户弹框
           弹框里可以展示更多用户信息，如姓名，别名，部门，角色，职位等
         ## 何时使用
         表格筛选用户，提交数据需要选择用户的时候
         ## 注意
         - 数据中用户数据重复被选中的时候都选中
         ## 代码演示
        `,
  us: `# ModalUser
         TODO
         ## Examples
        `,
};

export default {
  title: 'ModalUser',
  category: 'Components',
  subtitle: '用户弹框',
  type: 'Data Entry',
  title: 'Input',
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
