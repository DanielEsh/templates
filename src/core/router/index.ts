import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export enum AppLayouts {
  DEFAULT = 'DefaultLayout',
}

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
}

interface AppRouter extends Omit<RouteRecordRaw, 'name' | 'children'> {
  name: AppLayouts | AppRoutes
  children?: AppRouter[]
}

const routes: AppRouter[] = [
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
    path: '/about',
    name: AppRoutes.ABOUT,
    component: () => import('../../pages/about-page.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})
