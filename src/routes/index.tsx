import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LazyPage } from './helpers'
import Home from './home'

const CharacterList = React.lazy(() => import('./character'))

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/character', element: <LazyPage component={<CharacterList />} /> },
])
