import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './helpers'

const CharacterCreate = React.lazy(() => import('./create-character'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/create-character',
        element: <CharacterCreate />,
      },
    ],
  },
])
