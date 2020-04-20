import Vue from 'vue'
import VueRouter from 'vue-router'

import { Login, Welcome } from '@/components/features'

import Layout from '@/components/layout/DeedyLayout'

Vue.use(VueRouter)

const constRoutes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/layout',
    component: Layout,
    children: [
      { path: '/home', component: Welcome },
      { path: '/user/list', component: () => import('@/components/user/UserTable') }
    ]
  },
  { path: '*', component: () => import('@/components/features/404') }
]

const router = new VueRouter({
  routes: constRoutes
})

export default router
