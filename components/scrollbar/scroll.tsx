/** @format */

import { defineComponent, ref, onMounted, nextTick, provide, computed } from 'vue';

import ResizeObserver from '../vc-resize-observer';

import useConfigInject from '../_util/hooks/useConfigInject';
import { getSlot } from '../_util/props-util';
import { Recordable } from '../_util/type';

import Bar from './bar';
import { scrollBarProps } from './props';

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
  components: { Bar },
  props: scrollBarProps,
  emits: ['change'],
  setup(props, { emit }) {
    const sizeWidth = ref('0');
    const sizeHeight = ref('0');
    const moveX = ref(0);
    const moveY = ref(0);
    const wrap = ref<any>(null);
    const resize = ref<any>(null);
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const { prefixCls: prefixClsNew } = useConfigInject('scrollbar', props);

    provide('scroll-bar-wrap', wrap);

    const handleScroll = () => {
      if (!props.native) {
        if (props.showHorizontal) {
          moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth;
        }
        if (props.showVertical) {
          moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight;
        }
        emit('change', moveX.value, moveY.value, wrap.value);
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
    });

    const style = computed(() => {
      let style: any = props.wrapStyle;
      if (Array.isArray(props.wrapStyle)) {
        style = toObject(props.wrapStyle);
      }
      return style;
    });

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

    let sverticalNode = null;
    if (this.showVertical) {
      sverticalNode = <bar vertical move={this.moveY} size={this.sizeHeight} />;
    }

    let myScroll = null;
    if (!this.native) {
      myScroll = (
        <>
          {horizontalNode}
          {sverticalNode}
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
          <ResizeObserver onResize={this.update}>{compChildren}</ResizeObserver>
        </div>
        {myScroll}
      </div>
    );
  },
});
