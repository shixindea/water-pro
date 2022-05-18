import type { CSSProperties, FunctionalComponent } from 'vue';
import IconBytedLeft from '@fe6/icon-vue/lib/icons/byted-left';
import IconBytedRight from '@fe6/icon-vue/lib/icons/byted-right';
import Button from '../button';
import type { Direction } from '../config-provider';

function noop() {}

export interface TransferOperationProps {
  class?: string;
  leftArrowText?: string;
  rightArrowText?: string;
  moveToLeft?: (e: MouseEvent) => void;
  moveToRight?: (e: MouseEvent) => void;
  leftActive?: boolean;
  rightActive?: boolean;
  style?: CSSProperties | string;
  disabled?: boolean;
  direction?: Direction;
  oneWay?: boolean;
}

const Operation: FunctionalComponent<TransferOperationProps> = (props) => {
  const {
    disabled,
    moveToLeft = noop,
    moveToRight = noop,
    leftArrowText = '',
    rightArrowText = '',
    leftActive,
    rightActive,
    class: className,
    style,
    direction,
    oneWay,
  } = props;

  return (
    <div class={className} style={style}>
      <Button
        type="primary"
        size="small"
        disabled={disabled || !rightActive}
        onClick={moveToRight}
        icon={
          direction !== 'rtl' ? (
            <IconBytedRight colors={['currentColor']} size={18} />
          ) : (
            <IconBytedLeft colors={['currentColor']} size={18} />
          )
        }
      >
        {rightArrowText}
      </Button>
      {!oneWay && (
        <Button
          type="primary"
          size="small"
          disabled={disabled || !leftActive}
          onClick={moveToLeft}
          icon={
            direction !== 'rtl' ? (
              <IconBytedLeft colors={['currentColor']} size={18} />
            ) : (
              <IconBytedRight colors={['currentColor']} size={18} />
            )
          }
        >
          {leftArrowText}
        </Button>
      )}
    </div>
  );
};
Operation.displayName = 'Operation';
Operation.inheritAttrs = false;

export default Operation;
