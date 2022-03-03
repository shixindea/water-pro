import { defineComponent } from 'vue';
import IconBytedRefresh from '@fe6/icon-vue/lib/icons/byted-refresh';

import { useTableContext } from '../../hooks/use-table-context';
import Tooltip from '../../../../tooltip';

export default defineComponent({
  name: 'MarketingoSetting',
  components: {
    Tooltip,
  },

  setup() {
    const table = useTableContext();

    const toRefresh = () => {
      table.reload({
        page: 1,
      });
    };

    return {
      toRefresh,
    };
  },
  render() {
    const titleNode = <span onClick={this.toRefresh}>刷新</span>;
    const tooltipSlots = {
      title: () => titleNode,
      default: () => <IconBytedRefresh size={18} onClick={this.toRefresh} />,
    };
    return <Tooltip placement="top" v-slots={tooltipSlots} />;
  },
});
