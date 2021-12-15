import { defineComponent, ref } from 'vue';

import Modal from '../modal';
import Image from '../image';
import Typography from '../typography';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';

import { errorUploadImage } from '../config-provider/error-image';

import zhCn from './locale/zh_CN';
import { previewImageProps } from './props';

export default defineComponent({
  name: 'APreviewImage',
  props: previewImageProps,
  emits: ['changeUpload', 'change'],
  setup(props) {
    const [contextLocale] = useLocaleReceiver('PreviewImage', zhCn);
    const previewPoseterVisible = ref<boolean>(false);
    const previewPoseterImage = ref<string | undefined>('');
    const locale = { ...contextLocale.value, ...props.locale };
    const handlePoseterPreview = () => {
      previewPoseterVisible.value = true;
    };
    const handlePoseterCancel = () => {
      previewPoseterVisible.value = false;
    };

    return {
      handlePoseterPreview,
      previewPoseterVisible,
      previewPoseterImage,
      handlePoseterCancel,
      errorBackImage: props.errorImage || errorUploadImage,
      locale,
    };
  },
  render() {
    return (
      <div>
        <Typography.Link href="javascript:;" onClick={this.handlePoseterPreview}>
          {this.placeholder || this.locale.lang?.PreviewImage?.placeholder || '查看'}
        </Typography.Link>
        <Modal
          visible={this.previewPoseterVisible}
          footer={null}
          onCancel={this.handlePoseterCancel}
        >
          <Image width="100%" src={this.value} preview={false} fallback={this.errorBackImage} />
        </Modal>
      </div>
    );
  },
});
