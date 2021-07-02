import { defineComponent, inject } from 'vue';
import { addClass, removeClass } from '../../_util/dom';
import { defaultConfigProvider } from '../../config-provider';
import PropTypes from '../../_util/vue-types';

export default defineComponent({
  name: 'CollapseTransition',
  props: {
    prefixCls: PropTypes.string,
  },
  setup(props) {
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const configProvider = inject('configProvider', defaultConfigProvider) || defaultConfigProvider;
    const prefixClsNew = configProvider.getPrefixCls('transition', props.prefixCls);
    return {
      prefixClsNew,
    };
  },
  render() {
    return (
      <transition
        v-on={{
          beforeEnter: (el: any) => {
            addClass(el, this.prefixClsNew);
            if (!el.dataset) el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;

            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          },

          enter(el: any) {
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
              el.style.height = el.scrollHeight + 'px';
              el.style.paddingTop = el.dataset.oldPaddingTop;
              el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
              el.style.height = '';
              el.style.paddingTop = el.dataset.oldPaddingTop;
              el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = 'hidden';
          },

          afterEnter: (el: any) => {
            // for safari: remove class then reset height is necessary
            removeClass(el, this.prefixClsNew);
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
          },
          beforeLeave(el: any) {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
          },
          leave: (el: any) => {
            if (el.scrollHeight !== 0) {
              // for safari: add class after set height, or it will jump to zero height suddenly, weired
              addClass(el, this.prefixClsNew);
              // in vue3.0.4, transitionProperty is set 'none' to avoid 'v-leave-from' issue
              el.style.transitionProperty = 'height';
              el.style.height = 0;
              el.style.paddingTop = 0;
              el.style.paddingBottom = 0;
            }
          },
          afterLeave: (el: any) => {
            removeClass(el, this.prefixClsNew);
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          },
        }}
      >
        <slot></slot>
      </transition>
    );
  },
});
