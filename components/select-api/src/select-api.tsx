import type { Indexable } from '../../_util/type';

import { defineComponent, computed, ref, unref, onUpdated, onUnmounted, watchEffect } from 'vue';
import { isNumber, isUndefined, isString } from '@fe6/shared';

import ASelect from '../../select';
import AEmpty from '../../empty';
import Spin from '../../spin';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';

import useFetch from '../../_util/hooks/use-fetch';
import omit from '../../_util/omit';

import { selectApiProps } from './props';
import { fillFieldNames } from './utils';
import zhCn from '../locale/zh_CN';

export default defineComponent({
  name: 'ASelectApi',
  props: selectApiProps(),
  setup(props, { attrs, emit, expose, slots }) {
    const [contextLocale] = useLocaleReceiver('SelectApi', zhCn);
    const locale = { ...contextLocale.value, ...props.locale };
    const fieldNames = computed(() => fillFieldNames(props.fieldNames));
    const { fetch } = useFetch(props.api);

    const loading = ref(false);
    const theOptions = ref<any[]>([]);
    const theLabelLabelOptions = ref<any[]>([]);

    const getOneItem = (oItem: Indexable) => {
      const oneItem: Indexable = {
        label:
          isNumber(oItem) || isString(oItem)
            ? oItem
            : oItem[fieldNames.value.label] || oItem[fieldNames.value.value],
        value: isNumber(oItem) || isString(oItem) ? oItem : oItem[fieldNames.value.value],
        disabled:
          isNumber(oItem) || isString(oItem) ? false : oItem[fieldNames.value.disabled] || false,
        key:
          isNumber(oItem) || isString(oItem)
            ? oItem
            : oItem[fieldNames.value.key] || oItem[fieldNames.value.value],
        ...oItem,
      };

      return oneItem;
    };

    const formatOptions = () => {
      if (!slots.default) {
        theLabelLabelOptions.value = theOptions.value.map((oItem: Indexable) => {
          const oneItem: any = getOneItem(oItem);

          if (oItem[fieldNames.value.options] && oItem[fieldNames.value.options].length > 0) {
            oneItem.options = (oItem[fieldNames.value.options] || []).map((cItem: Indexable) =>
              getOneItem(cItem),
            );
          }
          return oneItem;
        });
      }
    };

    const getOptionDatas = () => {
      if (!loading.value && !slots.option && !slots.default) {
        loading.value = true;
        fetch({
          success: (res: any) => {
            loading.value = false;
            theOptions.value = res;
            formatOptions();
          },
          error: () => {
            loading.value = false;
          },
          params: props.apiParams,
        });
      }
    };

    const getOptionsTime = ref(1);

    const dropdownVisibleChange = (dropDownIsOpen: boolean) => {
      if (
        dropDownIsOpen &&
        !unref(theOptions).length &&
        getOptionsTime.value < 2 &&
        !props.loopGetOptions
      ) {
        getOptionsTime.value += props.loopGetOptions ? 0 : 1;
        getOptionDatas();
        formatOptions();
      }
      emit('dropdownVisibleChange', dropDownIsOpen);
    };

    watchEffect(() => {
      if (
        !isUndefined(props.value) &&
        String(props.value).length > 0 &&
        (isUndefined(props.options) || props.options.length < 1)
      ) {
        dropdownVisibleChange(true);
      }

      if (!isUndefined(props.options) && props.options.length > 0) {
        theOptions.value = props.options.slice();
        formatOptions();
      }
    });

    onUpdated(() => {
      if (!unref(theOptions).length) {
        getOptionsTime.value = 0;
      }
    });

    onUnmounted(() => {
      getOptionsTime.value = 0;
    });

    expose({
      getOptionDatas,
    });

    return () => {
      let notFoundNode = null;
      const selectProps = omit(props, ['fieldNames', 'options']);
      if (selectProps.loading || loading.value) {
        notFoundNode = (
          <div style={{ margin: '32px 0' }}>
            <AEmpty
              description={
                selectProps.loadingPlaceholder || locale?.loadingPlaceholder || '正在加载'
              }
              imageStyle={{ height: '40px' }}
              image={<Spin size="large" />}
            />
          </div>
        );
      } else {
        notFoundNode = <AEmpty image={AEmpty.PRESENTED_IMAGE_SIMPLE} />;
      }

      return (
        <ASelect
          {...selectProps}
          loading={selectProps.loading || loading.value}
          {...attrs}
          options={slots.default ? props.options : theLabelLabelOptions.value}
          onDropdownVisibleChange={dropdownVisibleChange}
          v-slots={{
            ...slots,
            notFoundContent: () => notFoundNode,
          }}
        />
      );
    };
  },
});
