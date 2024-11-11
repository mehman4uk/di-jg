import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
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
    {
      path: '/jgform',
      name: 'JGFormView',
      component: () => import('../components/componentsView/JGFormView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
