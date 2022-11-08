// 解决低版本兼容性问题
import 'babel-polyfill';
import Es6Promise from 'es6-promise';
require('es6-promise').polyfill();
Es6Promise.polyfill();

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vueParticles from 'vue-particles';
// import Vcomp from './components/index';
import Toast from './components/toast';
import Element from 'element-ui';
Vue.use(Element);
import '@/styles/index.scss'; // global css

/* datav */
import {loading, digitalFlop, borderBox7} from '@jiaminghi/data-view';

Vue.use(loading);
Vue.use(digitalFlop);
Vue.use(borderBox7);

import '@/assets/styles/base.scss';
import '@/assets/styles/common.scss';
import '@/assets/iconfont/iconfont.css';
import '@/styles/variables.scss';

Vue.use(vueParticles);
// Vue.use(Vcomp);

Vue.config.productionTip = false;

Vue.prototype.$Toast = Toast;

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
