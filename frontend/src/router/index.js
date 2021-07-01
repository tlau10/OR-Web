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
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Impressum',
    name: 'Impressum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Impressum.vue')
  },
  {
    path: '/DownloadCenter',
    name: 'DownloadCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/DownloadCenter.vue')
  }
]

const router = new VueRouter({
  mode: "history", //switch Router from hash to history mode then linking of <v-btn>-tag from methodenuebersicht and solveruebersicht to DownloadCenter#<ID-Name> works 
  base: process.env.BASE_URL,
  scrollBehavior: function (to, from, savedPosition) {
    //if there is #<ID-Name>
    if (to.hash) {
      //then scroll to the affected id so that it is shown below (not behind) <v-app-bar>
      //therefore is an offset here given 
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 150 }
      }
    } else {
      //else show the top of the requested page
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
