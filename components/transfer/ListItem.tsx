import IconBytedDelete from '@fe6/icon-vue/lib/icons/byted-delete';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import type { TransferLocale } from '.';
import defaultLocale from '../locale/default';
import Checkbox from '../checkbox';
import TransButton from '../_util/transButton';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import type { ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

function noop() {}

export const transferListItemProps = {
  renderedText: PropTypes.any,
  renderedEl: PropTypes.any,
  item: PropTypes.any,
  checked: { type: Boolean, default: undefined },
  prefixCls: String,
  disabled: { type: Boolean, default: undefined },
  showRemove: { type: Boolean, default: undefined },
  onClick: Function,
  onRemove: Function,
};

export type TransferListItemProps = Partial<ExtractPropTypes<typeof transferListItemProps>>;

export default defineComponent({
  name: 'ListItem',
  inheritAttrs: false,
  props: transferListItemProps,
  emits: ['click', 'remove'],
  setup(props, { emit }) {
    return () => {
      const { renderedText, renderedEl, item, checked, disabled, prefixCls, showRemove } = props;
      const className = classNames({
        [`${prefixCls}-content-item`]: true,
        [`${prefixCls}-content-item-disabled`]: disabled || item.disabled,
      });

      let title: string;
      if (typeof renderedText === 'string' || typeof renderedText === 'number') {
        title = String(renderedText);
      }

      return (
        <LocaleReceiver componentName="Transfer" defaultLocale={defaultLocale.Transfer}>
          {(transferLocale: TransferLocale) => {
            const labelNode = <span class={`${prefixCls}-content-item-text`}>{renderedEl}</span>;
            if (showRemove) {
              return (
                <li class={className} title={title}>
                  {labelNode}
                  <TransButton
                    disabled={disabled || item.disabled}
                    class={`${prefixCls}-content-item-remove`}
                    aria-label={transferLocale.remove}
                    onClick={() => {
                      emit('remove', item);
                    }}
                  >
                    <IconBytedDelete colors={['currentColor']} />
                  </TransButton>
                </li>
              );
            }

            return (
              <li
                class={className}
                title={title}
                onClick={
                  disabled || item.disabled
                    ? noop
                    : () => {
                        emit('click', item);
                      }
                }
              >
                <Checkbox
                  class={`${prefixCls}-checkbox`}
                  checked={checked}
                  disabled={disabled || item.disabled}
                />
                {labelNode}
              </li>
            );
          }}
        </LocaleReceiver>
      );
    };
  },
});
