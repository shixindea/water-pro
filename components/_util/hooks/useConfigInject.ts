import { computed, inject } from 'vue';
import { defaultConfigProvider } from '../../config-provider';

export default (name: string, props: Record<any, any>) => {
  // TODO [fix] 解决使用的过程中未用 configProvider 报错
  const configProvider = inject('configProvider', defaultConfigProvider) || defaultConfigProvider;
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  return { configProvider, prefixCls };
};
