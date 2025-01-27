import type { ExtractPropTypes, HTMLAttributes } from 'vue';
import { computed, createVNode, defineComponent, provide, ref } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import { SiderHookProviderKey } from './injectionKey';

export const basicProps = () => ({
  prefixCls: String,
  hasSider: { type: Boolean, default: undefined },
  tagName: String,
});

export type BasicProps = Partial<ExtractPropTypes<ReturnType<typeof basicProps>>> & HTMLAttributes;

type GeneratorArgument = {
  suffixCls: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
  name: string;
};

function generator({ suffixCls, tagName, name }: GeneratorArgument) {
  return (BasicComponent: typeof Basic) => {
    const Adapter = defineComponent({
      name,
      props: basicProps(),
      setup(props, { slots }) {
        const { prefixCls } = useConfigInject(suffixCls, props);
        return () => {
          const basicComponentProps = {
            ...props,
            prefixCls: prefixCls.value,
            tagName,
          };
          return <BasicComponent {...basicComponentProps} v-slots={slots}></BasicComponent>;
        };
      },
    });
    return Adapter;
  };
}

const Basic = defineComponent({
  props: basicProps(),
  setup(props, { slots }) {
    return () => createVNode(props.tagName, { class: props.prefixCls }, slots);
  },
});

const BasicLayout = defineComponent({
  props: basicProps(),
  setup(props, { slots }) {
    const { direction } = useConfigInject('', props);
    const siders = ref<string[]>([]);
    const siderHookProvider = {
      addSider: (id: string) => {
        siders.value = [...siders.value, id];
      },
      removeSider: (id: string) => {
        siders.value = siders.value.filter((currentId) => currentId !== id);
      },
    };

    provide(SiderHookProviderKey, siderHookProvider);
    const divCls = computed(() => {
      const { prefixCls, hasSider } = props;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-has-sider`]:
          typeof hasSider === 'boolean' ? hasSider : siders.value.length > 0,
        [`${prefixCls}-rtl`]: direction.value === 'rtl',
      };
    });
    return () => {
      const { tagName } = props;
      return createVNode(tagName, { class: divCls.value }, slots);
    };
  },
});

const Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  name: 'ALayout',
})(BasicLayout);

const Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  name: 'ALayoutHeader',
})(Basic);

const Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  name: 'ALayoutFooter',
})(Basic);

const Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  name: 'ALayoutContent',
})(Basic);

export { Header, Footer, Content };

export default Layout;
