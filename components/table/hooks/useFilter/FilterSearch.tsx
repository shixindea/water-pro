import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import IconBytedSearch from '@fe6/icon-vue/lib/icons/byted-search';
import type { TableLocale } from '../../interface';
import Input from '../../../input';

export default defineComponent({
  name: 'FilterSearch',
  inheritAttrs: false,
  props: {
    value: String,
    onChange: Function as PropType<(e: InputEvent) => void>,
    filterSearch: Boolean,
    tablePrefixCls: String,
    locale: { type: Object as PropType<TableLocale>, default: undefined as TableLocale },
  },
  setup(props) {
    return () => {
      const { value, onChange, filterSearch, tablePrefixCls, locale } = props;
      if (!filterSearch) {
        return null;
      }
      return (
        <div class={`${tablePrefixCls}-filter-dropdown-search`}>
          <Input
            v-slots={{ prefix: () => <IconBytedSearch colors={['currentColor']} /> }}
            placeholder={locale.filterSearchPlaceholder}
            onChange={onChange}
            value={value}
            // for skip min-width of input
            htmlSize={1}
            class={`${tablePrefixCls}-filter-dropdown-search-input`}
          />
        </div>
      );
    };
  },
});
