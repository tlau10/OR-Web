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
    path: '/BOP',
    name: 'Beladungsoptimierung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Bop.vue')
  },
  {
    path: '/Einkaufswagen',
    name: 'Einkaufswagenoptimierung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Einkaufswagenoptimierung.vue')
  },
  {
    path: '/Eisenstadt',
    name: 'Eisenstadt',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Eisenstadt.vue')
  },
  {
    path: '/Ernährungsplaner',
    name: 'Ernährungsplaner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Ernährungsplaner.vue')
  },
  {
    path: '/IB_Standortplanung',
    name: 'Innerbetriebliche_Standortplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Innerbetriebliche_Standortplanung.vue')
  },
  {
    path: '/Jahresplanung',
    name: 'Jahresplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Jahresplanung.vue')
  },
  {
    path: '/Leitstand_Pflegestation',
    name: 'Leitstand_Pflegestation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Leitstand_Pflegestation.vue')
  },
  {
    path: '/Maschinenbelegungsplanung',
    name: 'Maschinenbelegungsplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Maschinenbelegungsplanung.vue')
  },
  {
    path: '/OP_Scheduling',
    name: 'OP_Scheduling',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/OP_Scheduling.vue')
  },
  {
    path: '/Portfolio_Optimierung',
    name: 'Portfolio_Optimierung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Portfolio_Optimierung.vue')
  },
  {
    path: '/Roundtrip',
    name: 'Roundtrip',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Roundtrip.vue')
  },
  {
    path: '/Standortplanung',
    name: 'Standortplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Standortplanung.vue')
  },
  {
    path: '/Tagesschichtplanung',
    name: 'Tagesschichtplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Tagesschichtplanung.vue')
  },
  {
    path: '/TR_Optimizer',
    name: 'TR_Optimizer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/TR_Optimizer.vue')
  },
  {
    path: '/Verkehrsplaner',
    name: 'Verkehrsplaner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Verkehrsplaner.vue')
  },
  {
    path: '/Wochenschichtplanung',
    name: 'Wochenschichtplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Wochenschichtplanung.vue')
  },
  {
    path: '/WagnerWithin',
    name: 'WagnerWithin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/WagnerWithin.vue')
  },
  {
    path: '/Zuordnungsplanung',
    name: 'Zuordnungsplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Zuordnungsplanung.vue')
  },
  {
    path: '/Dakin',
    name: 'Dakin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/Dakin.vue')
  },
  {
    path: '/GLPK',
    name: 'GLPK',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/GLPK.vue')
  },
  {
    path: '/Iterator',
    name: 'Iterator',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/Iterator.vue')
  },
  {
    path: '/Iterator2.0',
    name: 'Iterator2.0',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/Iterator2.0.vue')
  },
  {
    path: '/LiPS',
    name: 'LiPS',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/LiPS.vue')
  },
  {
    path: '/LPSolve',
    name: 'LPSolve',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/LPSolve.vue')
  },
  {
    path: '/OR_GraphX',
    name: 'OR_GraphX',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/OR_GraphX.vue')
  },
  {
    path: '/PowerLP',
    name: 'PowerLP',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/PowerLP.vue')
  },
  {
    path: '/PrimeDualWandler',
    name: 'PrimeDualWandler',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/PrimeDualWandler.vue')
  },
  {
    path: '/Sensibilitätsanalyse',
    name: 'Sensibilitätsanalyse',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/Sensibilitätsanalyse.vue')
  },
  {
    path: '/WebIteratorRSA',
    name: 'WebIteratorRSA',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/WebIteratorRSA.vue')
  },
  {
    path: '/WebIteratorSAU',
    name: 'WebIteratorSAU',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/WebIteratorSAU.vue')
  },
  {
    path: '/DownloadCenter',
    name: 'DownloadCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/DownloadCenter.vue')
  },
  {
    path: '/Github',
    name: 'Github',
    beforeEnter() {location.href = 'https://github.com/tlau10/OR-WebSS21'},
  },

]

const router = new VueRouter({
  routes
})

export default router
