import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Hello from '@/views/Hello'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
