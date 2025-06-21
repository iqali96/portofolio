import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import juiceBar from '../views/JuiceBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/juice',
      name: 'juiceBar',
      component: juiceBar,
    },
  ],
})

export default router
