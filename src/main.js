import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resize from './utils/resize'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './api/index'
import { Button, Input, Message, Table, TableColumn } from 'element-ui';
import Vue2Editor from "vue2-editor";
import './assets/icon/iconfont.css'

Vue.use(Button)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Vue2Editor);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

resize()
Vue.prototype.$api = api
Vue.prototype.$message = Message
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
