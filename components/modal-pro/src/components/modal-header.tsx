import { defineComponent, computed } from 'vue';

import { BasicHelp } from '../../../basic-help';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import { basicProps } from '../props';

export default defineComponent({
  name: 'AModalProHeader',
  props: basicProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-pro-title', props);
    const getProps = computed((): any => {
      return {
        ...props,
      };
    });
    return { getProps, prefixClsNew };
  },
  render() {
    let headerNode = <span>{this.title}</span>;

    if (this.$attrs.text) {
      headerNode = (
        <span>
          <span>{this.title}</span>
          <BasicHelp {...this.$attrs} />
        </span>
      );
    }

    return headerNode;
  },
});
