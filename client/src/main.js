// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'lib-flexible/flexible.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import instance from './utils/axios.js'
import VueAxios from 'vue-axios'
import store from './store/index.js'
Vue.use(VueAxios, instance);
// Vue.prototype.$httpd = axios;
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;
// Vue.use(Loading.directive);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
