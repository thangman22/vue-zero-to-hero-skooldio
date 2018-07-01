import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VeeValidate)

new Vue({
  render: h => h(App)
}).$mount('#app')
