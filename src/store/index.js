import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';
import settings from './modules/settings';
import product from './modules/product';
import page from './modules/page';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    product,
    page,
  },
  getters,
});

export default store;
