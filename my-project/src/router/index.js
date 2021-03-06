import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/Hello2'
import HelloStatic from '@/components/HelloStatic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hello2/:username',
      name: 'Hello2',
      component: Hello2
    },
    {
      path: '/HelloStatic',
      name: 'HelloStatic',
      component: HelloStatic
    }
  ]
})
