import type { CSSProperties } from 'vue';
import { defineComponent, computed, unref } from 'vue';
import { isString, isArray } from '@fe6/shared';
import { InfoCircleOutlined } from '@ant-design/icons-vue';

import Tooltip from '../../tooltip';
import useConfigInject from '../../_util/hooks/useConfigInject';

import { getPopupContainer } from '../../_util/dom';
import { getSlot } from '../../_util/props-util';

import { basicHelpProps } from './props';

export default defineComponent({
  name: 'ABasicHelp',
  components: { Tooltip },
  props: basicHelpProps,
  setup(props, { slots }) {
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
          placement={props.placement as 'left'}
          getPopupContainer={() => getPopupContainer()}
        >
          <span class={prefixClsNew.value} style={unref(getMainStyleRef)}>
            {<InfoCircleOutlined class="w-basic-help-icon" />}
          </span>
        </Tooltip>
      );
    };
  },
});
