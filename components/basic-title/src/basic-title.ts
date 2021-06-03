/** @format */

import type { PropType } from 'vue';

import { defineComponent, inject } from 'vue';

import BasicHelp from '../../basic-help/src/basic-help';

import { defaultConfigProvider } from '../../config-provider';

import PropTypes from '../../_util/vue-types';

export default defineComponent({
  name: 'ABasicTitle',
  components: { BasicHelp },
  props: {
    helpMessage: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
    span: PropTypes.bool,
    prefixCls: PropTypes.string,
  },
  setup(props) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const prefixClsNew = configProvider.getPrefixCls('basic-title', props.prefixCls);
    return { prefixClsNew };
  },
});
