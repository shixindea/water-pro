/** @format */

import { defineComponent, reactive, onMounted, ref, toRef, toRefs, TransitionGroup } from 'vue';

import Skeleton from '../skeleton';
import { useTimeoutFn } from '../_util/hooks/use-timeout';
import { useIntersectionObserver } from '../_util/hooks/use-intersection-observer';
import useConfigInject from '../_util/hooks/useConfigInject';
import { containerLazyProps } from './props';
import { getSlot } from '../_util/props-util';
// import { useDesign } from '@@hooks/web/use-design';

interface State {
  isInit: boolean;
  loading: boolean;
  intersectionObserverInstance: IntersectionObserver | null;
}

export default defineComponent({
  name: 'AContainerLazy',
  components: { Skeleton },
  inheritAttrs: false,
  props: containerLazyProps,
  emits: ['init'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('container-lazy', props);

    const elRef = ref<any>(null);
    const state = reactive<State>({
      isInit: false,
      loading: false,
      intersectionObserverInstance: null,
    });

    // If there is a set delay time, it will be executed immediately
    function immediateInit() {
      const { timeout } = props;
      timeout &&
        useTimeoutFn(() => {
          init();
        }, timeout);
    }

    function init() {
      state.loading = true;

      useTimeoutFn(() => {
        if (state.isInit) {
          return;
        }
        state.isInit = true;
        emit('init');
      }, props.maxWaitingTime || 80);
    }

    function initIntersectionObserver() {
      const { timeout, direction, threshold } = props;
      if (timeout) {
        return;
      }
      // According to the scrolling direction to construct the viewport margin, used to load in advance
      let rootMargin = '0px';
      switch (direction) {
        case 'vertical':
          rootMargin = `${threshold} 0px`;
          break;
        case 'horizontal':
          rootMargin = `0px ${threshold}`;
          break;
      }

      try {
        const { stop, observer } = useIntersectionObserver({
          rootMargin,
          target: toRef(elRef.value, '$el'),
          onIntersect: (entries: any[]) => {
            const isIntersecting = entries[0].isIntersecting || entries[0].intersectionRatio;
            if (isIntersecting) {
              init();
              if (observer) {
                stop();
              }
            }
          },
          root: toRef(props, 'viewport'),
        });
      } catch (e) {
        init();
      }
    }

    onMounted(() => {
      immediateInit();
      initIntersectionObserver();
    });

    return {
      elRef,
      prefixClsNew,
      ...toRefs(state),
    };
  },
  render() {
    let skeletonNode = null;
    const skeletonChildren = getSlot(this, 'skeleton');
    if (skeletonChildren.length > 0) {
      skeletonNode = skeletonChildren;
    } else {
      skeletonNode = <Skeleton />;
    }

    const defChildren = getSlot(this, 'default', {
      loading: this.loading,
    });

    let childrenNode = null;
    if (this.isInit) {
      childrenNode = <div key="component">{defChildren}</div>;
    } else {
      childrenNode = <div key="skeleton">{skeletonNode}</div>;
    }

    return (
      <TransitionGroup
        {...this.$attrs}
        ref="elRef"
        class={this.prefixClsNew}
        name={this.transitionName}
        tag={this.tag}
        mode="out-in"
      >
        {childrenNode}
      </TransitionGroup>
    );
  },
});
