import { defineComponent } from 'vue';
import { MoreHandlerProps } from './interface';
import useConfigInject from '../_util/hooks/useConfigInject';
import { getSlot } from '../_util/props-util';

export default defineComponent({
  name: 'AMoreHandler',
  inheritAttrs: false,
  props: MoreHandlerProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro', props);
    return {
      prefixClsNew,
    };
  },
  render() {
    // fix 去掉悬浮，房型有问题
    return (
      <div class={`${this.prefixClsNew}-more-box`}>
        <div class={`${this.prefixClsNew}-more`}>
          <div class={`${this.prefixClsNew}-more-message`}>
            已选择<span class={`${this.prefixClsNew}-more-number`}>{this.selectKey.length}</span>条
          </div>
          <div class={`${this.prefixClsNew}-more-handler`}>{getSlot(this, 'moreHandler')}</div>
        </div>
      </div>
    );
  },
});
