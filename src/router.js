import Vue from 'vue'
import VueRouter from 'vue-router'
import ConfigRouter from './route.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)
// NProgress.configure({ minimum: 0.1, easing: 'ease', speed: 500 });

const router = new VueRouter({
  history: false,
  hashbang: true,
  base: __dirname,
  routes: ConfigRouter
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
