/** @format */

import { defineComponent } from 'vue';

// component
import Skeleton from '../skeleton';
import { CollapseTransition } from '../transition';
import ContainerLazy from '../container-lazy/container-lazy';
import useConfigInject from '../_util/hooks/useConfigInject';
import { getSlot, getOptionProps } from '../_util/props-util';
// hook
import { useTimeoutFn } from '../_util/hooks/use-timeout';

import CollapseHeader from './collapse-header';
import { containerCollapseProps } from './props';

export default defineComponent({
  name: 'AContainerCollapse',
  props: containerCollapseProps,
  emits: ['expand'],
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('container-collapse', props);
    return {
      prefixClsNew,
    };
  },
  data() {
    return {
      show: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.show = newValue;
    },
  },
  methods: {
    handleExpand() {
      if (!this.lazy) {
        this.show = !this.show;
      }
      if (this.triggerWindowResize) {
        // 200 milliseconds here is because the expansion has animation,
        useTimeoutFn(this.triggerWindowResize, 200);
      }
      this.$emit('expand', this.lazy ? !this.show : this.show);
    },
  },
  render() {
    const defChildren = getSlot(this);
    const titleChildren = getSlot(this, 'title');
    const skeletonChildren = getSlot(this, 'skeleton');
    const props = getOptionProps(this);

    const collapseHeaderNode = (
      <CollapseHeader
        {...this.$attrs}
        {...props}
        prefix-cls={this.prefixClsNew}
        show={this.show}
        loading={this.loading}
        onExpand={this.handleExpand}
        level={this.titleLevel}
        mode={this.mode}
        headerClassName={this.headerClassName}
        v-slots={{
          action: (status: boolean) => getSlot(this, 'action', status),
          icon: (status: boolean) => getSlot(this, 'icon', status),
        }}
      >
        {titleChildren}
      </CollapseHeader>
    );

    let lazyNode = null;
    if (this.lazy) {
      lazyNode = (
        <ContainerLazy timeout={this.lazyTime}>
          {defChildren}
          {skeletonChildren}
        </ContainerLazy>
      );
    } else {
      lazyNode = defChildren;
    }

    let childrenNode = null;
    if (this.loading) {
      childrenNode = <Skeleton />;
    } else {
      childrenNode = (
        <div
          style={`display: ${this.show ? 'block' : 'none'}`}
          class={`${this.prefixClsNew}-body ${this.prefixClsNew}-body-${this.mode}${
            this.wrapClassName ? ` ${this.wrapClassName}` : ''
          }`}
        >
          {lazyNode}
        </div>
      );
    }

    const collapseTransitionNode = this.expanable ? (
      <CollapseTransition>{childrenNode}</CollapseTransition>
    ) : (
      childrenNode
    );

    return (
      <div class={[this.prefixClsNew, `${this.prefixClsNew}-${this.mode}`]}>
        {collapseHeaderNode}
        {collapseTransitionNode}
      </div>
    );
  },
});
