import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/Home.vue'
import PostDetail from './components/PostDetail.vue'

export default new Router({
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