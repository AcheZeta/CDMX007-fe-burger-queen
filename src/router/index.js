import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu'
import Ticket from '@/views/Ticket'
import Prueba from '@/views/Prueba'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Prueba
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    }
  ]
})
