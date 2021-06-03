/** @format */

import { defineComponent, inject } from 'vue';
import { BasicTitle } from '../../../basic-title';
import { BasicArrow } from '../../../basic-arrow';
import { defaultConfigProvider } from '../../../config-provider';
import PropTypes from '../../../_util/vue-types';

export default defineComponent({
  components: { BasicArrow, BasicTitle },
  inheritAttrs: false,
  props: {
    helpMessage: PropTypes.string,
    title: PropTypes.string,
    show: PropTypes.bool,
    canExpan: PropTypes.bool,
    prefixCls: PropTypes.string,
  },
  emits: ['expand'],
  setup(props) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const prefixClsNew = configProvider.getPrefixCls('lazy-container', props.prefixCls);
    return {
      prefixClsNew,
    };
  },
});
