import type { App, VNodeTypes, Plugin, ExtractPropTypes, PropType } from 'vue';
import { defineComponent, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import IconBytedCheckOne from '@fe6/icon-vue/lib/icons/byted-check-one';
import IconBytedInfo from '@fe6/icon-vue/lib/icons/byted-info';
import IconBytedCloseOne from '@fe6/icon-vue/lib/icons/byted-close-one';
import IconBytedAttention from '@fe6/icon-vue/lib/icons/byted-attention';
import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';

export const IconMap = {
  success: IconBytedCheckOne,
  info: IconBytedInfo,
  error: IconBytedCloseOne,
  warning: IconBytedAttention,
};

export const ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized,
};

export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;

// ExceptionImageMap keys
const ExceptionStatus = Object.keys(ExceptionMap);

export const resultProps = () => ({
  prefixCls: String,
  icon: PropTypes.any,
  status: { type: [Number, String] as PropType<ResultStatusType>, default: 'info' },
  title: PropTypes.any,
  subTitle: PropTypes.any,
  extra: PropTypes.any,
});

export type ResultProps = Partial<ExtractPropTypes<ReturnType<typeof resultProps>>>;

const renderIcon = (prefixCls: string, { status, icon }) => {
  if (ExceptionStatus.includes(`${status}`)) {
    const SVGComponent = ExceptionMap[status];
    return (
      <div class={`${prefixCls}-icon ${prefixCls}-image`}>
        <SVGComponent />
      </div>
    );
  }
  const IconComponent = IconMap[status];
  const iconNode = icon || <IconComponent colors={['currentColor']} />;
  return <div class={`${prefixCls}-icon`}>{iconNode}</div>;
};

const renderExtra = (prefixCls: string, extra: VNodeTypes) =>
  extra && <div class={`${prefixCls}-extra`}>{extra}</div>;

const Result = defineComponent({
  name: 'AResult',
  props: resultProps(),
  slots: ['title', 'subTitle', 'icon', 'extra'],
  setup(props, { slots }) {
    const { prefixCls, direction } = useConfigInject('result', props);
    const className = computed(() =>
      classNames(prefixCls.value, `${prefixCls.value}-${props.status}`, {
        [`${prefixCls.value}-rtl`]: direction.value === 'rtl',
      }),
    );
    return () => {
      const title = props.title ?? slots.title?.();
      const subTitle = props.subTitle ?? slots.subTitle?.();
      const icon = props.icon ?? slots.icon?.();
      const extra = props.extra ?? slots.extra?.();
      const pre = prefixCls.value;
      return (
        <div class={className.value}>
          {renderIcon(pre, { status: props.status, icon })}
          <div class={`${pre}-title`}>{title}</div>
          {subTitle && <div class={`${pre}-subtitle`}>{subTitle}</div>}
          {renderExtra(pre, extra)}
          {slots.default && <div class={`${pre}-content`}>{slots.default()}</div>}
        </div>
      );
    };
  },
});

/* add resource */
Result.PRESENTED_IMAGE_403 = ExceptionMap[403];
Result.PRESENTED_IMAGE_404 = ExceptionMap[404];
Result.PRESENTED_IMAGE_500 = ExceptionMap[500];

/* istanbul ignore next */
Result.install = function (app: App) {
  app.component(Result.name, Result);
  return app;
};

export default Result as typeof Result &
  Plugin & {
    readonly PRESENTED_IMAGE_403: typeof unauthorized;
    readonly PRESENTED_IMAGE_404: typeof noFound;
    readonly PRESENTED_IMAGE_500: typeof serverError;
  };
