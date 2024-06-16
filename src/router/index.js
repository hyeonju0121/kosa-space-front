import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/router/Home'
import Trainee from '@/router/Trainee'
import Admin from '@/router/Admin'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  ...Home,
  ...Trainee,
  ...Admin
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
