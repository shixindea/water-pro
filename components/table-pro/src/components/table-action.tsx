import { defineComponent, PropType, computed, ExtractPropTypes } from 'vue';
import IconBytedMore from '@fe6/icon-vue/lib/icons/byted-more';

import { default as Divider } from '../../../divider';
import { default as Button } from '../../../button';
import { default as Dropdown } from '../../../dropdown';
import { default as Menu } from '../../../menu';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import PropTypes from '../../../_util/vue-types';
import { getSlot } from '../../../_util/props-util';

import { TableActionType } from '../types/table';
import { ActionItem } from '../types/table-action';
import { useTableContext } from '../hooks/use-table-context';
import { ACTION_COLUMN_FLAG } from '../const';

export const tableActionProps = () => ({
  actions: {
    type: Array as PropType<ActionItem[]>,
    default: null,
  },
  dropDownActions: {
    type: Array as PropType<ActionItem[]>,
    default: null,
  },
  divider: PropTypes.bool.def(true),
  outside: PropTypes.bool,
  trigger: {
    type: Array as PropType<('click' | 'hover' | 'contextmenu')[]>,
    default: () => ['click'],
  },
  prefixCls: String,
});

export type TableActionProps = Partial<ExtractPropTypes<ReturnType<typeof tableActionProps>>>;

export default defineComponent({
  name: 'ATableAction',
  props: tableActionProps(),
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-action', props);
    let table: Partial<TableActionType> = {};
    if (!props.outside) {
      table = useTableContext();
    }

    const getActions = computed(() => {
      return (props.actions || []).map((action) => {
        const { popConfirm } = action;
        return {
          type: 'link',
          ...action,
          ...(popConfirm || {}),
          onConfirm: popConfirm?.confirm,
          onCancel: popConfirm?.cancel,
          enable: !!popConfirm,
        };
      });
    });

    const getDropList = computed(() => {
      return (props.dropDownActions || []).map((action, index) => {
        const { label } = action;
        return {
          ...action,
          text: label,
          divider: index < props.dropDownActions.length - 1 ? props.divider : false,
        };
      });
    });

    const getAlign = computed(() => {
      const columns = (table as TableActionType)?.getColumns?.() || [];
      const actionColumn = columns.find((item) => item.flag === ACTION_COLUMN_FLAG);
      return actionColumn?.align ?? 'left';
    });

    return { prefixClsNew, getActions, getDropList, getAlign };
  },
  render() {
    const defaultSlot = [];

    this.getActions.forEach((action: any, index: number) => {
      const itemNode = <Button {...action}>{action.label}</Button>;
      defaultSlot.push(itemNode);
      if (
        this.divider &&
        index < this.getActions.length - (this.dropDownActions && this.getDropList.length ? 0 : 1)
      ) {
        defaultSlot.push(<Divider type="vertical" />);
      }
    });

    let dropDownNode = null;

    if (this.dropDownActions && this.getDropList.length) {
      let dropdownDefault = null;
      const dropdownMoreNode = getSlot(this, 'more');
      if (dropdownMoreNode.length) {
        dropdownDefault = dropdownMoreNode;
      } else {
        dropdownDefault = (
          <Button type="link" size="small">
            <IconBytedMore class="icon-more" colors={['#1890ff']} />
          </Button>
        );
      }

      const overlayInnerNode = [];

      this.getDropList.forEach((dropItem: any) => {
        overlayInnerNode.push(
          <Menu.Item>
            <a href="javascript:;" onClick={dropItem.onClick}>
              {dropItem.label}
            </a>
          </Menu.Item>,
        );
      });

      const overlayNode = <Menu>{overlayInnerNode}</Menu>;

      const dropdownSlots = {
        default: () => dropdownDefault,
        overlay: () => overlayNode,
      };

      dropDownNode = <Dropdown trigger={this.trigger} v-slots={dropdownSlots} />;
    }

    return (
      <div class={[this.prefixClsNew, this.getAlign]}>
        {defaultSlot}
        {dropDownNode}
      </div>
    );
  },
});
