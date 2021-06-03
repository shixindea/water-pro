import { createApp, version } from 'vue';

import router, { setupRouter } from './routers';
import { setupComponents } from './utils/components';

import App from './App.vue';

// eslint-disable-next-line no-console
console.log('Vue version: ', version);

const app = createApp(App);

setupComponents(app);

setupRouter(app);

// Mount when the route is ready
router.isReady().then(() => {
  app.mount('#app', true);
});
