import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/onboarding',
      name: 'OnboardingView',
      component: () => import('../views/OnboardingView.vue'),
    },
    {
      path: '/jgbutton',
      name: 'JGButtonView',
      component: () => import('../components/componentsView/JGButtonView.vue'),
    },
    {
      path: '/jginput',
      name: 'JGInputView',
      component: () => import('../components/componentsView/JGInputView.vue'),
    },
    {
      path: '/jgtextarea',
      name: 'JGTextareaView',
      component: () =>
        import('../components/componentsView/JGTextareaView.vue'),
    },
  ],
})

export default router
