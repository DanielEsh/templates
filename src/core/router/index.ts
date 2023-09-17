import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: () => import('../../layouts/app-layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../../pages/index-page.vue'),
      },
    ],
  },
  {
    path: '/test',
    children: [
      {
        path: '',
        component: () => import('../../pages/index-page.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
