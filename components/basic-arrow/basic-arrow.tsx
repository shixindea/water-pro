/** @format */

import { defineComponent, computed } from 'vue';
import { RightOutlined } from '@ant-design/icons-vue';

import ATooltip from '../tooltip';
import useConfigInject from '../_util/hooks/useConfigInject';

import { basicArrowProps } from './props';

export default defineComponent({
  name: 'ABasicArrow',
  components: { RightOutlined },
  props: basicArrowProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('basic-arrow', props);

    const getClass = computed(() => {
      const { expand, top, bottom, inset } = props;
      return [
        prefixClsNew.value,
        {
          [`${prefixClsNew.value}-active`]: expand,
          [`${prefixClsNew.value}-top`]: top,
          [`${prefixClsNew.value}-inset`]: inset,
          [`${prefixClsNew.value}-bottom`]: bottom,
        },
      ];
    });

    return {
      getClass,
    };
  },
  render() {
    const innerNode = (
      <span class={this.getClass}>
        <RightOutlined />
      </span>
    );
    let contentNode = null;

    if (this.helpMessage) {
      contentNode = <ATooltip title={this.helpMessage}>{innerNode}</ATooltip>;
    } else {
      contentNode = innerNode;
    }
    return contentNode;
  },
});
