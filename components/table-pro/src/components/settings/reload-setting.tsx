import { defineComponent } from 'vue';
import { RedoOutlined } from '@ant-design/icons-vue';

import { useTableContext } from '../../hooks/use-table-context';
import Tooltip from '../../../../tooltip';

export default defineComponent({
  name: 'MarketingoSetting',
  components: {
    RedoOutlined,
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
      default: () => <RedoOutlined onClick={this.toRefresh} />,
    };
    return <Tooltip placement="top" v-slots={tooltipSlots} />;
  },
});
