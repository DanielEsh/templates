import { RouterProvider } from 'react-router-dom'

import { router } from './router.tsx'

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
