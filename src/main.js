import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
// import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
  state: {
    footer: ''
  }
})

new Vue({
  el: '#app',
  store,
  router,
  // axios,
  render: h => h(App)
})