import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { AppLayouts, AppRoutes } from './types'
import { RoutePath } from './paths'

interface AppRouter extends Omit<RouteRecordRaw, 'name' | 'children'> {
  name: AppLayouts | AppRoutes
  children?: AppRouter[]
}

const appRoutes: AppRouter[] = [
  {
    path: RoutePath.home,
    name: AppLayouts.DEFAULT,
    component: () => import('../../layouts/app-layout.vue'),
    children: [
      {
        path: '',
        name: AppRoutes.HOME,
        component: () => import('../../pages/index-page.vue'),
      },
    ],
  },
  {
    path: RoutePath.about,
    name: AppRoutes.ABOUT,
    component: () => import('../../pages/about-page.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes as RouteRecordRaw[],
})
