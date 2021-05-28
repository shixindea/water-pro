import '@@style';
import {
  Affix,
  Anchor,
  Button,
  BackTop,
  Col,
  Input,
  Menu,
  Row,
  Tooltip,
  ConfigProvider,
} from '@@';
import Md from '../components/md.vue';
import cn from '../components/cn.vue';
import us from '../components/us.vue';
import Api from '../components/api.vue';
import demoBox from '../components/demoBox.vue';
import demoContainer from '../components/demoContainer.vue';
import demoSort from '../components/demoSort';

const basic = (_, { slots }) => {
  return slots && slots.default && slots.default();
};

export const setupComponents = (app) => {
  app.use(Affix);
  app.use(Anchor);
  app.use(BackTop);
  app.use(Button);
  app.use(Col);
  app.use(Input);
  app.use(Menu);
  app.use(Row);
  app.use(Tooltip);
  app.use(ConfigProvider);

  app.component(Md.name, Md);
  app.component(Api.name, Api);
  app.component('demo-box', demoBox);
  app.component('demo-container', demoContainer);
  app.component('demo-sort', demoSort);
  app.component('cn', () => 'cn')
  app.component('us', () => 'us')
  app.component('demo', basic)
}
