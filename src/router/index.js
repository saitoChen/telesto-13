import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import(/* webpackChunkName: "HomeContent" */ '../views/HomeContent.vue')
      },
      {
        path: '/articles',
        name: 'articles',
        component: () => import(/* webpackChunkName: "Articles" */ '../views/Articles.vue')
      },
      {
        path: '/svg&canvas',
        name: 'svg&canvas',
        component: () => import(/* webpackChunkName: "Svg&Canvas" */ '../views/Svg&Canvas.vue')
      },
    ],
    redirect: '/homePage'
  },
  {
    path: '/articleDetail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "ArticleDetail" */ '../views/ArticleDetail.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
