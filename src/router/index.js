// index.js (router)

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Comuna from '../views/Comuna.vue'
import EditarComuna from '../components/Comuna/EditarComuna.vue'
import NewComuna from '../components/Comuna/NewComuna.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comuna',
    name: 'comuna',
    component: Comuna
  },
  {
    path: '/crear',
    name: 'crear',
    component: NewComuna
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EditarComuna
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router