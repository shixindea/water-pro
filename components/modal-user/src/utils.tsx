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
  key: 'id',
  value: 'userId', // 提交后端的数据
  nodeId: 'departmentId', // 节点的唯一标识，用于回填数据的部门高亮选中
  unionid: 'userId', // 唯一标识，用于存储左侧筛选的用户数据唯一键
  alias: 'alias',
  position: 'position',
  avatar: 'avatar',
  roleName: 'roleName',
  users: 'users',
};

// 通过挂载 userId 识别折叠节点，进行半选高亮的判断
// 节点挂载 value 是为了选择节点的时候全选或者反选子级所有用户
export const rendetUser = (
  showAlias: boolean,
  prefixClsNew: string,
  fields: any,
  userItem: any,
  beforeNode?: () => any,
  afterNode?: () => any,
  clickPanel?: () => any,
) => {
  let titleNode = null;
  if (showAlias) {
    if (userItem[fields.title]) {
      if (userItem[fields.alias]) {
        titleNode = (
          <Typography.Text
            class={`${prefixClsNew}-user-title`}
            ellipsis={
              {
                tooltip: `${userItem[fields.title]}(${userItem[fields.alias]})`,
              } as any
            }
            content={`${userItem[fields.title]}(${userItem[fields.alias]})`}
          ></Typography.Text>
        );
      } else {
        titleNode = (
          <Typography.Text
            class={`${prefixClsNew}-user-title`}
            ellipsis={
              {
                tooltip: userItem[fields.title],
              } as any
            }
            content={userItem[fields.title]}
          ></Typography.Text>
        );
      }
    } else if (userItem[fields.alias]) {
      titleNode = (
        <Typography.Text
          class={`${prefixClsNew}-user-title`}
          ellipsis={
            {
              tooltip: userItem[fields.alias],
            } as any
          }
          content={userItem[fields.alias]}
        ></Typography.Text>
      );
    }
  } else {
    titleNode = (
      <Typography.Text
        class={`${prefixClsNew}-user-title`}
        ellipsis={
          {
            tooltip: `${userItem[fields.title]}`,
          } as any
        }
        content={`${userItem[fields.title]}`}
      ></Typography.Text>
    );
  }

  let positionNode = null;
  if (userItem[fields.position]) {
    positionNode = (
      <Typography.Paragraph
        type="secondary"
        styleReset
        size="small"
        ellipsis={
          {
            tooltip: userItem[fields.position],
          } as any
        }
        content={userItem[fields.position]}
      />
    );
  }

  let roleNode = null;
  if (userItem[fields.roleName]) {
    roleNode = <Tag color="blue">{userItem[fields.roleName]}</Tag>;
  }

  return () => (
    <Space class={`${prefixClsNew}-user`} onClick={clickPanel}>
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
      {afterNode && typeof afterNode === 'function' && afterNode()}
    </Space>
  );
};

// 因为多级嵌套，有可能当前级没有用户，但子级有，所以就得遍历下面所有
const getAllChildUserIdList = (targets: any[], newUserIds: any[], fields: any) => {
  targets.forEach((tItem: any) => {
    if (hasOwn(tItem, fields.users) && tItem[fields.users].length) {
      tItem[fields.users].forEach((uItem: any) => {
        if (!newUserIds.includes(uItem[fields.value])) {
          newUserIds.push(uItem[fields.value]);
        }
      });
    }

    if (hasOwn(tItem, fields.children) && tItem[fields.children].length) {
      getAllChildUserIdList(tItem[fields.children], newUserIds, fields);
    }
  });
  return newUserIds;
};

export function renderTreeNodes(
  showAlias: boolean,
  treeData: any,
  fields: any,
  prefixClsNew: string,
) {
  if (!treeData) {
    return [];
  }
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
            v-slots={{
              title: rendetUser(showAlias, prefixClsNew, fields, userItem),
            }}
          ></Tree.TreeNode>,
        );
      });

      childNode.push(
        <Tree.TreeNode
          selectable={false}
          checkable={false}
          v-slots={{
            title: ({ expanded }: any) => (
              <Typography.Text
                class={`${prefixClsNew}-user-member`}
                type="secondary"
                size="small"
              >{`${expanded ? '折叠' : '展开'}成员`}</Typography.Text>
            ),
            switcherIcon: ({ expanded }: any) => {
              return expanded ? (
                <MinusSquareOutlined class={`${prefixClsNew}-user-icon`} />
              ) : (
                <PlusSquareOutlined class={`${prefixClsNew}-user-icon`} />
              );
            },
          }}
        >
          {userChildNodes}
        </Tree.TreeNode>,
      );
    }
    if (hasOwn(item, fields.children) && item[fields.children].length) {
      item[fields.children].forEach((childItem: any) => {
        let userId = hasOwn(childItem, fields.users) && childItem[fields.users].length ? childItem[fields.users].map((uItem: any) => uItem[fields.value]) : [];

        // NOTE 拉取所有子节点用户，用于节点可选时候的高亮，但由于key匹配问题永远高亮不了，必须  key 设置为 userId （key={userId.join(',')}）
        if (hasOwn(childItem, fields.children) && childItem[fields.children].length) {
          userId = [
            ...new Set(
              [].concat(userId, getAllChildUserIdList(childItem[fields.children], [], fields)),
            ),
          ];
        } else {
          userId = [
            ...new Set(userId),
          ];
        }

        childNode.push(
          <Tree.TreeNode
            key={childItem[fields.key]}
            selectable={false}
            title={`${userId}+${childItem[fields.key]}=${childItem[fields.title]}`}
            userId={userId}
            disabled={userId.length<1}
            value={userId}
          >
            {renderInner(childItem)}
          </Tree.TreeNode>,
        );
      });
    }

    return childNode;
  };

  list.forEach((item: any) => {
    let userId = item[fields.users].map((uItem: any) => uItem[fields.value]);
    // NOTE 拉取所有子节点用户，用于节点可选时候的高亮，但由于key匹配问题永远高亮不了，必须  key 设置为 userId （key={userId.join(',')}）
    userId = [
      ...new Set([].concat(userId, getAllChildUserIdList(item[fields.children], [], fields))),
    ];
    reseult.push(
      <Tree.TreeNode
        selectable={false}
        key={item[fields.key]}
        userId={userId}
        disabled={userId.length<1}
        value={userId}
        title={`${userId}+${item[fields.key]}=${item[fields.title]}`}
      >
        {renderInner(item)}
      </Tree.TreeNode>,
    );
  });

  return reseult;
}
