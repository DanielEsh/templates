import { AppRoutes } from './types'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/:pathMatch(.*)*',
}
