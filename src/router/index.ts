import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UIView',
      component: () => import('../views/UIView.vue')
    },
        {
      path: '/onboarding',
      name: 'OnboardingView',
      component: () => import('../views/OnboardingView.vue')
    }
  ]
})

export default router
