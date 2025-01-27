import type { App } from 'vue';

import * as components from './components';
import { default as version } from './version';
export * from './components';

import copy from './_util/copy-to-clipboard';
export type { CopyOptions } from './_util/copy-to-clipboard/interface';

const utils = {
  copy,
};

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });

  app.config.globalProperties.$message = components.message;
  app.config.globalProperties.$notification = components.notification;
  app.config.globalProperties.$info = components.Modal.info;
  app.config.globalProperties.$success = components.Modal.success;
  app.config.globalProperties.$error = components.Modal.error;
  app.config.globalProperties.$warning = components.Modal.warning;
  app.config.globalProperties.$confirm = components.Modal.confirm;
  app.config.globalProperties.$destroyAll = components.Modal.destroyAll;
  return app;
};

export { version, utils };

export default {
  version,
  install,
};
