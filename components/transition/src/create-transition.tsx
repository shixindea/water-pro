/** @format */

import type { PropType, RendererElement } from 'vue';

import { defineComponent, Transition, TransitionGroup } from 'vue';

import { Recordable } from '../../_util/type';

type Mode = 'in-out' | 'out-in' | 'default' | undefined;

export function createSimpleTransition(name: string, origin = 'top center 0', mode?: Mode) {
  return defineComponent({
    name,
    props: {
      group: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      mode: {
        type: String as PropType<Mode>,
        default: mode,
      },
      origin: {
        type: String as PropType<string>,
        default: origin,
      },
    },
    render() {
      const onBeforeEnter = (el: RendererElement) => {
        el.style.transformOrigin = this.origin;
      };
      const Tag = !this.group ? Transition : TransitionGroup;
      return (
        <Tag name={name} mode={this.mode} {...this.$attrs} onBeforeEnter={onBeforeEnter}>
          {this.$slots.default?.()}
        </Tag>
      );
    },
  });
}
export function createJavascriptTransition(
  name: string,
  functions: Recordable,
  mode: Mode = 'in-out',
) {
  return defineComponent({
    name,
    props: {
      mode: {
        type: String as PropType<Mode>,
        default: mode,
      },
    },
    render() {
      return (
        <Transition
          name={name}
          mode={this.props.mode}
          {...this.$attrs}
          onBeforeEnter={functions.beforeEnter}
          onEnter={functions.enter}
          onLeave={functions.leave}
          onAfterLeave={functions.afterLeave}
          onLeaveCancelled={functions.afterLeave}
        >
          {this.$slots.default?.()}
        </Transition>
      );
    },
  });
}
