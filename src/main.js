import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import 'mint-ui/lib/style.min.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:4000'
Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
