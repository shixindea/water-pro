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
    path: '/',
    component: Layout,
    props: route => {
      const name = route.path.split('/docs/vue/')[1].split('/')[0];
      return { name, showApi: true };
    },
    children: [
      {
        path: 'docs/vue/customize-theme',
        component: () => import('../vueDocs/customize-theme.en-US.md'),
      },
      {
        path: 'docs/vue/customize-theme-cn',
        component: () => import('../vueDocs/customize-theme.zh-CN.md'),
      },
      {
        path: 'docs/vue/getting-started',
        component: () => import('../vueDocs/getting-started.en-US.md'),
      },
      {
        path: 'docs/vue/getting-started-cn',
        component: () => import('../vueDocs/getting-started.zh-CN.md'),
      },
      {
        path: 'docs/vue/i18n',
        component: () => import('../vueDocs/i18n.en-US.md'),
      },
      {
        path: 'docs/vue/i18n-cn',
        component: () => import('../vueDocs/i18n.zh-CN.md'),
      },
      {
        path: 'docs/vue/introduce',
        component: () => import('../vueDocs/introduce.en-US.md'),
      },
      {
        path: 'docs/vue/introduce-cn',
        component: () => import('../vueDocs/introduce.zh-CN.md'),
      },
      {
        path: 'docs/vue/faq',
        component: () => import('../vueDocs/faq.en-US.md'),
      },
      {
        path: 'docs/vue/faq-cn',
        component: () => import('../vueDocs/faq.zh-CN.md'),
      },
      {
        path: 'docs/vue/changelog',
        component: () => import('../../CHANGELOG.en-US.md'),
      },
      {
        path: 'docs/vue/changelog-cn',
        component: () => import('../../CHANGELOG.zh-CN.md'),
      },
    ],
  },
  {
    path: '',
    component: () => import('../vueDocs/introduce.zh-CN.md'),
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
