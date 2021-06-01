<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import InputNumber from './input-number.vue';
import InputNumberString from './input-number.md?raw';
import InputNumberCodeString from './input-number.vue?raw';
import IconSlider from './icon-slider.vue';
import IconSliderString from './icon-slider.md?raw';
import IconSliderCodeString from './icon-slider.vue?raw';
import TipFormatter from './tip-formatter.vue';
import TipFormatterString from './tip-formatter.md?raw';
import TipFormatterCodeString from './tip-formatter.vue?raw';
import Event from './event.vue';
import EventString from './event.md?raw';
import EventCodeString from './event.vue?raw';
import Mark from './mark.vue';
import MarkString from './mark.md?raw';
import MarkCodeString from './mark.vue?raw';
import Vertical from './vertical.vue';
import VerticalString from './vertical.md?raw';
import VerticalCodeString from './vertical.vue?raw';
import ShowTooltip from './show-tooltip.vue';
import ShowTooltipString from './show-tooltip.md?raw';
import ShowTooltipCodeString from './show-tooltip.vue?raw';
import Reverse from './reverse.vue';
import ReverseString from './reverse.md?raw';
import ReverseCodeString from './reverse.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Slider 滑动输入条
  滑动型输入器，展示当前值和可选范围。
  ## 何时使用
  当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。
            ## 代码演示`,
  us: `# Slider
  A Slider component for displaying current value and intervals in range.
  # When To Use
  To input a value in a range.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '滑动输入条',
  type: 'Data Entry',
  title: 'Slider',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={InputNumberString} code={InputNumberCodeString}>
            <InputNumber />
          </demo-container>
          <demo-container api={IconSliderString} code={IconSliderCodeString}>
            <IconSlider />
          </demo-container>
          <demo-container api={TipFormatterString} code={TipFormatterCodeString}>
            <TipFormatter />
          </demo-container>
          <demo-container api={EventString} code={EventCodeString}>
            <Event />
          </demo-container>
          <demo-container api={MarkString} code={MarkCodeString}>
            <Mark />
          </demo-container>
          <demo-container api={VerticalString} code={VerticalCodeString}>
            <Vertical />
          </demo-container>
          <demo-container api={ShowTooltipString} code={ShowTooltipCodeString}>
            <ShowTooltip />
          </demo-container>
          <demo-container api={ReverseString} code={ReverseCodeString}>
            <Reverse />
          </demo-container>
        </demo-sort>
        <api>
          <CN />
        </api>
      </div>
    );
  },
};
</script>
