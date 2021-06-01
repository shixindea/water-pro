<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Card from './card.vue';
import CardString from './card.md?raw';
import CardCodeString from './card.vue?raw';
import Unit from './unit.vue';
import UnitString from './unit.md?raw';
import UnitCodeString from './unit.vue?raw';
import Countdown from './countdown.vue';
import CountdownString from './countdown.md?raw';
import CountdownCodeString from './countdown.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Statistic 统计数值
          展示统计数值。
          ## 何时使用
            - 当需要突出某个或某组数字时
            - 当需要展示带描述的统计类数据时使用

          ## 代码演示`,
  us: `# Statistic
          Statistics can be used to represent people or objects. It supports images, 'Icon's, or letters.
          ## Examples
          `,
};
export default {
  category: 'Components',
  subtitle: '统计数值',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Statistic',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={UnitString} code={UnitCodeString}>
            <Unit />
          </demo-container>
          <demo-container api={CardString} code={CardCodeString}>
            <Card />
          </demo-container>
          <demo-container api={CountdownString} code={CountdownCodeString}>
            <Countdown />
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
