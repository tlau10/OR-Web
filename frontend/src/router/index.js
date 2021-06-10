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
  },
  {
    path: '/methodenuebersicht',
    name: 'Methodenübersicht',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methodenuebersicht.vue')
  },
  {
    path: '/solveruebersicht',
    name: 'Solverübersicht',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solveruebersicht.vue')
  },
  {
    path: '/PTSS',
    name: 'PTSS',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/PTSS.vue')
  },
  {
    path: '/PowerLP',
    name: 'PowerLP',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/PLP.vue')
  },
  {
    path: '/DownloadCenter',
    name: 'DownloadCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/DownloadCenter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
