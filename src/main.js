// 解决低版本兼容性问题
import 'babel-polyfill';
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();

/* ie兼容 */
if (Number.parseInt === undefined) Number.parseInt = window.parseInt;
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;

// if (!window.Promise) {
//   document.writeln(
//     '<script src="./es6-promise.js"' + '>' + '<' + '/' + 'script>',
//   );
// }

import '@/utils/requestAnimationFrame';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {fontSize, IEVersion} from './utils/tool';
// import echarts from '@/utils/echarts.js';
import echarts from '@/utils/echarts.min.js';
Vue.prototype.$echarts = echarts;
Vue.prototype.$isIE = IEVersion();

if (process.env.NODE_ENV !== 'production') require('./mock/mockService');

import {
  Button,
  Table,
  Select,
  Menu,
  Row,
  MenuItem,
  MenuItemGroup,
  Form,
  Option,
  Breadcrumb,
  Pagination,
  Progress,
  TableColumn,
  BreadcrumbItem,
  Submenu,
  Col,
  FormItem,
  Input,
} from 'element-ui';
import ElScrollbar from 'element-ui/lib/scrollbar';
Vue.use(Button)
  .use(Table)
  .use(Select)
  .use(Menu)
  .use(Row)
  .use(Col)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Form)
  .use(Option)
  .use(Breadcrumb)
  .use(Pagination)
  .use(Progress)
  .use(BreadcrumbItem)
  .use(TableColumn)
  .use(FormItem)
  .use(Submenu)
  .use(Input)
  .use(ElScrollbar);
// 过滤器
import filters from '@/utils/filters';
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
import '@/assets/js/flexible';

Vue.prototype.$fontSize = fontSize;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
