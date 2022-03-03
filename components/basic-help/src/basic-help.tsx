import type { CSSProperties } from 'vue';
import { defineComponent, computed, unref } from 'vue';
import { isString, isArray } from '@fe6/shared';
import IconBytedInfo from '@fe6/icon-vue/lib/icons/byted-info';

import Tooltip from '../../tooltip';
import useConfigInject from '../../_util/hooks/useConfigInject';

import { getPopupContainer } from '../../_util/dom';

import { basicHelpProps } from './props';

export default defineComponent({
  name: 'ABasicHelp',
  components: { Tooltip },
  props: basicHelpProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('basic-help', props);

    const getOverlayStyle = computed((): CSSProperties => {
      return {
        maxWidth: props.maxWidth,
      };
    });

    const getWrapStyle = computed((): CSSProperties => {
      return {
        color: props.color,
        fontSize: props.fontSize,
      };
    });

    const getMainStyleRef = computed(() => {
      return props.absolute ? props.position : {};
    });

    const renderTitle = () => {
      const list = props.text;

      if (isString(list)) {
        return <p class={`${prefixClsNew.value}-text`}>{list}</p>;
      }

      if (isArray(list)) {
        const arrList: string[] = list as string[];
        return arrList.map((item: string, index: number) => {
          return (
            <p key={item}>
              <>
                {props.showIndex ? `${index + 1}. ` : ''}
                {item}
              </>
            </p>
          );
        });
      }

      return null;
    };

    return () => {
      return (
        <Tooltip
          title={<div style={unref(getWrapStyle)}>{renderTitle()}</div>}
          overlayClassName={`${prefixClsNew.value}-wrap`}
          autoAdjustOverflow={true}
          overlayStyle={unref(getOverlayStyle)}
          placement={props.placement as any}
          getPopupContainer={() => getPopupContainer()}
        >
          <span class={prefixClsNew.value} style={unref(getMainStyleRef)}>
            {<IconBytedInfo class="w-basic-help-icon" size={16} colors={['#aaa']} />}
          </span>
        </Tooltip>
      );
    };
  },
});
