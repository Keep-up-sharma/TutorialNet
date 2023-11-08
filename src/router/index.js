import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TutorialView from '../views/TutorialView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tutorial/:id',
      name: 'tutorial',
      component: TutorialView,
      props: true
    },
  ],
})

export default router
