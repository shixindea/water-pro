import type { VueNode } from '../../_util/type';
import type { ModalUserFieldNames } from '../interface';

import Image from '../../image';
import Typography from '../../typography';
import Space from '../../space';
import Tag from '../../tag';

export const defaultFields = {
  disabled: 'disabled',
  key: 'key',
  children: 'children',
  title: 'name',
  value: 'userId', // 提交后端的数据
  alias: 'alias',
  position: 'position',
  avatar: 'avatar',
  roleName: 'roleName',
  type: 'type', // 分类，是 节点 or 值
};

export function fillModalUserFieldNames(fieldNames?: ModalUserFieldNames) {
  const { key, disabled, value, children, title, avatar, position, alias, roleName, type } =
    fieldNames || {};

  return {
    disabled: disabled || 'disabled',
    key: key || 'key',
    value: value || 'value',
    title: title || 'userId',
    children: children || 'children',
    alias: alias || 'alias',
    position: position || 'position',
    avatar: avatar || 'avatar',
    roleName: roleName || 'roleName',
    type: type || 'type',
  };
}

// 通过挂载 userId 识别折叠节点，进行半选高亮的判断
// 节点挂载 value 是为了选择节点的时候全选或者反选子级所有用户
export const rendetUser = (
  showAlias: boolean,
  showRoleName: boolean,
  showAvatar: boolean,
  prefixClsNew: string,
  fields: any,
  userItem: any,
  beforeNode?: () => VueNode,
  afterNode?: () => VueNode,
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
        resetable
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
  if (userItem[fields.roleName] && showRoleName) {
    roleNode = <Tag color="blue">{userItem[fields.roleName]}</Tag>;
  }

  return (
    <Space class={`${prefixClsNew}-user`} onClick={clickPanel}>
      {beforeNode && typeof beforeNode === 'function' && beforeNode()}
      {showAvatar && (
        <Image
          class={`${prefixClsNew}-user-avatar`}
          width={35}
          height={35}
          src={userItem[fields.avatar]}
        />
      )}
      <Space direction="vertical" size={[0, 0]} class={`${prefixClsNew}-user-core`}>
        {titleNode}
        {positionNode}
        {roleNode}
      </Space>
      {afterNode && typeof afterNode === 'function' && afterNode()}
    </Space>
  );
};
