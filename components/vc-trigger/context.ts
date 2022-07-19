import type { InjectionKey, Ref } from 'vue';
import { computed, ref, inject, provide } from 'vue';
export interface TriggerContextProps {
  setPortal: (val?: any) => void;
  popPortal: boolean; // 将 portal 上传至父级元素渲染，不用考虑响应式
  portalType: Ref<string[]>; // 为了解决嵌套 trigger 失效问题 多选日期
  hasTypeInPortalType: (type: string) => boolean;
}
const TriggerContextKey: InjectionKey<TriggerContextProps> = Symbol('TriggerContextKey');
export const useProviderTrigger = () => {
  let portal = {};
  let portalType = ref([]);
  const hasTypeInPortalType = (type: string) =>
    portalType.value.length > 0
      ? portalType.value.find((oneType: string) => oneType === type)
      : false;
  provide(TriggerContextKey, {
    setPortal(val, type: string = 'default') {
      const theItem = hasTypeInPortalType(type);
      if (!theItem) {
        portal[type] = val;
        portalType.value.push(type);
      }
    },
    hasTypeInPortalType,
    popPortal: true,
    portalType,
  });
  return (type: string = 'default') => {
    return portal[type];
  };
};

export const useInjectTrigger = () => {
  return inject(TriggerContextKey, {
    setPortal: () => {},
    portalType: ref([]),
    hasTypeInPortalType: () => false,
    popPortal: false,
  });
};

export interface PortalContextProps {
  shouldRender: Ref<boolean>;
  inTriggerContext: boolean; // 仅处理 trigger 上下文的 portal
}
const PortalContextKey: InjectionKey<PortalContextProps> = Symbol('PortalContextKey');
export const useProvidePortal = (instance: any, config = { inTriggerContext: true }) => {
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(() => {
      const { sPopupVisible, popupRef, forceRender, autoDestroy } = instance || {};
      // if (popPortal) return true;
      let shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    }),
  });
};

export const useInjectPortal = () => {
  useProvidePortal({}, { inTriggerContext: false });
  const portalContext = inject(PortalContextKey, {
    shouldRender: computed(() => false),
    inTriggerContext: false,
  });
  return {
    shouldRender: computed(
      () => portalContext.shouldRender.value || portalContext.inTriggerContext === false,
    ),
  };
};
