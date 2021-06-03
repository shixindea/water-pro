/** @format */

import { defineComponent, computed, inject } from 'vue';
import { RightOutlined } from '@ant-design/icons-vue';

import { defaultConfigProvider } from '../../config-provider';
import PropTypes from '../../_util/vue-types';

export default defineComponent({
  name: 'ABasicArrow',
  components: { RightOutlined },
  props: {
    // Expand contract, expand by default
    expand: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    inset: PropTypes.bool,
    prefixCls: PropTypes.string,
  },
  setup(props) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const prefixClsNew = configProvider.getPrefixCls('basic-arrow', props.prefixCls);

    const getClass = computed(() => {
      const { expand, top, bottom, inset } = props;
      return [
        prefixClsNew,
        {
          [`${prefixClsNew}-active`]: expand,
          top,
          inset,
          bottom,
        },
      ];
    });

    return {
      getClass,
    };
  },
});
