// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosIntance from 'https'

Vue.config.productionTip = false
Vue.prototype.$http = axiosIntance;

// import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Element);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axiosIntance,
  // template: '<App/>',
  // components: { App }
  render:h=> h(App)
})
