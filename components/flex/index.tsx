import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
import { defineComponent, computed, ref, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import type { SizeType } from '../config-provider';
import { tuple, withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import useFlexGapSupport from '../_util/hooks/useFlexGapSupport';
import classNames from '../_util/classNames';

export type FlexSize = SizeType | number;
const FlexSize = {
  small: 8,
  middle: 16,
  large: 24,
};
export const FlexProps = () => ({
  prefixCls: String,
  size: {
    type: [String, Number, Array] as PropType<FlexSize | [FlexSize, FlexSize]>,
  },
  direction: PropTypes.oneOf(tuple('horizontal', 'vertical')).def('horizontal'),
  placement: PropTypes.oneOf(tuple('row', 'col', '')).def(''),
  justifyContent: PropTypes.oneOf(
    tuple(
      'start',
      'end',
      'flex-start',
      'flex-end',
      'center',
      'left',
      'right',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'unsafe',
      'inherit',
      'initial',
      'unset',
      '',
    ),
  ).def(''),
  align: PropTypes.oneOf(tuple('start', 'end', 'center', 'baseline')),
  wrap: { type: Boolean, default: undefined },
  onClick: Function as PropType<MouseEventHandler>,
  // WATER NOTE
  blockable: { type: Boolean, default: undefined },
});

export type FlexProps = Partial<ExtractPropTypes<ReturnType<typeof FlexProps>>>;

function getNumberSize(size: FlexSize) {
  return typeof size === 'string' ? FlexSize[size] : size || 0;
}

const Flex = defineComponent({
  name: 'AFlex',
  props: FlexProps(),
  slots: ['split'],
  setup(props, { slots }) {
    console.log('props, { slots } ===>', props, slots);

    const { prefixCls, space, direction: directionConfig } = useConfigInject('space', props);
    const supportFlexGap = useFlexGapSupport();
    const size = computed(() => props.size ?? space.value?.size ?? 'small');
    const horizontalSize = ref<number>();
    const verticalSize = ref<number>();
    watch(
      size,
      () => {
        [horizontalSize.value, verticalSize.value] = (
          (Array.isArray(size.value) ? size.value : [size.value, size.value]) as [
            FlexSize,
            FlexSize,
          ]
        ).map((item) => getNumberSize(item));
      },
      { immediate: true },
    );
    const thePlacement = props.placement || props.direction;
    const theIsRaw =
      props.placement === 'row' || (props.direction === 'horizontal' && !props.placement);

    const mergedAlign = computed(() =>
      props.align === undefined && theIsRaw ? 'center' : props.align,
    );
    const cn = computed(() => {
      return classNames(prefixCls.value, `${prefixCls.value}-${thePlacement}`, {
        [`${prefixCls.value}-block`]: props.blockable,
        [`${prefixCls.value}-rtl`]: directionConfig.value === 'rtl',
        [`${prefixCls.value}-align-${mergedAlign.value}`]: mergedAlign.value,
      });
    });

    const marginDirection = computed(() =>
      directionConfig.value === 'rtl' ? 'marginLeft' : 'marginRight',
    );
    const style = computed(() => {
      const gapStyle: CSSProperties = {};
      if (supportFlexGap.value) {
        gapStyle.columnGap = `${horizontalSize.value}px`;
        gapStyle.rowGap = `${verticalSize.value}px`;
      }
      if (props.justifyContent) {
        gapStyle.justifyContent = props.justifyContent;
      }
      return {
        ...gapStyle,
        ...(props.wrap && { flexWrap: 'wrap', marginBottom: `${-verticalSize.value}px` }),
      } as CSSProperties;
    });
    return () => {
      const { wrap, direction = 'horizontal' } = props;

      const items = filterEmpty(slots.default?.());
      const len = items.length;

      if (len === 0) {
        return null;
      }
      const split = slots.split?.();
      // const itemClassName = `${prefixCls.value}-item`;
      const horizontalSizeVal = horizontalSize.value;
      const latestIndex = len - 1;
      return (
        <div class={cn.value} style={style.value}>
          {items.map((child, index) => {
            let itemStyle: CSSProperties = {};
            if (!supportFlexGap.value) {
              if (direction === 'vertical') {
                if (index < latestIndex) {
                  itemStyle = { marginBottom: `${horizontalSizeVal / (split ? 2 : 1)}px` };
                }
              } else {
                itemStyle = {
                  ...(index < latestIndex && {
                    [marginDirection.value]: `${horizontalSizeVal / (split ? 2 : 1)}px`,
                  }),
                  ...(wrap && { paddingBottom: `${verticalSize.value}px` }),
                };
              }
            }

            return (
              <>
                {/* <div class={itemClassName} style={itemStyle}> */}
                {child}
                {/* </div> */}

                {index < latestIndex &&
                  split && // <span class={`${itemClassName}-split`} style={itemStyle}>
                  //   {split}
                  // </span>
                  { split }}
              </>
            );
          })}
        </div>
      );
    };
  },
});

export default withInstall(Flex);
