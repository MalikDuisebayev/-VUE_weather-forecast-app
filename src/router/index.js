import { createRouter, createWebHistory } from 'vue-router'
import HeaderComponent from '../components/HeaderComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeaderComponent
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('../components/NotesComponent.vue')
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
