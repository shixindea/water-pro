export default [
  {
    path: 'copy:lang(-cn)?',
    meta: {
      category: 'Utils',
      type: '工具',
      title: 'Copy',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg',
      subtitle: '复制',
    },
    component: () => import('../../../utils/copy/demo/index.vue'),
  },
];
