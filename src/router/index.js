import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('../components/NotesComponent.vue')
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import('../components/WeatherComponent.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../components/SettingComponent.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
