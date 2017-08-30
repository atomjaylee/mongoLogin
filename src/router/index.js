import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/register',
      name: 'Hello',
      component(resolve) {
        require.ensure(['@/components/Hello.vue'], () => {
          resolve(require('@/components/Hello.vue'))
        })
      }
    }, {
      path: '/',
      name: 'List',
      component(resolve) {
        require.ensure(['@/components/list.vue'], () => {
          resolve(require('@/components/list.vue'))
        })
      },

    }, {
      path: '/login',
      name: 'Login',
      component(resolve) {
        require.ensure(['@/components/login.vue'], () => {
          resolve(require('@/components/login.vue'))
        })
      }
    }, {
      path: '*',
      component(resolve) {
        require.ensure(['@/components/404.vue'], () => {
          resolve(require('@/components/404.vue'))
        })
      },
      hidden: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
