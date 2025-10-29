import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Team from '../views/Team.vue'
import TestNotifications from '../views/TestNotifications.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/test-notifications',
    name: 'TestNotifications',
    component: TestNotifications
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Всегда прокручиваем в начало страницы при переходе с плавной анимацией
    return { 
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
