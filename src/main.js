import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './assets/css/global.css'

import axios from 'axios'

// Mock, remove if not use
import './mock'

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
