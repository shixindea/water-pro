import { defineComponent, PropType, ExtractPropTypes } from 'vue';

import useConfigInject from '../../../_util/hooks/useConfigInject';
import { errImage } from './error-image';

export const tableCardProps = () => ({
  imgSize: {
    type: Number as PropType<number>,
    default: 80,
  },
  imgUrl: {
    type: String as PropType<string>,
    default: '',
  },
  imgBorderd: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  imgPreview: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  imgErrorImage: {
    type: String as PropType<string>,
    default: errImage,
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  desc: {
    type: String as PropType<string>,
    default: '',
  },
  descMaxLength: {
    type: Number as PropType<number>,
    default: 14,
  },
  titleMaxLength: {
    type: Number as PropType<number>,
    default: 14,
  },
  prefixCls: String,
});

export type TableCardProps = Partial<ExtractPropTypes<ReturnType<typeof tableCardProps>>>;

export default defineComponent({
  name: 'ATableCard',
  props: tableCardProps(),
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-card', props);
    return { prefixClsNew };
  },
  render() {
    let titleNode = null;
    const titleSuffixNodes = this.$slots.titleSuffix?.();
    const hasTitleSuffixNode = titleSuffixNodes?.[0]?.shapeFlag !== 8;

    if (this.title) {
      titleNode = (
        <a-typography-text
          style={{ width: hasTitleSuffixNode ? 'calc(100% - 32px)' : '100%' }}
          class={`${this.prefixClsNew}-text`}
          ellipsis={this.title.length > this.titleMaxLength ? { tooltip: this.title } : false}
          content={this.title}
        />
      );
    }

    let descNode = null;
    if (this.desc) {
      descNode = (
        <a-typography-text
          class={`${this.prefixClsNew}-text`}
          ellipsis={this.desc.length > this.descMaxLength ? { tooltip: this.desc } : false}
          type="secondary"
          size="small"
          content={this.desc}
        />
      );
    }

    return (
      <div class={this.prefixClsNew}>
        <a-image
          width={this.imgSize}
          height={this.imgSize}
          src={this.imgUrl}
          class="voucher-list-img"
          preview={this.imgPreview}
          bordered={this.imgBorderd}
          fallback={this.imgErrorImage}
        ></a-image>
        <div
          class={`${this.prefixClsNew}-core`}
          style={
            this.desc
              ? `width: calc(100% - ${this.imgSize}px)`
              : `width: calc(100% - ${this.imgSize}px);line-height: ${this.imgSize}px`
          }
        >
          <div class={[`${this.prefixClsNew}-title`]}>
            {titleNode}
            {titleSuffixNodes}
          </div>
          {descNode}
        </div>
      </div>
    );
  },
});
