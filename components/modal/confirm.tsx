import { createVNode, render as vueRender } from 'vue';
import IconBytedCheckOne from '@fe6/icon-vue/lib/icons/byted-check-one';
import IconBytedInfo from '@fe6/icon-vue/lib/icons/byted-info';
import IconBytedCloseOne from '@fe6/icon-vue/lib/icons/byted-close-one';
import IconBytedAttention from '@fe6/icon-vue/lib/icons/byted-attention';
import IconAntdExclamationCircle from '@fe6/icon-vue/lib/icons/antd-exclamation-circle';

import ConfirmDialog from './ConfirmDialog';
import type { ModalFuncProps } from './Modal';
import { destroyFns } from './Modal';
import ConfigProvider, { globalConfigForApi } from '../config-provider';
import omit from '../_util/omit';

type ConfigUpdate = ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps);

export type ModalFunc = (props: ModalFuncProps) => {
  destroy: () => void;
  update: (configUpdate: ConfigUpdate) => void;
};

const confirm = (config: ModalFuncProps) => {
  const container = document.createDocumentFragment();
  let currentConfig = {
    ...omit(config, ['parentContext', 'appContext']),
    close,
    visible: true,
  } as any;
  let confirmDialogInstance = null;
  function destroy(...args: any[]) {
    if (confirmDialogInstance) {
      // destroy
      vueRender(null, container as any);
      confirmDialogInstance.component.update();
      confirmDialogInstance = null;
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function close(this: typeof close, ...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(this, args);
      },
    };
    update(currentConfig);
  }
  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    if (confirmDialogInstance) {
      Object.assign(confirmDialogInstance.component.props, currentConfig);
      confirmDialogInstance.component.update();
    }
  }

  const Wrapper = (p: ModalFuncProps) => {
    const global = globalConfigForApi;
    const rootPrefixCls = global.prefixCls;
    const prefixCls = p.prefixCls || `${rootPrefixCls}-modal`;
    return (
      <ConfigProvider {...(global as any)} notUpdateGlobalConfig={true} prefixCls={rootPrefixCls}>
        <ConfirmDialog {...p} rootPrefixCls={rootPrefixCls} prefixCls={prefixCls}></ConfirmDialog>
      </ConfigProvider>
    );
  };
  function render(props: ModalFuncProps) {
    const vm = createVNode(Wrapper, { ...props });
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    vueRender(vm, container as any);
    return vm;
  }

  confirmDialogInstance = render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update,
  };
};

export default confirm;

export function withWarn(props: ModalFuncProps): ModalFuncProps {
  return {
    icon: () => <IconBytedAttention colors={['currentColor']} />,
    okCancel: false,
    ...props,
    type: 'warning',
  };
}

export function withInfo(props: ModalFuncProps): ModalFuncProps {
  return {
    icon: () => <IconBytedInfo colors={['currentColor']} />,
    okCancel: false,
    ...props,
    type: 'info',
  };
}

export function withSuccess(props: ModalFuncProps): ModalFuncProps {
  return {
    icon: () => <IconBytedCheckOne colors={['currentColor']} />,
    okCancel: false,
    ...props,
    type: 'success',
  };
}

export function withError(props: ModalFuncProps): ModalFuncProps {
  return {
    icon: () => <IconBytedCloseOne colors={['currentColor']} />,
    okCancel: false,
    ...props,
    type: 'error',
  };
}

export function withConfirm(props: ModalFuncProps): ModalFuncProps {
  return {
    icon: () => <IconAntdExclamationCircle colors={['currentColor']} />,
    okCancel: true,
    ...props,
    type: 'confirm',
  };
}
