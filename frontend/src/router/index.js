import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/methoden',
    name: 'Methoden',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methoden.vue')
  },
  {
    path: '/solver',
    name: 'Solver',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver.vue')
  },
  {
    path: '/handbuch',
    name: 'Handbuch',
    component: () => import(/* webpackChunkName: "about" */ '../views/Handbuch.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
