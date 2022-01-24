/** @format */

import type { Nullable } from '../_util/type';

import { defineComponent, ref, unref, nextTick } from 'vue';

import { Scrollbar, ScrollbarType } from '../scrollbar';

import { useScrollTo } from '../_util/hooks/use-scroll-to';
import useConfigInject from '../_util/hooks/useConfigInject';
import { containerScrollProps } from './props';
import { getSlot } from '../_util/props-util';

export default defineComponent({
  name: 'AContainerScroll',
  components: { Scrollbar },
  props: containerScrollProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('container-scroll', props);

    const scrollbarRef = ref<Nullable<ScrollbarType>>(null);

    function scrollTo(to: number, duration = 500) {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) {
        return;
      }

      nextTick(() => {
        const wrap = unref(scrollbar.wrap);
        if (!wrap) {
          return;
        }
        const { start } = useScrollTo({
          el: wrap,
          to,
          duration,
        });
        start();
      });
    }

    function getScrollWrap() {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) {
        return null;
      }
      return scrollbar.wrap;
    }

    function scrollBottom() {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) {
        return;
      }

      nextTick(() => {
        const wrap = unref(scrollbar.wrap);
        if (!wrap) {
          return;
        }
        const scrollHeight = wrap.scrollHeight as number;
        const { start } = useScrollTo({
          el: wrap,
          to: scrollHeight,
        });
        start();
      });
    }

    return {
      scrollbarRef,
      scrollTo,
      scrollBottom,
      getScrollWrap,
      prefixClsNew,
    };
  },
  render() {
    const children = getSlot(this);
    return (
      <Scrollbar
        ref="scrollbarRef"
        class={this.prefixClsNew}
        {...this.$attrs}
        showHorizontal={this.showHorizontal}
      >
        {children}
      </Scrollbar>
    );
  },
});
