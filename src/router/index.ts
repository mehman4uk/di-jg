import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
      path: '/auth',
      name: 'Auth ',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/ ',
      name: ' ',
      component: () => import('@/views/storiesView/StoriesView.vue'),
    },
    {
      path: '/jgbutton',
      name: 'JGButtonView',
      component: () => import('@/components/componentsView/JGButtonView.vue'),
    },
    {
      path: '/jginput',
      name: 'JGInputView',
      component: () => import('@/components/componentsView/JGInputView.vue'),
    },
    {
      path: '/jgtextarea',
      name: 'JGTextareaView',
      component: () => import('@/components/componentsView/JGTextareaView.vue'),
    },
    {
      path: '/jgform',
      name: 'JGFormView',
      component: () => import('@/components/componentsView/JGFormView.vue'),
    },
    {
      path: '/jgstories',
      name: 'StoryView',
      component: () => import('@/views/storiesView/StoriesView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
