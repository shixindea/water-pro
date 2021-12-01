<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Field from './field.vue';
import FieldString from './field.md?raw';
import FieldCodeString from './field.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Radio from './radio.vue';
import RadioString from './radio.md?raw';
import RadioCodeString from './radio.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 用户弹框
  >3.42.0 新增

           弹框里可以展示更多用户信息，如姓名，别名，部门，角色，职位等。本地搜索更快捷，一键全选更方便。
         ## 何时使用
         表格筛选用户，提交数据需要选择用户的时候
         ## 注意
         - 数据中用户数据重复被选中的时候都选中
         - 用户数据中必须拥有所属节点的id，用作选中节点的判断(fieldNames.nodeId)
         - 配置中的 fieldNames.key 是用作挂载节点 key 的唯一标识
         - 所有涉及到 id 的(部门 id[节点 id] 和 fieldNames.nodeId， fieldNames.key) 都必须是数字
         - 若用户集合中没有 fieldNames.nodeId 字段，那么点击用户折叠节点不会自动选中
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
          <demo-container api={RadioString} code={RadioCodeString}>
            <Radio />
          </demo-container>
          <demo-container api={FieldString} code={FieldCodeString}>
            <Field />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
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
