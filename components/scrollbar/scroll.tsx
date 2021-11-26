/** @format */

import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  provide,
  computed,
  inject,
} from 'vue';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';
import { getSlot } from '../_util/props-util';
import { addResizeListener, removeResizeListener } from '../_util/dom';
import Bar from './bar';
import DOMWrap from './dom-wap';

function extend<T, K>(to: T, _from: K): T & K {
  return Object.assign(to, _from);
}

export function toObject<T>(arr: Array<T>): Recordable<T> {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

export default defineComponent({
  name: 'AScrollbar',
  // inheritAttrs: false,
  components: { Bar },
  props: {
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array],
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    showHorizontal: Boolean,
    noresize: {
      type: Boolean,
      default: true,
    }, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
    prefixCls: PropTypes.string,
  },
  setup(props) {
    const sizeWidth = ref('0');
    const sizeHeight = ref('0');
    const moveX = ref(0);
    const moveY = ref(0);
    const wrap = ref<any>(null);
    const resize = ref<any>(null);
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const configProvider = inject('configProvider', defaultConfigProvider) || defaultConfigProvider;
    const prefixClsNew = configProvider.getPrefixCls('scrollbar', props.prefixCls);

    provide('scroll-bar-wrap', wrap);

    const handleScroll = () => {
      if (!props.native) {
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight;
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth;
      }
    };

    const update = () => {
      if (!wrap.value) {
        return;
      }

      const heightPercentage = (wrap.value.clientHeight * 100) / wrap.value.scrollHeight;
      const widthPercentage = (wrap.value.clientWidth * 100) / wrap.value.scrollWidth;

      sizeHeight.value = heightPercentage < 100 ? `${heightPercentage}%` : '';
      sizeWidth.value = widthPercentage < 100 ? `${widthPercentage}%` : '';
    };

    onMounted(() => {
      if (props.native) {
        return;
      }
      nextTick(update);
      if (!props.noresize) {
        addResizeListener(resize.value, update);
        addResizeListener(wrap.value, update);
      }
    });

    onBeforeUnmount(() => {
      if (props.native) {
        return;
      }
      if (!props.noresize) {
        removeResizeListener(resize.value, update);
        removeResizeListener(wrap.value, update);
      }
    });
    const style = computed(() => {
      let style: any = props.wrapStyle;
      if (Array.isArray(props.wrapStyle)) {
        style = toObject(props.wrapStyle);
      }
      return style;
    });

    const domWrapProps = {
      onUpdateDom: update,
    };
    return {
      moveX,
      moveY,
      sizeWidth,
      sizeHeight,
      style,
      wrap,
      resize,
      update,
      handleScroll,
      prefixClsNew,
      domWrapProps,
    };
  },
  render() {
    const compProps = {
      ref: 'resize',
      class: [`${this.prefixClsNew}-view`, this.viewClass],
      style: this.viewStyle,
    };
    const children = getSlot(this);
    const compChildren = <div {...compProps}>{children}</div>;

    let horizontalNode = null;

    if (this.showHorizontal) {
      horizontalNode = <bar move={this.moveX} size={this.sizeWidth} />;
    }

    let myScroll = null;
    if (!this.native) {
      myScroll = (
        <>
          {horizontalNode}
          <bar vertical move={this.moveY} size={this.sizeHeight} />
        </>
      );
    }
    return (
      <div class={this.prefixClsNew}>
        <div
          ref="wrap"
          class={[
            this.wrapClass,
            `${this.prefixClsNew}-wrap`,
            this.native ? '' : `${this.prefixClsNew}-wrap-hidden-default`,
          ]}
          style={this.style}
          onScroll={this.handleScroll}
        >
          <DOMWrap {...this.domWrapProps}>{compChildren}</DOMWrap>
        </div>
        {myScroll}
      </div>
    );
  },
});
