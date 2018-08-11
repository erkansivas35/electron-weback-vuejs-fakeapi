import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from './App.vue'
import Home from './components/Home.vue'
import PostDetail from './components/PostDetail.vue'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post-detail/:postId',
      name: 'PostDetail',
      component: PostDetail
    }
  ]
})


new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App)
  }
})