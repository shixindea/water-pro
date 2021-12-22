import { defineComponent, PropType, ExtractPropTypes } from 'vue';

import useConfigInject from '../../../_util/hooks/useConfigInject';
import { default as Image } from '../../../image';
import { errorUploadImage } from '../../../config-provider/error-image';

export const tableImageProps = () => ({
  imgList: {
    type: Array as PropType<string[]>,
    default: null,
  },
  size: {
    type: Number as PropType<number>,
    default: 40,
  },
  prefixCls: String,
});

export type TableImageProps = Partial<ExtractPropTypes<ReturnType<typeof tableImageProps>>>;

export default defineComponent({
  name: 'ATableImage',
  props: tableImageProps(),
  setup(props) {
    const { prefixCls: prefixClsNew, configProvider } = useConfigInject('table-pro-img', props);
    return { prefixClsNew, configProvider };
  },
  render() {
    const imgNode = [];

    if (this.imgList && this.imgList.length) {
      this.imgList.forEach((img: string) => {
        imgNode.push(
          <Image
            bordered={false}
            width={this.size}
            src={img}
            fallback={this.configProvider?.errorImage || errorUploadImage}
          />,
        );
      });
    }

    return (
      <div class={this.prefixClsNew}>
        <Image.PreviewGroup>{imgNode}</Image.PreviewGroup>
      </div>
    );
  },
});
