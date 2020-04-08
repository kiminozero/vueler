import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Productlist from '@/components/Productlist'
import Productinfo from '@/components/Productinfo'
import WebSocket from '@/components/WebSocket'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/websocket',
      name: 'WebSocket',
      component: WebSocket
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      redirect: 'Login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/productlist',
          name: 'Productlist',
          component: Productlist
        },
        {
          path: '/productinfo',
          name: 'Productinfo',
          component: Productinfo
        }
      ]
    }
  ]
})
