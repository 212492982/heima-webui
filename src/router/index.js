import router from './routers'
import NProgress from '@/plugins/nprogress'

router.beforeEach((to, from, next) => {
  NProgress.start()
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/login') {
    if (tokenStr) {
      next('/home')
      NProgress.done()
    } else {
      next()
    }
    return
  }
  if (!tokenStr) {
    next('/login')
    NProgress.done()
    return
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
