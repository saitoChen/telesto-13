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
        component: () => import(/* webpackChunkName: "HomeContent" */ '../components/Home/HomeContent.vue')
      },
      {
        path: '/articles',
        name: 'articles',
        component: () => import(/* webpackChunkName: "Articles" */ '../views/Articles.vue')
      },
      {
        path: '/svg&canvas',
        name: 'svg&canvas',
        component: () => import(/* webpackChunkName: "Svg&Canvas" */ '../components/Home/Svg&Canvas.vue')
      },
    ],
    redirect: '/homePage'
  },
  {
    path: '/articleDetail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "ArticleDetail" */ '../views/ArticleDetail.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    redirect: '/admin/adminHome',
    children: [
      {
        path: '/admin/adminHome',
        name: 'adminHome',
        component: () => import(/* webpackChunkName: "adminHome" */ '../components/Admin/adminHome.vue')
      },
      {
        path: '/admin/adminArticle',
        name: 'adminArticle',
        component: () => import(/* webpackChunkName: "adminArticle" */ '../components/Admin/adminArticle.vue')
      },
      {
        path: '/admin/adminData',
        name: 'adminData',
        component: () => import(/* webpackChunkName: "adminData" */ '../components/Admin/adminData.vue')
      }
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
