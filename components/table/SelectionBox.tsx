import { computed, defineComponent } from 'vue';
import Checkbox from '../checkbox';
import Radio from '../radio';
import { SelectionBoxProps } from './interface';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps } from '../_util/props-util';

export default defineComponent({
  name: 'SelectionBox',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: SelectionBoxProps,

  setup(props) {
    return {
      checked: computed(() => {
        const { store, defaultSelection, rowIndex } = props;
        let checked = false;
        if (store.selectionDirty) {
          checked = store.selectedRowKeys.includes(rowIndex);
        } else {
          checked = store.selectedRowKeys.includes(rowIndex) || defaultSelection.includes(rowIndex);
        }
        return checked;
      }),
    };
  },
  render() {
    const { type, rowIndex, ...rest } = { ...getOptionProps(this), ...this.$attrs } as any;
    const { checked } = this;
    const checkboxProps = {
      checked,
      ...rest,
    };
    if (type === 'radio') {
      checkboxProps.value = rowIndex;
      return <Radio {...checkboxProps} />;
    }
    return <Checkbox {...checkboxProps} />;
  },
});
