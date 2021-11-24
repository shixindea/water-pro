import { hasOwn } from '@fe6/shared';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons-vue';

import Tree from '../../tree';
import Avatar from '../../avatar/index';
import Typography from '../../typography';
import Space from '../../space';
import Tag from '../../tag';

export const defaultFields = {
  children: 'children',
  title: 'name',
  key: 'userid',
  departmentId: 'wxDepartmentId', // 部门的id，可用做筛选部门
  value: 'userid', // 提交后端的数据
  unionid: 'userid', // 唯一标识，用于存储左侧筛选的用户数据唯一键
  alias: 'alias',
  position: 'position',
  avatar: 'avatar',
  roleName: 'roleName',
  users: 'users',
};

export const rendetUser = (
  prefixClsNew: string,
  fields: any,
  userItem: any,
  beforeNode?: () => any,
) => {
  let titleNode = null;
  if (userItem[fields.title]) {
    if (userItem[fields.alias]) {
      titleNode = (
        <Typography.Text>{`${userItem[fields.title]}(${userItem[fields.alias]})`}</Typography.Text>
      );
    } else {
      titleNode = <Typography.Text>{userItem[fields.title]}</Typography.Text>;
    }
  } else if (userItem[fields.alias]) {
    titleNode = <Typography.Text>{userItem[fields.alias]}</Typography.Text>;
  }

  let positionNode = null;
  if (userItem[fields.position]) {
    positionNode = (
      <Typography.Text type="secondary" size="small">
        {userItem[fields.position]}
      </Typography.Text>
    );
  }

  let roleNode = null;
  if (userItem[fields.roleName]) {
    roleNode = <Tag color="blue">{userItem[fields.roleName]}</Tag>;
  }

  return () => (
    <Space class={`${prefixClsNew}-user`}>
      {beforeNode && typeof beforeNode === 'function' && beforeNode()}
      <Avatar
        shape="square"
        class={`${prefixClsNew}-user-avatar`}
        size={35}
        src={userItem[fields.avatar]}
      />
      <Space direction="vertical" size={0} class={`${prefixClsNew}-user-core`}>
        {titleNode}
        {positionNode}
        {roleNode}
      </Space>
    </Space>
  );
};

export function convertDataToTree(treeData: any, fields: any, prefixClsNew: string) {
  if (!treeData) return [];
  const list = Array.isArray(treeData) ? treeData : [treeData];

  const reseult = [];

  const renderInner = (item: any) => {
    const childNode = [];
    if (hasOwn(item, fields.users) && item[fields.users].length) {
      const userChildNodes = [];
      item[fields.users].forEach((userItem: any) => {
        userChildNodes.push(
          <Tree.TreeNode
            selectable={false}
            key={userItem[fields.value]}
            userId={[userItem[fields.value]]}
            v-slots={{
              title: rendetUser(prefixClsNew, fields, userItem),
            }}
          ></Tree.TreeNode>,
        );
      });
      childNode.push(
        <Tree.TreeNode
          checkStrictly={true}
          selectable={false}
          checkable={false}
          v-slots={{
            title: ({ expanded }: any) => `${expanded ? '折叠' : '展开'}成员`,
            switcherIcon: ({ expanded }: any) => {
              return expanded ? <MinusSquareOutlined /> : <PlusSquareOutlined />;
            },
          }}
        >
          {userChildNodes}
        </Tree.TreeNode>,
      );
    }
    if (hasOwn(item, fields.children) && item[fields.children].length) {
      item[fields.children].forEach((childItem: any) => {
        let innerNode = [];

        if (hasOwn(childItem, fields.children) && childItem[fields.children].length) {
          innerNode = renderInner(childItem);
        }
        const userId = childItem[fields.users].map((uItem: any) => uItem[fields.value]);

        childNode.push(
          <Tree.TreeNode
            selectable={false}
            title={childItem[fields.title]}
            departmentId={childItem[fields.departmentId]}
            userId={userId}
          >
            {innerNode}
          </Tree.TreeNode>,
        );
      });
    }

    return childNode;
  };

  list.forEach((item: any) => {
    const userId = item[fields.users].map((uItem: any) => uItem[fields.value]);
    reseult.push(
      <Tree.TreeNode selectable={false} userId={userId} title={item[fields.title]}>
        {renderInner(item)}
      </Tree.TreeNode>,
    );
  });

  return reseult;
}
