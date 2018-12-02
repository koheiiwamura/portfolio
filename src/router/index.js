import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Top
    },
    {
      path: '/work',
      name: 'Work',
      component: Top,
      children: [{
          path: 'internship',
          component: Top
        },
        {
          path: 'iridge',
          component: Top
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contanct',
      component: Top
    },
  ]
})
