// 解决低版本兼容性问题
import 'babel-polyfill';
import 'es6-promise/auto';
/* ie兼容 */
if (Number.parseInt === undefined) Number.parseInt = window.parseInt;
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;

import '@/utils/requestAnimationFrame';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {fontSize} from './utils/tool';

import '@/assets/js/flexible';
// import Vcomp from './components/index';
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
  .use(ElScrollbar);
import '@/styles/index.scss'; // global css

/* datav */
import {loading, borderBox7} from '@jiaminghi/data-view';

Vue.use(loading);
Vue.use(borderBox7);

import '@/assets/styles/base.scss';
import '@/assets/styles/common.scss';
import '@/assets/iconfont/iconfont.css';
import '@/styles/variables.scss';

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
