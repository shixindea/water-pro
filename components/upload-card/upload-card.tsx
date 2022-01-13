import type { Recordable, ComponentRef } from '../_util/type';

import { defineComponent, ref, watchEffect, unref, onMounted } from 'vue';

import { IconBytedDelete, IconBytedAutoWidth, IconBytedEyes } from '@fe6/icon-vue';
import { isNumber, isNull, isUndefined } from '@fe6/shared';
import { isArray } from 'lodash';

import { Upload } from '../upload';
import Image from '../image';
import Modal from '../modal';
import ToolTip from '../tooltip';
import Spin from '../spin';

import { useMoreUpload } from '../_util/hooks/use-upload';
import { FileItem } from '../_util/type';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import { useInjectFormItemContext } from '../form/FormItemContext';
import useConfigInject from '../_util/hooks/useConfigInject';
import { getSlot } from '../_util/props-util';
import { useSortable } from '../_util/hooks/use-sortable';

import { errorUploadImage } from '../config-provider/error-image';

import zhCn from './locale/zh_CN';
import { uploadCardProps } from './props';

export default defineComponent({
  name: 'AUploadCard',
  props: uploadCardProps,
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

    const [contextLocale] = useLocaleReceiver('PreviewImage', zhCn);
    const formItemContext = useInjectFormItemContext();
    const { prefixCls: prefixClsNew, configProvider } = useConfigInject('upload-card', props);
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const { errorImage: errorImageDef } = configProvider;
    const locale = { ...contextLocale.value, ...props.locale };

    const { moreLoading, beforeUpload, removeOneImage, handleMoreChange, imageList } =
      useMoreUpload(props, params, formItemContext);

    watchEffect(async () => {
      // 解决拖拽不好用数据变，展示不变
      if (!imageList.value.length && isArray(props.value) && props.value.length > 0) {
        // NOTE 去掉为空判断，素材中心，通字段再打开图片保留问题
        imageList.value = (props.value as string[]).slice();
      }
    });

    const beforeUploadFn = (file: FileItem) => {
      return beforeUpload(file, props.accept.split(','));
    };

    const columnListRef = ref<ComponentRef>(null);
    const initTable = () => {
      if (props.draggable) {
        const columnListEl = unref(columnListRef);
        if (!columnListEl) {
          return;
        }

        const { initSortable } = useSortable(columnListEl as any, {
          handle: `.${prefixClsNew.value}-icon-drag`,
          onEnd: (evt) => {
            const { oldIndex, newIndex } = evt;
            if (
              (isUndefined(oldIndex) && isNull(oldIndex)) ||
              (isUndefined(newIndex) && isNull(newIndex)) ||
              oldIndex === newIndex
            ) {
              return;
            }
            // Sort column
            const oldIndexNumber = oldIndex as number;
            const newIndexNumber = newIndex as number;

            const newImageList = imageList.value.slice();
            if (oldIndexNumber > newIndexNumber) {
              newImageList.splice(newIndexNumber, 0, newImageList[oldIndexNumber]);
              newImageList.splice(oldIndexNumber + 1, 1);
            } else {
              newImageList.splice(newIndexNumber + 1, 0, newImageList[oldIndexNumber]);
              newImageList.splice(oldIndexNumber, 1);
            }
            params.emit('changeUpload', newImageList);
            formItemContext.onFieldChange();
            formItemContext.onFieldBlur();
          },
        });
        initSortable();
      }
    };

    onMounted(initTable);

    return {
      handlePoseterPreview,
      previewPoseterVisible,
      previewPoseterImage,
      handlePoseterCancel,
      columnListRef,

      moreLoading,
      beforeUploadFn,
      handleMoreChange,
      removeOneImage,
      imageList,
      prefixClsNew,
      errorBackImage: props.errorImage || errorImageDef || errorUploadImage,
      locale,
    };
  },
  render() {
    let imageNode = [];

    let dragNode = null;
    if (this.draggable) {
      dragNode = (
        <ToolTip title={this.locale?.dragPlaceholder || '拖拽改变位置'}>
          <IconBytedAutoWidth
            class={`${this.prefixClsNew}-icon
            ${this.prefixClsNew}-icon-drag`}
            colors={['currentColor']}
          />
        </ToolTip>
      );
    }

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
              bordered={false}
              preview={false}
              fallback={this.errorBackImage}
            />
            <div class={`${this.prefixClsNew}-handle`}>
              <ToolTip title={this.locale?.seePlaceholder || '查看'}>
                <IconBytedEyes
                  class={`${this.prefixClsNew}-icon`}
                  colors={['currentColor']}
                  onClick={() => this.handlePoseterPreview(iItem)}
                />
              </ToolTip>
              {dragNode}
              <ToolTip title={this.locale?.removePlaceholder || '删除'}>
                <IconBytedDelete
                  colors={['currentColor']}
                  onClick={() => this.removeOneImage(iIdx)}
                />
              </ToolTip>
            </div>
          </div>
        );
      });
    }

    const canUpload =
      isUndefined(this.maxUploadCount) ||
      (isNumber(this.maxUploadCount) &&
        this.maxUploadCount > 1 &&
        imageNode.length < this.maxUploadCount);

    let placeholderNode = null;

    if (this.placeholder) {
      placeholderNode = <p class={`${this.prefixClsNew}-tip`}>{this.placeholder}</p>;
    }

    let loadingNode = [
      <div v-show={!this.moreLoading}>
        <p class={`${this.prefixClsNew}-tip`}>{this.locale?.placeholder || '上传'}</p>
        {placeholderNode}
      </div>,
    ];
    const placeholderSlotNode = getSlot(this, 'placeholder');
    if (placeholderSlotNode.length) {
      loadingNode = placeholderSlotNode;
    }

    return (
      <div ref="columnListRef" style={`min-height: ${this.imageHeight}px`}>
        {imageNode}
        <Upload
          accept={this.accept}
          class={this.prefixClsNew}
          show-upload-list={false}
          action={this.autoUpload ? this.action : ''}
          headers={this.headers}
          disabled={this.disabled}
          before-upload={this.beforeUploadFn}
          onChange={this.handleMoreChange}
        >
          <div v-show={canUpload} class={`${this.prefixClsNew}-btn`}>
            <Spin v-show={this.moreLoading} />
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
