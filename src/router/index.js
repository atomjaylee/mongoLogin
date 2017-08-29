import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/list'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
