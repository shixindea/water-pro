/** @format */

import type { PropType } from 'vue';

import { defineComponent, ref, computed, inject } from 'vue';

// component
import Skeleton from '../../../skeleton';
import { CollapseTransition } from '../../../transition';
import { defaultConfigProvider } from '../../../config-provider';
import { triggerWindowResize } from '../../../_util/dom';
import CollapseHeader from '../collapse-header/CollapseHeader.vue';
import LazyContainer from '../lazy-container/LazyContainer.vue';
// hook
import { useTimeoutFn } from '../../../_util/hooks/use-timeout';
import PropTypes from '../../../_util/vue-types';

export default defineComponent({
  name: 'AContainerCollapse',
  components: {
    Skeleton,
    LazyContainer,
    CollapseHeader,
    CollapseTransition,
  },
  props: {
    title: PropTypes.string.def(''),
    // Can it be expanded
    canExpan: PropTypes.bool.def(true),
    // Warm reminder on the right side of the title
    helpMessage: {
      type: [Array, String] as PropType<string[] | string>,
      default: '',
    },
    // Whether to trigger window.resize when expanding and contracting,
    // Can adapt to tables and forms, when the form shrinks, the form triggers resize to adapt to the height
    triggerWindowResize: PropTypes.bool,
    loading: PropTypes.bool,
    // Delayed loading
    lazy: PropTypes.bool,
    // Delayed loading time
    lazyTime: PropTypes.number.def(0),
    prefixCls: PropTypes.string,
  },
  setup(props) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const prefixClsNew = configProvider.getPrefixCls('collapse-container', props.prefixCls);

    const show = ref(true);

    /**
     * @description: Handling development events
     */
    function handleExpand() {
      show.value = !show.value;
      if (props.triggerWindowResize) {
        // 200 milliseconds here is because the expansion has animation,
        useTimeoutFn(triggerWindowResize, 200);
      }
    }

    const getBindValues = computed((): any => {
      return props;
    });

    return {
      show,
      handleExpand,
      prefixClsNew,
      getBindValues,
    };
  },
});
