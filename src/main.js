import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import "./common/filters"
import ApiService from "./common/api.service"
import "./assets/scss/main.scss";

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate, {
  statusEvents: {
    'pristine': 'blur',
    'invalid': 'change',
    'valid': 'blur'
  },
  delay:500
});

ApiService.init()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
