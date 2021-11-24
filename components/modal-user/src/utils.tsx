import { hasOwn } from '@fe6/shared';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons-vue';

import Tree from '../../tree';
import Avatar from '../../avatar/index';
import Typography from '../../typography';
import Space from '../../space';
import Tag from '../../tag';

const defaultFields = {
  children: 'children',
  title: 'name',
  key: 'userid',
  alias: 'alias',
  position: 'position',
  avatar: 'avatar',
  roleName: 'roleName',
  users: 'users',
};
export function convertDataToTree(treeData: any, { replaceFields, prefixClsNew }: any) {
  const fields = { ...defaultFields, ...replaceFields };

  if (!treeData) return [];
  const list = Array.isArray(treeData) ? treeData : [treeData];

  const reseult = [];

  const rendetUser = (userItem: any) => {
    let titleNode = null;
    if (userItem[fields.title]) {
      if (userItem[fields.alias]) {
        titleNode = (
          <Typography.Text>{`${userItem[fields.title]}(${
            userItem[fields.alias]
          })`}</Typography.Text>
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

  const renderInner = (item: any) => {
    const childNode = [];
    if (hasOwn(item, fields.users) && item[fields.users].length) {
      const userChildNodes = [];
      item[fields.users].forEach((userItem: any) => {
        userChildNodes.push(
          <Tree.TreeNode
            selectable={false}
            v-slots={{
              title: rendetUser(userItem),
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
        childNode.push(
          <Tree.TreeNode selectable={false} title={childItem[fields.title]}>
            {innerNode}
          </Tree.TreeNode>,
        );
      });
    }

    return childNode;
  };

  list.forEach((item: any) => {
    reseult.push(
      <Tree.TreeNode selectable={false} title={item[fields.title]}>
        {renderInner(item)}
      </Tree.TreeNode>,
    );
  });

  return reseult;
}
