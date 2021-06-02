import { createApp, version } from 'vue';

import { isSite } from './utils/env';

console.log(isSite(), 'isSite11111');

import App from './AppDev.vue';

// eslint-disable-next-line no-console
console.log('Vue version: ', version);

const app = createApp(App);

// Mount when the route is ready
app.mount('#app', true);
