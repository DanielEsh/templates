import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '../../layouts/root-layout.tsx'
import {
  HomePage,
  ListCreatePage,
  ListDetailsPage,
  ListPage,
} from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
    ],
  },
])
