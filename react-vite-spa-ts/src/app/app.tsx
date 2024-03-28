import { StrictMode } from 'react'

import { AppRouter } from './router'
import './styles/index.css'
import './styles/tailwind.css'

export const App = () => {
  return (
    <StrictMode>
      <AppRouter />
    </StrictMode>
  )
}
