import { ref, nextTick, watchEffect, onBeforeUnmount } from 'vue';
import debounce from 'lodash-es/debounce';
import { isUndefined } from '@fe6/shared';
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
// TODO [fix][vite2] The requested module '/shop/node_modules/@simonwep/pickr/dist/pickr.es5.min.js?v=037821b3' does not provide an export named 'default'
// import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import Pickr from './colors/pickr';

import AButton from '../button';

import { getOptionProps, findDOMNode, getListeners } from '../_util/props-util';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import useConfigInject from '../_util/hooks/useConfigInject';

import zhCn from './locale/zh_CN';
import { generateAriaId } from './utils';
import { colorPickerProps } from './props';

const defColor = '#ffffff';

export default {
  name: 'AColorPicker',
  props: colorPickerProps,
  emits: ['update:value', 'change', 'openChange'],
  setup(props, { emit, slots, expose }) {
    const [contextLocale] = useLocaleReceiver('ColorPicker', zhCn);
    const i18n = { ...contextLocale.value, ...props.locale };
    const { prefixCls, configProvider } = useConfigInject('color-picker', props);
    const myOpen = ref(false);
    const colorPreviewNode = ref();
    const oldColor = ref('');
    const pickr = ref();
    const pickWraper = ref();
    const uid = ref(generateAriaId(prefixCls.value));

    const renderPickr = () => {
      if (!pickr.value) {
        pickr.value = Pickr.create(
          Object.assign(
            {
              el: colorPreviewNode.value,
              container: document.body,
              theme: 'monolith', // or 'monolith', or 'nano'
              default: oldColor.value, // 有默认颜色pickr才可以获取到_representation
              swatches: props.predefine,
              padding: props.padding,
              showAlways: false,
              useAsButton: true,
              closeOnScroll: true,
              components: {
                preview: true,
                opacity: props.alpha,
                hue: props.hue,
                interaction: {
                  input: true,
                  clear: true,
                  save: true,
                },
              },
            },
            props.config,
            { i18n },
          ),
        ).on('hide', (eventType, instance) => {
          const isSave = eventType === 'save';
          let color = isSave ? instance.getColor() : oldColor.value;
          if (isSave) {
            const _representation = instance._representation || 'HEXA';
            color = color[`to${_representation}`]().toString(props.colorRounded || 0);
          }
          if (!isSave) {
            pickr.value.setColor(color, true);
          }
          handleOpenChange();
          emit('update:value', color);
          emit('change', color);
        });
      }
      pickr.value.show();
    };

    const handleOpenChange = (status) => {
      const open = isUndefined(status) ? !myOpen.value : status;
      myOpen.value = open;
      emit('openChange', open);
      if (open) {
        renderPickr();
      } else {
        pickr.value.hide();
      }
    };

    const openColorPicker = () => {
      if (!props.disabled) {
        setTimeout(() => {
          handleOpenChange();
        }, 0);
      }
    };

    const renderButton = (initColor) => {
      let innerNode = null;
      if (slots.placeholder) {
        return (
          <div id={uid.value} ref={colorPreviewNode}>
            {slots.placeholder()}
          </div>
        );
      }

      if (props.mode === 'simple') {
        return (
          <div id={uid.value} ref={colorPreviewNode}>
            <AButton size={props.size}>{oldColor.value || initColor}</AButton>
          </div>
        );
      } else {
        return (
          <div class={`${prefixCls.value}-selection`}>
            <div id={uid.value} ref={colorPreviewNode}>
              <div class="pickr">
                <div
                  class={[
                    'pcr-def',
                    {
                      [`pcr-def-lg`]: props.size === 'large',
                      [`pcr-def-sm`]: props.size === 'small',
                    },
                  ]}
                  style={{ background: initColor }}
                />
              </div>
            </div>
            <DownOutlined class={`${prefixCls.value}-icon`} />
          </div>
        );
      }
    };

    const renderSelectorNode = () => {
      const classString = {
        [prefixCls.value]: true,
        [`${prefixCls.value}-open`]: myOpen.value,
        [`${prefixCls.value}-lg`]: props.size === 'large',
        [`${prefixCls.value}-sm`]: props.size === 'small',
        [`${prefixCls.value}-disabled`]: props.disabled,
      };
      const initColor = props.value || props.defaultValue;
      return (
        <div class={classString} tabindex={props.disabled ? -1 : 0} onClick={openColorPicker}>
          {renderButton(initColor)}
        </div>
      );
    };

    watchEffect(() => {
      const theValue = props.value || props.defaultValue;
      oldColor.value =
        theValue || pickr.value ? props.value || props.defaultValue || defColor : defColor;
    });

    onBeforeUnmount(async () => {
      if (pickr.value) {
        pickr.value.destroyAndRemove();
      }
    });

    expose({
      getPickr() {
        return pickr.value;
      },
      openColorPicker,
    });

    return renderSelectorNode;
  },
};
