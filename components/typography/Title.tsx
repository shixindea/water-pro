import type { ExtractPropTypes, FunctionalComponent, PropType } from 'vue';
import omit from '../_util/omit';
import { tupleNum } from '../_util/type';
import warning from '../_util/warning';
import Base, { baseProps } from './Base';
import useConfigInject from '../_util/hooks/useConfigInject';

const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5, 6);

export const titleProps = () => ({
  ...omit(baseProps(), ['component', 'strong']),
  level: Number as PropType<typeof TITLE_ELE_LIST[number]>,
  iconName: String,
  iconPrefix: String,
  iconFont: String,
  iconColor: String,
});

export type TitleProps = Partial<ExtractPropTypes<ReturnType<typeof titleProps>>>;

const Title: FunctionalComponent<TitleProps> = (props, { slots, attrs }) => {
  const { prefixCls } = useConfigInject('typography', props);
  const { level = 1, iconName, iconPrefix, iconFont, iconColor, ...restProps } = props;
  let component: string;
  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = `h${level}`;
  } else {
    warning(false, 'Typography', 'Title only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value.');
    component = 'h1';
  }

  const titleProps = {
    ...restProps,
    component,
    ...attrs,
  };

  let theNode = null;

  if (iconName) {
    const theIconFamily = iconFont || 'iconfont';
    const theIconPrefix = iconPrefix || 'icon-';
    const theClass = [theIconFamily, `${theIconPrefix}${iconName}`];
    titleProps.resetable = true;

    theNode = (
      <div class={`${prefixCls.value}-icon`}>
        <div class={`${prefixCls.value}-icon-box`}>
          <span class={theClass} style={iconColor ? `color:${iconColor}` : ''} />
        </div>
        <Base {...titleProps} v-slots={slots} />
      </div>
    );
  } else {
    theNode = <Base {...titleProps} v-slots={slots}></Base>;
  }

  return theNode;
};

Title.displayName = 'ATypographyTitle';
Title.inheritAttrs = false;
Title.props = titleProps();

export default Title;
