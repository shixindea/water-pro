import { defineComponent } from 'vue';
import { MoreDisplayProps } from './interface';
import useConfigInject from '../_util/hooks/useConfigInject';
import Alert from '../alert';

export default defineComponent({
  name: 'AMoreDisplay',
  inheritAttrs: false,
  props: MoreDisplayProps,
  emits: ['cancelSelect'],
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro', props);
    return {
      prefixClsNew,
    };
  },
  render() {
    const cancel = (ev: any) => {
      this.$emit('cancelSelect', ev);
    };

    const closeTextNode = (
      <div class={`${this.prefixClsNew}-alert`}>
        <div class={`${this.prefixClsNew}-alert-message`}>
          已选择<span class={`${this.prefixClsNew}-alert-number`}>{this.selectKey.length}</span>条
        </div>
        <div class={`${this.prefixClsNew}-alert-cancel`} onClick={cancel}>
          取消选择
        </div>
      </div>
    );

    return (
      <Alert
        class={`${this.prefixClsNew}-alert-box`}
        type="info"
        showIcon
        v-slots={{
          message: () => closeTextNode,
        }}
      />
    );
  },
});
