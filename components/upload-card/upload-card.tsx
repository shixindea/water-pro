import { defineComponent, ref, watchEffect, inject } from 'vue';

import { LoadingOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { isNumber } from '@fe6/shared';

import { Upload } from '../upload';
import Image from '../image';
import Modal from '../modal';

import { acceptListString, useMoreUpload } from '../_util/hooks/use-upload';
import { FileItem } from '../_util/types/types';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import { defaultConfigProvider } from '../config-provider';
import { getSlot } from '../_util/props-util';

import { errorUploadImage } from '../config-provider/error-image';

export default defineComponent({
  name: 'AUploadCard',
  components: {
    LoadingOutlined,
    EyeOutlined,
    DeleteOutlined,
  },
  props: {
    list: PropTypes.array.def([]),
    onFormChange: {
      type: Function,
      default: () => {},
    },
    mergeOriginDatas: {
      type: Function,
      default: undefined,
    },
    action: PropTypes.string,
    accept: PropTypes.string.def(acceptListString),
    autoUpload: PropTypes.bool.def(true),
    headers: PropTypes.object,
    urlKey: PropTypes.string.def('url'),
    resultKey: PropTypes.string.def('data'),
    nameKey: PropTypes.string.def('name'),
    imageWidth: PropTypes.number.def(100),
    imageHeight: PropTypes.number.def(100),
    limitSize: PropTypes.number.def(2),
    placeholder: PropTypes.string,
    errorImage: PropTypes.string,
    disabled: PropTypes.bool,
    maxUploadCount: PropTypes.number,
    objectFit: PropTypes.string.def('contain'),
  },
  emits: ['changeUpload', 'change'],
  setup(props, params: Recordable) {
    const previewPoseterVisible = ref<boolean>(false);
    const previewPoseterImage = ref<string | undefined>('');
    const handlePoseterPreview = async (imgOneUrl: string) => {
      previewPoseterImage.value = imgOneUrl;
      previewPoseterVisible.value = true;
    };
    const handlePoseterCancel = () => {
      previewPoseterVisible.value = false;
    };

    const { prefixCls: prefixClsNew } = useConfigInject('upload-card', props);
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const { errorImage: errorImageDef } =
      inject('configProvider', defaultConfigProvider) || defaultConfigProvider;

    const {
      moreLoading,
      beforeUpload,
      removeOneImage,
      handleMoreChange,
      imageList,
    } = useMoreUpload(props, params);

    watchEffect(async () => {
      // NOTE 去掉为空判断，素材中心，通字段再打开图片保留问题
      imageList.value = (props.list as string[]).slice();
    });

    const beforeUploadFn = (file: FileItem) => {
      return beforeUpload(file, props.accept.split(','));
    };

    return {
      handlePoseterPreview,
      previewPoseterVisible,
      previewPoseterImage,
      handlePoseterCancel,

      moreLoading,
      beforeUploadFn,
      handleMoreChange,
      removeOneImage,
      imageList,
      acceptListString,
      prefixClsNew,
      errorBackImage: props.errorImage || errorImageDef || errorUploadImage,
    };
  },
  render() {
    let imageNode = [];
    const canUpload = isNumber(this.maxUploadCount) && this.maxUploadCount > 1;

    if (this.imageList.length) {
      imageNode = this.imageList.map((iItem: any, iIdx: number) => {
        return (
          <div
            class={`${this.prefixClsNew}-img-box`}
            style={{
              width: `${this.imageWidth}px`,
              height: `${this.imageHeight}px`,
            }}
          >
            <Image
              width={this.imageWidth - 18}
              height={this.imageHeight - 18}
              src={iItem}
              class={[
                `${this.prefixClsNew}-img`,
                `${this.prefixClsNew}-img-${this.objectFit}`,
                { [`${this.prefixClsNew}-img-disabled`]: this.disabled },
              ]}
              preview={false}
              fallback={this.errorBackImage}
            />
            <div class={`${this.prefixClsNew}-handle`}>
              <EyeOutlined
                style="margin-right: 8px"
                onClick={() => this.handlePoseterPreview(iItem)}
              />
              <DeleteOutlined onClick={() => this.removeOneImage(iIdx)} />
            </div>
          </div>
        );
      });
    }

    let placeholderNode = null;

    if (this.placeholder) {
      placeholderNode = <p class={`${this.prefixClsNew}-tip`}>{this.placeholder}</p>;
    }

    let loadingNode = [
      <div v-show={!this.moreLoading}>
        <p class={`${this.prefixClsNew}-tip`}>上传</p>
        {placeholderNode}
      </div>,
    ];
    const placeholderSlotNode = getSlot(this, 'placeholder');
    if (placeholderSlotNode.length) {
      loadingNode = placeholderSlotNode;
    }

    return (
      <div>
        {imageNode}
        <Upload
          accept={this.acceptListString}
          class={this.prefixClsNew}
          show-upload-list={false}
          action={this.autoUpload ? this.action : ''}
          headers={this.headers}
          disabled={this.disabled}
          before-upload={this.beforeUploadFn}
          onChange={this.handleMoreChange}
        >
          <div v-show={!canUpload} class={`${this.prefixClsNew}-btn`}>
            <LoadingOutlined v-show={this.moreLoading} />
            {loadingNode}
          </div>
        </Upload>
        <Modal
          visible={this.previewPoseterVisible}
          footer={null}
          onCancel={this.handlePoseterCancel}
        >
          <img style="width: 100%" src={this.previewPoseterImage} />
        </Modal>
      </div>
    );
  },
});
