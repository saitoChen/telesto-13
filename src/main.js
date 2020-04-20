import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resize from './utils/resize'

resize()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
