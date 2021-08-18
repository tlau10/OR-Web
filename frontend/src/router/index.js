import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
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
    path: '/socket',
    name: 'Socket',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Socket.vue')
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
    path: '/Ernaehrungsplaner',
    name: 'Ernaehrungsplaner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Ernaehrungsplaner.vue')
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
    path: '/WagnerWhitin',
    name: 'WagnerWhitin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/WagnerWhitin.vue')
  },
  {
    path: '/WagnerWhitinExecute',
    name: 'WagnerWhitinExecute',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/WagnerWhitinExecute.vue')
  },
  {
    path: '/WagnerWhitinLP',
    name: 'WagnerWhitinLP',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/WagnerWhitinLP.vue')
  },
  {
    path: '/Zuordnungsplanung',
    name: 'Zuordnungsplanung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/Zuordnungsplanung.vue')
  },
  {
    path: '/JobShop',
    name: 'JobShop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Methods/JobShop.vue')
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
    path: '/PrimalDualWandler',
    name: 'PrimalDualWandler',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/PrimalDualWandler.vue')
  },
  {
    path: '/Sensibilitaetsanalyse',
    name: 'Sensibilitaetsanalyse',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solver/Sensibilitaetsanalyse.vue')
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
    path: '/Impressum',
    name: 'Impressum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Impressum.vue')
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
  {
    path: '/Datenschutz',
    name: 'Datenschutz',
    component: () => import(/* webpackChunkName: "about" */ '../views/Datenschutz.vue')
  },
  {
    path: '/Mail',
    name: 'Mail',
    beforeEnter() {location.href = 'mailto: doris.bohnet@htwg-konstanz.de'},
  },

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
