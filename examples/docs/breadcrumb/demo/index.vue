<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import WithIconString from './withIcon.md?raw';
import WithIcon from './withIcon.vue';
import WithIconCodeString from './withIcon.vue?raw';
import SeparatorString from './separator.md?raw';
import Separator from './separator.vue';
import SeparatorCodeString from './separator.vue?raw';
import RouterString from './router.md?raw';
import Router from './router.vue';
import RouterCodeString from './router.vue?raw';
import OverlayString from './overlay.md?raw';
import Overlay from './overlay.vue';
import OverlayCodeString from './overlay.vue?raw';
import SeparatorIndepentString from './separator-indepent.md?raw';
import SeparatorIndepent from './separator-indepent.vue';
import SeparatorIndepentCodeString from './separator-indepent.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Breadcrumb面包屑
           显示当前页面在系统层级结构中的位置，并能向上返回。
         ## 何时使用
         - 当系统拥有超过两级以上的层级结构时；
         - 当需要告知用户『你在哪里』时；
         -  当需要向上导航的功能时。
         ## 代码演示
        `,
  us: `# Breadcrumb
         A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
         ## When to use
         - When the system has more than two layers in a hierarchy.
         - When you need to inform the user of where they are.
         - When the user may need to navigate back to a higher level.
         - When the application has multi-layer architecture.
         ## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '面包屑',
  type: 'Navigation',
  zhType: '导航',
  title: 'Breadcrumb',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={WithIconString} code={WithIconCodeString}>
            <WithIcon />
          </demo-container>
          <demo-container api={SeparatorString} code={SeparatorCodeString}>
            <Separator />
          </demo-container>
          <demo-container api={RouterString} code={RouterCodeString}>
            <Router />
          </demo-container>
          <demo-container api={SeparatorIndepentString} code={SeparatorIndepentCodeString}>
            <SeparatorIndepent />
          </demo-container>
          <demo-container api={OverlayString} code={OverlayCodeString}>
            <Overlay />
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
