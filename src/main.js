import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from "bootstrap-vue";

import App from './App.vue'
import router from "./router";

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')