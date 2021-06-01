/** @format */

import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import Layout from '../components/layout';
import demoRoutes from './conf';

const routes = [
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0];
      return { name, showDemo: true };
    },
    children: demoRoutes,
  },
  {
    path: '',
    redirect: '/components/button-cn',
    component: Layout,
  },
];

// app router
const router = createRouter({
  history: createWebHistory('/'),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router as any);
}

// router.onError((error) => {
//   console.error(error);
// });

export default router;
