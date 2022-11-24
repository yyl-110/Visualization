import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/layout';
import {DATA_STATISTICE, SERVICE_MONITORING} from '../utils/enum';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/product-design/home',
    children: [
      {
        path: 'product-design',
        name: 'ProductDesign',
        redirect: '/product-design/home',
        component: () => import('@/views/ProductDesign'),
        meta: {title: '产品设计数据统计', icon: 'icon_product.png', mainTitle: DATA_STATISTICE},
        noShowingChildren: true,
        children: [
          {
            path: 'home',
            name: 'ProductDesign',
            component: () => import('@/views/ProductDesign/Home'),
            meta: {mainTitle: DATA_STATISTICE},
          },
          {
            path: 'pdmlist',
            name: 'PdmList',
            hidden: true,
            component: () => import('@/views/ProductDesign/PdmList'),
            meta: {title: 'PDM查看列表', mainTitle: DATA_STATISTICE},
          },
          {
            path: 'overdue',
            name: 'Overdue',
            hidden: true,
            component: () => import('@/views/ProductDesign/Overdue'),
            meta: {title: '超期流程任务', mainTitle: DATA_STATISTICE},
          },
          {
            path: 'change',
            name: 'ProductChange',
            hidden: true,
            component: () => import('@/views/ProductDesign/ProductChange'),
            meta: {title: 'PDM产品变更单', mainTitle: DATA_STATISTICE},
          },
        ],
      },
    ],
  },
  {
    path: '/base-data',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'BaseData',
        component: () => import('@/views/BaseData'),
        meta: {title: '基础数据统计', icon: 'icon_basics@.png', mainTitle: DATA_STATISTICE},
      },
    ],
  },
  {
    path: '/process-data',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'ProcessData',
        component: () => import('@/views/ProcessData'),
        meta: {title: '流程数据统计', icon: 'icon_data.png', mainTitle: DATA_STATISTICE},
      },
    ],
  },
  {
    path: '/design-change',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'DesignChange',
        component: () => import('@/views/DesignChange'),
        meta: {title: '设计更改统计', icon: 'icon_design.png', mainTitle: DATA_STATISTICE},
      },
    ],
  },
  {
    path: '/product-standard',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'ProductStandard',
        component: () => import('@/views/ProductStandard'),
        meta: {title: '产品标准化率统计', icon: 'icon_standard.png', mainTitle: DATA_STATISTICE},
      },
    ],
  },
  {
    path: '/parts-reuse',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'PartsReuse',
        component: () => import('@/views/PartsReuse'),
        meta: {title: '零件重用统计', icon: 'icon_statistics.png', mainTitle: DATA_STATISTICE},
      },
    ],
  },
  {
    path: '/data-contribution',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'DataContribution',
        component: () => import('@/views/DataContribution'),
        meta: {title: '数据贡献量及排行榜', icon: 'icon_contribution.png', mainTitle: SERVICE_MONITORING},
      },
    ],
  },
  {
    path: '/process-execution',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'ProcessExecution',
        component: () => import('@/views/ProcessExecution'),
        meta: {title: '流程执行量统计', icon: 'icon_implement.png', mainTitle: SERVICE_MONITORING},
      },
    ],
  },
  {
    path: '/process-efficiency',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'ProcessEfficiency',
        component: () => import('@/views/ProcessEfficiency'),
        meta: {title: '流程执行效率统计', icon: 'icon_efficiency.png', mainTitle: SERVICE_MONITORING},
      },
    ],
  },

  // {
  //   path: '/brand',
  //   name: 'Brand',
  //   hidden: true,
  //   component: () => import('@/views/Brand.vue'),
  //   meta: {
  //     title: '公司品牌介绍',
  //   },
  // },
];
console.log(routes);
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  base: '/statistics/',
  routes,
});

export default router;
