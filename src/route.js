export default [{
  path: '/',
  component: r => {
    require(['./page/home.vue'], r)
  }
}, {
  path: '/me',
  component: r => {
    require(['./page/me.vue'], r)
  }
}, {
  path: '/hot',
  component: r => {
    require(['./page/hot.vue'], r)
  }
}, {
  path: '/detail',
  component: r => {
    require(['./page/detail.vue'], r)
  }
}]
