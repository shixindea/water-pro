import { createApp, version } from 'vue';

import App from './AppDev.vue';

// eslint-disable-next-line no-console
console.log('Vue version: ', version);

const app = createApp(App);

// Mount when the route is ready
app.mount('#app', true);
