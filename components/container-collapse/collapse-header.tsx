/** @format */

import { defineComponent } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { BasicTitle } from '../basic-title';
import { BasicArrow } from '../basic-arrow';
import useConfigInject from '../_util/hooks/useConfigInject';
import PropTypes from '../_util/vue-types';
import { getSlot } from '../_util/props-util';
import { tuple } from '../_util/type';

export default defineComponent({
  inheritAttrs: false,
  props: {
    title: PropTypes.string,
    show: PropTypes.bool,
    expanable: PropTypes.bool,
    loading: PropTypes.bool,
    prefixCls: PropTypes.string,
    mode: PropTypes.oneOf(tuple('simple', 'default')).def('default'),
    headerClassName: PropTypes.string,
  },
  emits: ['expand'],
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('container-collapse', props);
    return {
      prefixClsNew,
    };
  },
  render() {
    let titleNode: any = this.title;
    const children = getSlot(this);
    if (children.length > 0) {
      titleNode = children.slice();
    }

    let loadingNode = null;
    if (this.loading) {
      loadingNode = <LoadingOutlined />;
    }

    const slotDatas = {
      status: this.show,
    };
    let actionNode = null;
    const actionChildren = getSlot(this, 'action', slotDatas);
    if (actionChildren.length > 0) {
      actionNode = actionChildren.slice();
    }

    let arrowNode = null;
    if (!this.loading && this.expanable) {
      arrowNode = (
        <BasicArrow top={this.show} helpMessage={this.show ? '收起' : '展开'} expand={!this.show} />
      );
      const iconChildren = getSlot(this, 'icon', slotDatas);
      if (iconChildren.length) {
        arrowNode = iconChildren;
      }
    }

    const actionAfterDefaultNode = (
      <div
        class={`${this.prefixClsNew}-action ${this.prefixClsNew}-action-${this.mode}${
          this.headerClassName ? ` ${this.headerClassName}` : ''
        }`}
      >
        {actionNode}
        {loadingNode}
        {arrowNode}
      </div>
    );
    const actionBeforeDefaultNode = (
      <div
        class={`${this.prefixClsNew}-action ${this.prefixClsNew}-action-${this.mode}${
          this.headerClassName ? ` ${this.headerClassName}` : ''
        }`}
      >
        {arrowNode}
        {actionNode}
        {loadingNode}
      </div>
    );

    let afterActionNode = null;
    if (this.mode === 'default') {
      afterActionNode = actionAfterDefaultNode;
    }

    let beforeActionNode = null;
    if (this.mode === 'simple') {
      beforeActionNode = actionBeforeDefaultNode;
    }

    return (
      <div
        class={[
          `${this.prefixClsNew}-header`,
          {
            [`${this.prefixClsNew}-header-active`]: this.show,
            [`${this.prefixClsNew}-header-only`]: !this.expanable,
          },
          `${this.prefixClsNew}-header-${this.mode}`,
        ]}
        onClick={() => this.$emit('expand')}
      >
        {beforeActionNode}
        <BasicTitle class={`${this.prefixClsNew}-header-title`} {...this.$attrs}>
          {titleNode}
        </BasicTitle>
        {afterActionNode}
      </div>
    );
  },
});
