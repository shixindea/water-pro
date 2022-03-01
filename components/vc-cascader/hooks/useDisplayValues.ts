import { toPathOptions } from '../utils/treeUtil';
import type {
  DefaultOptionType,
  SingleValueType,
  SingleLabelType,
  BaseCascaderProps,
  InternalFieldNames,
} from '../Cascader';
import { toPathKey } from '../utils/commonUtil';
import type { Ref } from 'vue';
import { computed } from 'vue';
import { isValidElement } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';

export default (
  rawValues: Ref<SingleValueType[]>,
  options: Ref<DefaultOptionType[]>,
  fieldNames: Ref<InternalFieldNames>,
  multiple: Ref<boolean>,
  displayRender: Ref<BaseCascaderProps['displayRender']>,
) => {
  return computed(() => {
    const mergedDisplayRender =
      displayRender.value ||
      // Default displayRender
      (({ labels }) => {
        const mergedLabels = multiple.value ? labels.slice(-1) : labels;
        const SPLIT = ' / ';

        if (mergedLabels.every((label) => ['string', 'number'].includes(typeof label))) {
          return mergedLabels.join(SPLIT);
        }

        // If exist non-string value, use VueNode instead
        return mergedLabels.reduce((list, label, index) => {
          const keyedLabel = isValidElement(label) ? cloneElement(label, { key: index }) : label;

          if (index === 0) {
            return [keyedLabel];
          }

          return [...list, SPLIT, keyedLabel];
        }, []);
      });

    return rawValues.value.map((valueCells) => {
      const valueOptions = toPathOptions(valueCells, options.value, fieldNames.value);
      const labelCells: SingleLabelType = valueOptions.map(({ option, value }) =>
        String(option?.[fieldNames.value.label] ?? value),
      );
      const label = mergedDisplayRender({
        labels: labelCells,
        selectedOptions: valueOptions.map(({ option }) => option),
      });

      return {
        label,
        value: toPathKey(valueCells),
        valueCells,
        labelCells,
      };
    });
  });
};