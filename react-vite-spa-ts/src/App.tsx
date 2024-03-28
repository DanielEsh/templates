import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateRoute } from './components/PrivateRouter.tsx'
import { AuthLayout } from './layouts/auth-layout.tsx'
import { RootLayout } from './layouts/root-layout.tsx'
import { ListPage, ListCreatePage, ListDetailsPage } from './pages/list'
// import {CategoriesPage} from "./routes/list.tsx";
import { CategoriesCreate } from './routes/categories-create.tsx'
import { CategoriesDetails } from './routes/categories-details.tsx'
import { Login } from './routes/login.tsx'

// const HomePage = lazy(() => import('./routes/home.tsx'))
const HomePage = lazy(() => {
  return Promise.all([
    import('./routes/home.tsx'),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => moduleExports)
})

const CategoriesPage = lazy(() => {
  return Promise.all([
    import('./routes/categories.tsx'),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => moduleExports)
})

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
        index: true,
      },
      {
        path: '/list',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ListPage />
          </Suspense>
        ),
        children: [
          {
            path: 'create',
            element: <ListCreatePage />,
          },
          {
            path: ':id',
            element: <ListDetailsPage />,
          },
        ],
      },
      {
        path: '/categories',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CategoriesPage />
          </Suspense>
        ),
        children: [
          {
            path: 'create',
            element: <CategoriesCreate />,
          },
          {
            path: ':id',
            element: <CategoriesDetails />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
